import {DocumentDefinition} from 'mongoose';
import { DeckDocument } from '../../models/deck.model';
import { GetDeckByUUIDInput } from "../../schema/deck.schema";

export interface DeckCRUD {
    findDeckByUUID: (id: GetDeckByUUIDInput["params"]) => Promise<any>;
    createDeck: (resource: DocumentDefinition<
        Omit<DeckDocument, "deckId" | "cards">>) => Promise<any>;
}