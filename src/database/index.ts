/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-02-08 21:08:37
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:53:43
 * @ Description:
 */
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import ActionModel from './model/Action';
import { Address } from './model/Address';
import Animal from './model/Animal';
import { Authenticate } from './model/Authenticate';
import { Car } from './model/Car';
import { Cerrar } from './model/Cerrar';
import { Check_online } from './model/Check_online';
import { Coibfe } from './model/Coibfe';
import CoibfeAction from './model/CoibfeAction';
import CoibfeCoibfe from './model/CoibfeCoibfe';
import CoibfeFrigorifico from './model/CoibfeFrigorifico';
import CoibfeProductor from './model/CoibfeProductor';
import CoibfePropriedad from './model/CoibfePropriedad';
import CoibfeTecnico from './model/CoibfeTecnico';
import CommentModel from './model/Comment';
import { Configurar } from './model/Configurar';
import { Customer } from './model/Customer';
import { Databaseversion } from './model/Databaseversion';
import { Empezar } from './model/Empezar';
import Entrada from './model/Entrada';
import { Enviar } from './model/Enviar';
import { Enviar_sigor } from './model/Enviar_sigor';
import { Film } from './model/Film';
import { Frigorifico } from './model/Frigorifico';
import { Front } from './model/Front';
import { Frontend } from './model/Frontend';
import { Game } from './model/Game';
import GeneralModel from './model/General';
import Guia from './model/Guia';
import Identifica from './model/Identifica';
import { Iot } from './model/Iot';
import Liquidacion from './model/Liquidacion';
import { Lista } from './model/Lista';
import { LocalDb } from './model/LocalDb';
import { Localization } from './model/Localization';
import { Log } from './model/Log';
import { Message } from './model/Message';
import { Mobile } from './model/Mobile';
import { Nfts } from './model/Nfts';
import Peso from './model/Peso';
import PostsModel from './model/Post';
import { Productor } from './model/Productor';
import { Propriedad } from './model/Propriedad';
import { Propriedad_productor } from './model/Propriedad_productor';
import Raza from './model/Raza';
import { Registrar } from './model/Registrar';
import Salida from './model/Salida';
import SenaiaActionModel from './model/SenaiaActionModel';
import { Server } from './model/Server';
import { SkillModel } from './model/SkillModel';
import { Statement } from './model/Statement';
import { Tecnico } from './model/Tecnico';
import { Token } from './model/Token';
import { Tokens } from './model/Tokens';
import { User } from './model/User';
import UserCategory from './model/UserCategory';
import Vacuna from './model/Vacuna';
import { Wallets } from './model/Wallets';
import { schemas } from './schema/indexSchema';

const adapter = new SQLiteAdapter({
  dbName: 'senaia',
  schema: schemas,
  //schemaVersion: '1.0',
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  // migrations: migrations,
  // (optional database name or file system path)
  // dbName: 'myapp',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  //jsi: true /* Platform.OS === 'ios' */,
  // (optional, but you should implement this method)
  //onSetUpError: error => {
  // Database failed to load -- offer the user to reload the app or log out
  //},
});

const database = new Database({
  adapter,
  modelClasses: [
    ActionModel,
    CommentModel,
    PostsModel,
    Address,
    Animal,
    Authenticate,
    Car,
    Cerrar,
    Check_online,
    Coibfe,
    Configurar,
    Customer,
    Databaseversion,
    Empezar,
    Entrada,
    Enviar_sigor,
    Enviar,
    Film,
    Frigorifico,
    Frontend,
    Front,
    Game,
    Guia,
    Identifica,
    Iot,
    Liquidacion,
    Lista,
    LocalDb,
    Localization,
    Log,
    Message,
    Mobile,
    Nfts,
    Peso,
    Productor,
    Propriedad_productor,
    Propriedad,
    Raza,
    Registrar,
    Salida,
    Server,
    SkillModel,
    Statement,
    Tecnico,
    Token,
    Tokens,
    User,
    Vacuna,
    Wallets,

    CoibfePropriedad,
    CoibfeProductor,
    CoibfeFrigorifico,
    CoibfeCoibfe,
    CoibfeAction,
    CoibfeTecnico,
    UserCategory,
    GeneralModel,
    SenaiaActionModel,
  ],
});

export default database;
