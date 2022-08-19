const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {

    let persons= [
            {
        //     name: "PK",
        //     age: 10,
        //     votingStatus: false
        // },
        // {
        //     name: "SK",
        //     age: 20,
        //     votingStatus: false
        // },
        // {
        //     name: "AA",
        //     age: 70,
        //     votingStatus: false
        // },
        // {
        //     name: "SC",
        //     age: 5,
        //     votingStatus: false
        // },
        // {
        //     name: "HO",
        //     age: 40,
        //   votingStatus: false
        // }
        // ]
        
        
        
















    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array