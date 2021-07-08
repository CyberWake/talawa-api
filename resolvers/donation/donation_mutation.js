const Donation = require('../../models/Donation');

module.exports = async (parent, args,context) => {
    console.log(args);
    // let donation = new Donation();
    return {
        gPayUPI: args.data.gPayUPI,
        applePay: args.data.applePay,
        bankDetails: args.data.bankDetails,
    };
};