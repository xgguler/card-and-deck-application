import logger from '../utils/logger';

export async function setValidation(cards: Array<any>, flag: Boolean) {
    try {
        cards.forEach(element => {
            if (flag) {
                if(element.value == '2' || element.value == '3'|| element.value == '4'|| element.value == '5' || element.value == '6') {
                    element.isValid = false;
                }
            }
        });
    
        return cards;
    } catch (e) {
        logger.error(e);
        throw new Error(e);
    }
}