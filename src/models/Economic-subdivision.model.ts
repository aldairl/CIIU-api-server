import mongoose from 'mongoose';
const { Schema } = mongoose;

const EconomicSubDivision = new Schema({
    clase: String,
    title: String,
    division: { type: Schema.Types.ObjectId, ref: 'economicDivision' },
    creationDate:{type: Date, default: Date.now}
})

module.exports = mongoose.model('economicSubDivision', EconomicSubDivision);