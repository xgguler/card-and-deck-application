import logger from '../utils/logger';

export async function setCards(id: any) {
    try {
        const values = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
        const suits = ["hearts", "diamonds", "spades", "clubs"];
        const cards = [];
        for (let s = 0; s < suits.length; s++) {
            for (let v = 0; v < values.length; v++) {
                const value = values[v];
                const type = suits[s];
                const deckId = id;
                const isValid = true;
                cards.push({ value, type, deckId, isValid});
            }
        }
        return cards;
    } catch (e) {
        logger.error(e);
        throw new Error(e);
    }
}