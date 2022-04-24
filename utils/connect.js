import mongoose from 'mongoose';

function connect() {
    try {
        const mongo_uri = "mongodb+srv://nextcrudadmin:nextcrudadmin@cluster0.tecyb.mongodb.net/nextjs_crud_operation?retryWrites=true&w=majority"
        mongoose.connect(mongo_uri, () => {
            console.log("Connected DB")
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = connect