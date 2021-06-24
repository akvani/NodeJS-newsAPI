const authUser = require('./users.dao')

const rootResolver={
    ...authUser
}

module.exports= rootResolver;