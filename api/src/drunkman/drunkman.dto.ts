import { Schema } from 'mongoose';

export class DrunkmanDTO {
  public id: number;
  public firstName: string;
  public lastName: string;
  public avatar: string;
  public speed: number;
  public atHome: string = 'start end';
};