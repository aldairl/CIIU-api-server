import mongoose from 'mongoose';
const { Schema } = mongoose;

const EconomicClase = new Schema({
    _id: String,
    clase: String,
    title: String,
    // divisions: { type: Schema.Types.ObjectId, ref: 'economicDivision' },
    creationDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('economicClase', EconomicClase);