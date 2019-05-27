import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startInMemoryDB } from 'test/common';
import { DrunkmanService } from './drunkman/drunkman.service';
import { DrunkmanDTO } from './drunkman/drunkman.dto';
import * as faker from 'faker/locale/fr';

async function bootstrap() {
  if (process.env.IN_MEMORY_DB) {
    await startInMemoryDB();
  }

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);

  if (process.env.IN_MEMORY_DB) {

    const drunkmanOne = new DrunkmanDTO();
    drunkmanOne.id = 1;
    drunkmanOne.firstName = faker.name.firstName();
    drunkmanOne.lastName = faker.name.lastName();
    drunkmanOne.speed = faker.random.number({ min: 1, max: 2 });
    drunkmanOne.avatar = `https://media0.giphy.com/media/xT9Igzs7WUAvHnvMTm/giphy.gif`;

    const drunkmanTwo = new DrunkmanDTO();
    drunkmanTwo.id = 2;
    drunkmanTwo.firstName = faker.name.firstName();
    drunkmanTwo.lastName = faker.name.lastName();
    drunkmanTwo.speed = faker.random.number({ min: 1, max: 8 });
    drunkmanTwo.avatar = `http://i.imgur.com/LqQx1a3.gif`;

    const drunkmanThree = new DrunkmanDTO();
    drunkmanThree.id = 3;
    drunkmanThree.firstName = faker.name.firstName();
    drunkmanThree.lastName = faker.name.lastName();
    drunkmanThree.speed = faker.random.number({ min: 1, max: 5 });
    drunkmanThree.avatar = `https://media3.giphy.com/media/3ohze1DwYLgf21sjRK/giphy.gif`;

    const drunkmanFour = new DrunkmanDTO();
    drunkmanFour.id = 4;
    drunkmanFour.firstName = faker.name.firstName();
    drunkmanFour.lastName = faker.name.lastName();
    drunkmanFour.speed = faker.random.number({ min: 1, max: 6 });
    drunkmanFour.avatar = `https://media1.giphy.com/media/l4pTfjiE8RydeseCQ/giphy.gif`;

    const drunkmanService: DrunkmanService = app.get('DrunkmanService');

    drunkmanService.create(drunkmanOne);
    drunkmanService.create(drunkmanTwo);
    drunkmanService.create(drunkmanThree);
    drunkmanService.create(drunkmanFour);
  }



}
bootstrap();

function random(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}