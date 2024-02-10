import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: 'https://lh3.googleusercontent.com/a/ACg8ocK_UKfS7RP7yGzP5tm5vRJmGvboxV1SRWavAIr8CaY0YQ=s96-c-rg-br100',
    },
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User