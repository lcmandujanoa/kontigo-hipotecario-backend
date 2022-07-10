import { Schema, model } from 'mongoose';

const loanSchema = new Schema({
  status: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: false
  },
  user: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: true
  },
  client: {
    ref: 'Client',
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true,
});

export default model('Loan', loanSchema);