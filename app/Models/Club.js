'use strict'

const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');

class Club extends BaseModel {

    static boot({ schema }) {
        this.index({ clubManager: 1, eventManager: 1 }, { background: true, unique: true });        
    }

    static get schema() {
        return {
            name: {
                type: String,
                required: true,
            },
            clubManager: {
                type: Schema.Types.ObjectId,
                required: true,
                unique: true,
                ref: 'User'
            },
            eventManager: {
                type: Schema.Types.ObjectId,
                required: true,
                unique: true,
                ref: 'User',
            },
        }
    }
}

module.exports = Club.buildModel('Club')
