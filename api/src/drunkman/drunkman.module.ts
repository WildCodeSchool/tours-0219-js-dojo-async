import { DrunkmanSchema } from './drunkman.schema';
import { Module } from '@nestjs/common';
import { DrunkmanController } from './drunkman.controller';
import { DrunkmanService } from './drunkman.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Drunkman', schema: DrunkmanSchema }]),
  ],
  controllers: [DrunkmanController],
  providers: [DrunkmanService],
  exports: [DrunkmanService],
})
export class DrunkmanModule {}
