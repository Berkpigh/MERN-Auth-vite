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
        default: 'https://lh3.googleusercontent.com/a/ACg8ocIXLqKXhbc1ylnwAebdGi6KRc7s126q4BrzcWaiLZE=s96-c',
    },
}, {timestamp: true})

const User = mongoose.model('User', userSchema)

export default User