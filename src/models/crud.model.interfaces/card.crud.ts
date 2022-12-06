import {DocumentDefinition} from 'mongoose';
import {DeckDocument} from '../../models/deck.model';

export interface CardCRUD {
    insertCards: (resource: DocumentDefinition<DeckDocument>) => Promise<any>;
    aggregateCard: (id: string, count:  number) => Promise<any>;
    updateOneCard: (resource: Array<any>) => Promise<any>;
}