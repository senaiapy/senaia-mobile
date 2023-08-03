/* eslint-disable unicorn/filename-case */

import type { Hero } from '../entities/Hero';
import { BaseRepository } from './base/BaseRepository';

export class HeroRepository extends BaseRepository<Hero> {}
