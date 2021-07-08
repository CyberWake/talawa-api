const Donation = {
    gPayUPI: async (parent) => {
        if(parent['donation']['gPayUPI'] == undefined){
            return 'GOOGLE PAY';
        }else{
            return parent['donation']['gPayUPI'];
        }   
    },
    applePay: async (parent) => {
        if(parent['donation']['applePay'] == undefined){
            return 'APPLE PAY';
        }else{
            return parent['donation']['applePay'];
        }
    },
    bankDetails: async (parent) => {
        if(parent['donation']['bankDetails'] == undefined){
            return 'BANK DETAILS';
        }else{
            return parent['donation']['bankDetails'];
        }
    },
};

module.exports = Donation;