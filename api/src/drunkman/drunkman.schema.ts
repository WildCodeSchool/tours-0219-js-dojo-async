import { Schema } from 'mongoose';

export const DrunkmanSchema: any = new Schema({
  id: String,
  firstName: String,
  lastName: String,
  speed: Number,
  avatar: String,
  atHome: String,
});