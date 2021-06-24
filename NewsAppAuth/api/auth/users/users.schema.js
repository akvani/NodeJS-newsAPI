const {buildSchema}=require('graphql')

module.exports=buildSchema(`
type User {
    _id:ID!,
    firstname:String!,
secondname:String!,
emailid:String!,
userid:String!,
password:String!,
phoneno:String!
}

input userInput{
    firstname:String!,
    secondname:String!,
    emailid:String!,
    password:String!,
    phoneno:String!
}

type AuthData{
    userid:ID!
    token:String!
    tokenExpiration:Int!
}

type TokenResponse{
    isAuthenticated: Boolean!
}

type RootQuery{
    user:[User]!
    login(email:String!,password:String!):AuthData!
    IsAuthenticated(token:String!):TokenResponse!
}

type RootMutation{
    register(userInput:userInput):User
}

schema{
    query:RootQuery
    mutation:RootMutation
}

`);