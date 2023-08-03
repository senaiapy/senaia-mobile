/* eslint-disable unicorn/filename-case */
// ########################################

import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class Film extends Model {
  static table = 'films';

  @field('adult')
  adult!: boolean;

  @field('backdrop_path')
  backdrop_path!: string;

  @field('original_language')
  original_language!: string;

  @field('original_title')
  original_title!: string;

  @field('overview')
  overview!: string;

  @field('popularity')
  popularity!: number;

  @field('poster_path')
  poster_path!: string;

  @field('title')
  title!: string;

  @field('video')
  video!: boolean;

  @field('vote_average')
  vote_average!: number;

  @field('vote_count')
  vote_count!: number;
}

export { Film };
