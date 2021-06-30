const Donation = require('../../models/Donation');

module.exports = async (parent, args) => {
    let donation = new Donation({
        gPayUPI: args.gPayUPI,
        applePay: args.applePay,
        bankDetails: args.bankDetails,
    });
    return {donation: donation};
};