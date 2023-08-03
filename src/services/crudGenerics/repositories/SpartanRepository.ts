/* eslint-disable unicorn/filename-case */

import type { Spartan } from '../entities/Spartan';
import { BaseRepository } from './base/BaseRepository';

// now, we have all code implementation from BaseRepository
export class SpartanRepository extends BaseRepository<Spartan> {
  // here, we can create all especific stuffs of Spartan Repository
  countOfSpartans(): Promise<number> {
    //// return this._collection.count({});
    throw new Error('Method not implemented.');
  }
}
