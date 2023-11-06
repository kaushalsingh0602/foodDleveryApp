
const mongoose = require('mongoose')
const URI="mongodb://0.0.0.0:27017/gofood";


const connectDB = async () => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB successfully');
    
        const db = mongoose.connection;
        const collectionName = 'fooddata2';
        const cotageryName="foodCatogary";
    
        // Fetch data from the collection
        const collection = db.collection(collectionName);
        const collectiontype = db.collection(cotageryName);


        const data = await collection.find({}).toArray();
        const catData = await collectiontype.find({}).toArray();
    
        console.log('Data from the collection:');

        global.fooddata2=data
        global.foodCatogary=catData
        // console.log(global.fooddata2); 
      } catch (err) {
        console.error('Error:', err);
    } //finally {
    //     // Close the MongoDB connection
    //     mongoose.connection.close();
    //   }
}

module.exports = connectDB

