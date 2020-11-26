import mongoose from 'mongoose';
const { Schema } = mongoose;

const EconomicDivision = new Schema({
    clase: String,
    title: String,
    economicClass: { type: Schema.Types.ObjectId, ref: 'economicClase' },
    creationDate:{type: Date, default: Date.now}
})

module.exports = mongoose.model('economicDivision', EconomicDivision);