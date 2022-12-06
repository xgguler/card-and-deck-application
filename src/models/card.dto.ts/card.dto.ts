class CardDTO {
    value!: string;
    suit!: string;
}

export function mapCardDetails(cardList: Array<any>) {
    try {
        let cards: CardDTO[] = [];

        if (cardList.length != 0) {
            cardList.forEach(element => {
                if(element.isValid ==  true) {
                    const cardDto = new CardDTO();
                    cardDto.value = element.value;
                    cardDto.suit = element.type;
                    cards.push(cardDto);
                }
            });
        }
        return cards;
        
    } catch (e) {
        throw new Error(e);
    }
}