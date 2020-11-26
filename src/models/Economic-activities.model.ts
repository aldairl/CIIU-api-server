import mongoose from 'mongoose';
const { Schema } = mongoose;

const EconomicActivities = new Schema({
    code: String,
    title: String,
    subdivision: { type: Schema.Types.ObjectId, ref: 'economicSubDivision' },
    creationDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('economicActivities', EconomicActivities);