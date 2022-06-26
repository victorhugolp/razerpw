

const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");  
  client.close();
});


module.exports = class Post {
    static async find(busca) {        
       
       const conn = await MongoClient.connect('mongodb+srv://victorhugolp:xpendu76@cluster0.wvo7x.mongodb.net/?retryWrites=true&w=majority'),

       
                db = conn.db();  
                
            if(busca)
                return await db.collection('posts')
                .find({ content : new RegExp('^' + busca)})
                .toArray();
            
                
        return await db.collection('posts').find().toArray();

    }

    static async insert (content){
       
        const conn = await MongoClient.connect('mongodb+srv://victorhugolp:xpendu76@cluster0.wvo7x.mongodb.net/?retryWrites=true&w=majority'),
        db = conn.db();  
        db.collection('posts').insertOne({ content : content});
        console.log(content);

    }
}


