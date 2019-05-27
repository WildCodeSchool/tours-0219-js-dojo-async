import { DrunkmanService } from './drunkman.service';
import { Controller, Get, Param, Res } from '@nestjs/common';
import { Drunkman } from './drunkman';

@Controller('drunkmans')
export class DrunkmanController {
    constructor(private service: DrunkmanService) { }

    @Get(':id')
    async readOne(@Param('id') id: string, @Res() res) {
        const drunkman: Drunkman = await this.service.getById(id);
        console.log(id, drunkman);
        setTimeout(() => {
            res.status(200).json(drunkman);
        }, this.random(4000, 9000));
    }

    @Get(':id/go')
    async go(@Param('id') id: string, @Res() res) {
        const drunkman: Drunkman = await this.service.getById(id);

        setTimeout(() => {
            drunkman.atHome = 'end start';
            res.status(200).json(drunkman);
        }, this.random(drunkman.speed, 9000));
    }

    random(min, max) {
        return Math.floor(Math.random() * (+max - +min)) + +min;
    }
}
