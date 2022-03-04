const mongoose = require('mongoose')
const { Schema, model } = require("mongoose");


const vehicleSchema = new Schema(
    {

        name: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            default: "link"
        },
        description: {
            type: String,

        },
        purchaseDate: {
            type: String
        },
        vehicleType: {
            type: String,
            enum: ['MOTOR', 'NOMOTOR'],
            required: true
        },
        identifier: {
            classType: {
                type: String,
                enum: ["License Plate", "Serial Nº"],
                // required: true
            },
            value: {
                type: String,
                // required: true
            }
        },
        owner: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: true,
    }
)
const Vehicle = model("Vehicle", vehicleSchema);

// Vehicle.syncIndexes()

module.exports = Vehicle