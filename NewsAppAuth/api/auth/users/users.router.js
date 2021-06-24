const router = require('express').Router();

const {graphqlHTTP} = require('express-graphql');
const graphqlSchema = require('./users.schema');
const graphqlResolver= require('./users.rootResolver')
router.use('/hello',(req,res)=>{
    res.send("response from Rest API")
})

router.use('/',graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
})
)


module.exports= router