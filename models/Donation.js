const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  gPayUPI: {
    type: String,
    default: "ritikfbd-2@okaxis"
  },
  applePay: {
    type: String,
    default: "ritikfbd-1@okaxis"
  },
  bankDetails: {
    type: String,
    default: "ritikfbd@okaxis"
  },

});

donationSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Donation', donationSchema);
