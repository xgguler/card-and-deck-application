import mongoose from 'mongoose'
import uuid from 'node-uuid'

export interface DeckDocument extends mongoose.Document {
    deckId: string,
    shuffled: boolean,
    type: string,
}

const deckSchema = new mongoose.Schema ({
    deckId: { unique: true, type: String, default: uuid.v1},
    type: {type: String, required: true},
    shuffled: {type: Boolean, required: true},
});

const DeckModel = mongoose.model('Deck', deckSchema);

export default DeckModel;