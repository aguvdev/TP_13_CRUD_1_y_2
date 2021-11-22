const toThousand = require('./toThousand')
module.exports = (price,discount) => toThousand(price - (discount * price / 100).toFixed(0))
