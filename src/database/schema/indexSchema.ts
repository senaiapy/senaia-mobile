/* eslint-disable unicorn/filename-case */
import { Env } from '@env';
import { appSchema } from '@nozbe/watermelondb';

import actionSchema from './action';
import { addressSchema } from './addressSchema';
import animalSchema from './animalSchema';
import { authenticateSchema } from './authenticateSchema';
import { carSchema } from './carSchema';
import { cerrarSchema } from './cerrarSchema';
import { check_onlineSchema } from './check_onlineSchema';
import coibfeAction from './coibfeAction';
import coibfeCoibfe from './coibfeCoibfe';
import coibfeFrigorifico from './coibfeFrigorifico';
import coibfeProductor from './coibfeProductor';
import coibfePropriedad from './coibfePropriedad';
import { coibfeSchema } from './coibfeSchema';
import coibfeTecnico from './coibfeTecnico';
import commentSchema from './comment';
import { configurarSchema } from './configurarSchema';
import { customerSchema } from './customerSchema';
import { databaseversionSchema } from './databaseversionSchema';
import { empezarSchema } from './empezarSchema';
import entradaSchema from './entradaSchema';
import { enviar_sigorSchema } from './enviar_sigorSchema';
import { enviarSchema } from './enviarSchema';
import { filmSchema } from './filmSchema';
import { frigorificoSchema } from './frigorificoSchema';
import { frontendSchema } from './frontendSchema';
import { frontSchema } from './frontSchema';
import { gameSchema } from './gameSchema';
import generalSchema from './generalSchema';
import guiaSchema from './guiaSchema';
import identificaSchema from './identificaSchema';
import { iotSchema } from './iotSchema';
import liquidacionSchema from './liquidacionSchema';
import { listaSchema } from './listaSchema';
import { localDbSchema } from './localDbSchema';
import { localizationSchema } from './localizationSchema';
import { logSchema } from './logSchema';
import { messageSchema } from './messageSchema';
import { mobileSchema } from './mobileSchema';
import { nftsSchema } from './nftsSchema';
import pesoSchema from './pesoSchema';
import postSchema from './post';
import { productorSchema } from './productorSchema';
import { propriedad_productorSchema } from './propriedad_productorSchema';
import { propriedadSchema } from './propriedadSchema';
import razaSchema from './razaSchema';
import { registrarSchema } from './registrarSchema';
import salidaSchema from './salidaSchema';
import senaiaActionSchema from './senaiaActionSchema';
import { serverSchema } from './serverSchema';
import { skillSchema } from './skillSchema';
import { statementSchema } from './statementSchema';
import { tecnicoSchema } from './tecnicoSchema';
import { tokenSchema } from './tokenSchema';
import { tokensSchema } from './tokensSchema';
import userCategory from './userCategory';
import { userSchema } from './userSchema';
import vacunaSchema from './vacunaSchema';
import { walletsSchema } from './walletsSchema';

const schemas = appSchema({
  version: parseInt(Env.DB_VERSION, 10),
  //version: 2,
  tables: [
    actionSchema,
    addressSchema,
    animalSchema,
    authenticateSchema,
    carSchema,
    cerrarSchema,
    check_onlineSchema,
    coibfeSchema,
    commentSchema,
    configurarSchema,
    customerSchema,
    databaseversionSchema,
    empezarSchema,
    entradaSchema,
    enviar_sigorSchema,
    enviarSchema,
    filmSchema,
    frigorificoSchema,
    frontendSchema,
    frontSchema,
    gameSchema,
    guiaSchema,
    identificaSchema,
    iotSchema,
    liquidacionSchema,
    listaSchema,
    localDbSchema,
    localizationSchema,
    logSchema,
    messageSchema,
    mobileSchema,
    nftsSchema,
    pesoSchema,
    postSchema,
    productorSchema,
    propriedad_productorSchema,
    propriedadSchema,
    razaSchema,
    registrarSchema,
    salidaSchema,
    serverSchema,
    skillSchema,
    statementSchema,
    tecnicoSchema,
    tokenSchema,
    tokensSchema,
    userSchema,
    vacunaSchema,
    walletsSchema,

    coibfePropriedad,
    coibfeProductor,
    coibfeFrigorifico,
    coibfeCoibfe,
    coibfeAction,
    coibfeTecnico,
    userCategory,
    generalSchema,
    senaiaActionSchema,
  ],
});

export { schemas };
