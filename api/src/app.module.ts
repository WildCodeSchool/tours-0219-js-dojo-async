import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DrunkmanModule } from './drunkman/drunkman.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_URI,
        useNewUrlParser: true,
      }),
    }),
    DrunkmanModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
