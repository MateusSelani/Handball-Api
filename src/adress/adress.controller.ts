import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { AdressService } from './adress.service';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';

@Controller('adress')
export class AdressController {
  constructor(private readonly adressService: AdressService) {}

  @Post()
  create(@Body() createAdressDto: CreateAdressDto) {
    return this.adressService.create(createAdressDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdressDto: UpdateAdressDto) {
    return this.adressService.update(id, updateAdressDto);
  }

  // @Get()
  // findAll() {
  //   return this.adressService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.adressService.findOne(+id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.adressService.remove(+id);
  // }
}
