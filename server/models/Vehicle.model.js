const mongoose = require('mongoose')
const { Schema, model } = require("mongoose");
const { stringify } = require('querystring');

const vehicleSchema = new Schema({
    photo: {
        type: String,
        default: "link"
    },
    description: {
        type: String,

    },
    purchaseDate: {
        type: Number
    },
    vehicleType: {
        type: String,
        enum: ['MOTOR', 'NOMOTOR'],
        required: true
    },

    identifier: {
        classType: {
            type: String,
            enum: ["License Plate", "Serial Nº"]
        },
        value: String,
        required: true

    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
},
    {
        timestamps: true,
    }
)
const Vehicle = model("Vehicle", vehicleSchema);
module.exports = Vehicle