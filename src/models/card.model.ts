import mongoose from 'mongoose'

export interface CardDocument extends mongoose.Document {
    value: number,
    type: string,
    isValid: number,
    deckId: string,
}

const cardSchema = new mongoose.Schema ({
    value: {type: String, required: true},
    type: {type: String, required: true},
    isValid: {type: Boolean, required: true},
    deckId: {type: String, required: true},
})
  

const CardModel = mongoose.model('Card', cardSchema);

export default CardModel;