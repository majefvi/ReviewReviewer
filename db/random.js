const DATABASE_NAME = 'mydatabase',
    URL = `mongodb://localhost:27017/${amazonreviews}`

module.exports = async function() {
    const client = new MongoClient(URL, {useNewUrlParser: true})
    var db = null
    try {
        // Note this breaks.
        // await client.connect({useNewUrlParser: true})
        await client.connect()
        db = client.db(DATABASE_NAME)
    } catch (err) {
        console.log(err.stack)
    }

    return db
}