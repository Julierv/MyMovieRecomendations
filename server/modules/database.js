const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://web_client:Dragonite12@moviedatacluster.f7owxau.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function getRandomItems() {
  try {
    await client.connect();

    const database = client.db('MovieDatabase');
    const collection = database.collection('Movies');

    const randomItems = await collection.aggregate([{ $sample: { size: 20 } }]).toArray();

    return randomItems;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.close();
  }
}

async function getRecomendations() {
  try {
    await client.connect();

    const database = client.db('MovieDatabase');
    const collection = database.collection('Movies');

    const recomendations = await collection.aggregate([{ $sample: { size: 3 } }]).toArray();

    return recomendations;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.close();
  }
}

module.exports = {
  getRandomItems,
  getRecomendations
};