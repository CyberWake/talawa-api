const Donation = require('../../models/Donation');

module.exports = async (parent, args) => {
    console.log(args.data.applePay)
    return {donation: Donation({
        gPayUPI: "ritikfbd-2@okaxis",
        applePay:"ritikfbd-1@okaxis",
        bankDetails:"ritikfbd@okaxis"
    })};
}