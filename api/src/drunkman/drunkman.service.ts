import { DrunkmanDTO } from './drunkman.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Drunkman } from './drunkman';

@Injectable()
export class DrunkmanService {
    constructor(@InjectModel('Drunkman') private readonly drunkmanModel: Model<Drunkman>) { }

    async getById(id: string): Promise<Drunkman> {
        return await this.drunkmanModel.findOne({ id });
    }

    async create(drunkman: DrunkmanDTO): Promise<Drunkman> {
        const createdDrunkman = new this.drunkmanModel(drunkman);
        return await createdDrunkman.save();
    }
}
