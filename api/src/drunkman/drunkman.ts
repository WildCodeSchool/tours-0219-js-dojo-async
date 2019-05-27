import { Schema } from 'mongoose';

export interface Drunkman {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly avatar: string;
  readonly speed: number;
  atHome: string;
};