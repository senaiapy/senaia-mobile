/* eslint-disable unicorn/filename-case */
/* eslint-disable unused-imports/no-unused-vars */
// importing mongoClient to connect at mongodb
//// import {MongoClient} from 'mongodb';
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35

import { Hero } from './entities/Hero';
import { Spartan } from './entities/Spartan';
//importing Hero classes
import { HeroRepository } from './repositories/HeroRepository';
import { SpartanRepository } from './repositories/SpartanRepository';

// creating a function that execute self runs
(async () => {
  // connecting at mongoClient
  //// const connection = await MongoClient.connect('mongodb://localhost');
  ////const db = connection.db('warriors');
  const db = 'warriors';
  // our operations
  // creating a spartan
  const spartan = new Spartan('Leonidas', 1020);

  // initializing the repository
  const repository = new SpartanRepository();

  // call create method from generic repository
  const result = await repository.create(spartan);
  console.log(`spartan inserted with ${result ? 'success' : 'fail'}`);

  //call specific method from spartan class
  const count = await repository.countOfSpartans();
  console.log(`the count of spartans is ${count}`);

  /**
     * spartan inserted with success
      the count of spartans is 1
     */

  const hero = new Hero('Spider Man', 200);
  const repositoryHero = new HeroRepository();
  const resultHero = await repositoryHero.create(hero);
  console.log(`hero inserted with ${result ? 'success' : 'fail'}`);
})();
