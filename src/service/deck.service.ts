import {DocumentDefinition} from 'mongoose';
import DeckModel, { DeckDocument } from '../models/deck.model';
import CardModel from '../models/card.model';
import CardService from './card.service';
import { GetDeckByUUIDInput } from "../schema/deck.schema";
import validate from 'uuid-validate';
import logger from '../utils/logger';
import { DeckCRUD } from '../models/crud.model.interfaces/deck.crud';
import { mapCardDetails } from '../models/card.dto.ts/card.dto';
import DeckDTO from '../models/deck.dto.ts/deck.dto';

class DeckService implements DeckCRUD { 
    async createDeck(input: DocumentDefinition<
        Omit<DeckDocument, "deckId" | "cards">>) {
        try {
            if (input.type !== 'FULL' && input.type !== 'SHORT') {
                throw new Error('Invalid type provided.');
            }
            const deck = await DeckModel.create(input);
            await CardService.insertCards(deck);
            const remaining = await CardModel.aggregate([
                {
                    $match: {
                        isValid: true,
                        deckId: deck.deckId,
                    },
                }
            ])
    
            const deckDto = new DeckDTO();
            deckDto.deckId = deck.deckId;
            deckDto.type = deck.type;
            deckDto.shuffled = deck.shuffled;
            deckDto.remaining = remaining.length;

            return deckDto
        } catch (e) {
            logger.error(e);
            throw new Error(e);
        }
    }
    
    async findDeckByUUID(input: GetDeckByUUIDInput["params"]) {
        try {
            if (!validate(input.uuid, 1)) {
                throw new Error("Id is not valid.");
            }
            const deck = await DeckModel.find({deckId : input.uuid});
            const cards = await CardModel.aggregate([
                {
                    $match: {
                        deckId: input.uuid,
                    },
                }
            ]);
            const remaining = await CardModel.aggregate([
                {
                    $match: {
                        isValid: true,
                        deckId: input.uuid,
                    },
                }
            ]);

            const deckDto = new DeckDTO();
            deckDto.deckId = deck[0].deckId;
            deckDto.type = deck[0].type;
            deckDto.shuffled = deck[0].shuffled;
            deckDto.remaining = remaining.length;
            deckDto.cards = mapCardDetails(cards);

            return deckDto;
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default new DeckService();