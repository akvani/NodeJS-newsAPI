const User = require('./users.entity');
const { uuid } = require('uuidv4')
const bcrypt = require('bcryptjs')


// Token Generation Pacakage
const jwt = require('jsonwebtoken');
const jwtSecretKey = "keyformine";

module.exports = {
    // add a new User
    register: async args => {
        try {
            console.log(args.userInput.emailid)
            const euser = await User.findOne({ emailid: args.userInput.emailid });
            console.log(euser);

            if (euser) {
                throw new Error('User already Registered');
            }
            else {
                // Encrypt the password
                const hashedpassword = await bcrypt.hash(args.userInput.password, 12)
                const newUser = new User({
                    userid: uuid(),
                    firstname:args.userInput.firstname,
                    secondname:args.userInput.secondname,
                    emailid:args.userInput.emailid,
                    password:hashedpassword,
                    phoneno:args.userInput.phoneno,
                })

                const result = await newUser.save();
                return { ...result._doc, password: null, _id: result.userId };
            }
        }
        catch (err) {
            throw err;
        }

    },
    // Get all the users
    user: () => {
        return User.find();
    }
    ,
    login: async ({ email, password }) => {
console.log(email+password);
        const euser = await User.findOne({ emailid: email })
        console.log(euser);
        if (!euser) {
            console.log("User does not exist")
           // throw new Error('User does not Exist')
           return { userId: "", token: "", tokenExpiration: 0 }
        }
       
        const ismatch = await bcrypt.compare(password, euser.password);
        if (!ismatch) {
           // throw new Error('Password')
           return { userId: "", token: "", tokenExpiration: 0 }
        }

        const token = jwt.sign(
            {
                userId: euser.userId,
                userName: euser.userName
            },
            jwtSecretKey,
            {
                expiresIn: "1h"
            }
        )
        console.log(token);
        return { userId: euser.userId, token: token, tokenExpiration: 1 }

    },
    IsAuthenticated: async ({ token }) => {
        try {
            const response = await jwt.verify(token, jwtSecretKey);
            return { isAuthenticated: true }
        }
        catch (err) {
            return { isAuthenticated: false }
        }

    }
}