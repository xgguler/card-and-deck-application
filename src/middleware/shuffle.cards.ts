import logger from '../utils/logger';

export async function shuffle(cards: Array<any>) {
    try {
        let j, x, i;
        for (i = cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = cards[i];
            cards[i] = cards[j];
            cards[j] = x;
        }
        return cards;
    } catch (e) {
        logger.error(e);
        throw new Error(e);
    }
    
}