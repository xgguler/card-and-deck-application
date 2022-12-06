import {DocumentDefinition} from 'mongoose';
import CardModel from '../models/card.model';
import {DeckDocument} from '../models/deck.model';
import { setCards } from '../middleware/set.card.details';
import { shuffle } from '../middleware/shuffle.cards';
import { setValidation } from '../middleware/validate.cards';
import validate from 'uuid-validate';
import logger from '../utils/logger';
import { CardCRUD } from '../models/crud.model.interfaces/card.crud';
import { mapCardDetails } from '../models/card.dto.ts/card.dto';

class CardService implements CardCRUD {

    async insertCards(input: DocumentDefinition<DeckDocument>) {
        try {
            let cards = await setCards(input.deckId);
    
            if (input.type == 'SHORT') {
                cards = await setValidation(cards, true);
            } else {
                cards = await setValidation(cards, false);
            }
            if (input.shuffled == true) {
                cards = await shuffle(cards);
            }
            return await CardModel.insertMany(cards);
        } catch (e) {
            logger.error(e);
            throw new Error(e);
        }
    }
    
    async aggregateCard(uuid: string, count: number) {
        try {
            if (!validate(uuid, 1)) {
                logger.error("Id is not valid.");
                throw new Error("Id is not valid.");
            } 
    
            const cards = await CardModel.aggregate([
                {
                    $match: {
                        deckId: uuid,
                        isValid: true,
                    },
                }
            ]).limit(count);
    
            await this.updateOneCard(cards);
            return mapCardDetails(cards);
        } catch (e) {
            logger.error(e);
            throw new Error(e);
        }
    }

    async updateOneCard(cards: Array<any>) {
        try {
            cards.forEach(element => {
                      CardModel.updateOne({
                         _id: element._id
                     },{
                    $set: { isValid: false }
                }).exec() 
            });
            
        } catch (e) {
            logger.error(e);
            throw new Error(e);
        }
    }
}

export default new CardService();