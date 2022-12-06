export default class DeckDTO {
    deckId!: string;
    type!: string;
    shuffled!: boolean;
    remaining!: number;
    cards!: Array<any>;
}

