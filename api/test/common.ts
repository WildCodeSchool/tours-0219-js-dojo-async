import { MongoMemoryServer } from 'mongodb-memory-server';
import { Logger } from '@nestjs/common';

export async function startInMemoryDB() {
  const mongod = new MongoMemoryServer({ instance: { ip: '0.0.0.0', dbName: 'test', port: 27017 } });
  try {
    process.env.MONGO_URI = await mongod.getConnectionString();
  } catch (e) {
    console.log('---------------------------')
    console.log(e)
    console.log('---------------------------')
  }
  Logger.log('-----------------------------------------------------------------------');
  Logger.log('Mongo In Memory Server succesfully started', 'startInMemoryDB()');
  Logger.log(`uri : ${process.env.MONGO_URI}`, 'startInMemoryDB()');
  Logger.log('-----------------------------------------------------------------------');
  return mongod;
}

export async function insertData() {
  
}
