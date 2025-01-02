const { MongoClient } = require('mongodb')

const url = 'mongodb+srv://Kunal:f97QGdgykEHMcvhF@cluster0.wjbcb.mongodb.net/'
const client = new MongoClient(url)
const dbName = 'Database0'

async function main(){
    await client.connect
    console.log("Connected to server successfully.")
    
    const db = client.db(dbName)
    const collection = db.collection('Collection0')
    return 'done...'
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close())