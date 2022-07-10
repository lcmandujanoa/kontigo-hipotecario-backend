import { Schema, model } from 'mongoose';

const loanhistorySchema = new Schema({
  loan: {
    ref: 'Loan',
    type: Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamps: true,
});

export default model('Loanhistory', loanhistorySchema);