const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    school:{
        type: String,
        required: true
    },
    students: [
        {
            name: {
                type: String,
                required: true
            },
            classes: {
                type: String,
                required: true
            },
            academic: {
                type: Number
            },
            team_work: {
                type: Number
            },
            comm_skills: {
                type: Number
            }
        }
    ]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);