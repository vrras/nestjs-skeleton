import { Injectable } from '@nestjs/common';
import { CatDto as Cat } from '../dto/cat.dto';

@Injectable()
export class CatService {
  cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }

  create(cat: Cat) {
    const isExists = !!this.cats.find(obj => obj.name === cat.name);
    if (isExists) {
      throw new Error('Error, please use another name');
    }
    this.cats.push(cat);
  }
}