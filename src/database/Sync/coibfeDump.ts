/* eslint-disable unicorn/filename-case */
// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35

import type { Model } from '@nozbe/watermelondb';

import database from '@/database/index';
import type CoibfeCoibfeModel from '@/database/model/CoibfeCoibfe';

const CoibfeDump = async (Coibfes: any) => {
  const CoibfeCoibfes = database.get<CoibfeCoibfeModel>('coibfecoibfes');

  const { coibfecoibfes } = Coibfes;

  const inserts: Model[] = [];
  console.log('aki');
  coibfecoibfes.forEach((coibfe: any) => {
    inserts.push(
      CoibfeCoibfes.prepareCreate((cf) => {
        cf._raw.id = coibfe.id.toString();
        cf.body = coibfe.body;
        cf.serverId = coibfe.id;

        cf.coibfeid = coibfe.coibfeid;
        cf.coibfekey = coibfe.coibfekey;
        cf.coibfetoken = coibfe.coibfetoken;
        cf.coibfecodigov = coibfe.coibfecodigov;
        cf.coibfedestino = coibfe.coibfedestino;
        cf.coibfefinalidad = coibfe.coibfefinalidad;
        cf.coibfetransporte = coibfe.coibfetransporte;
        cf.coibfeaninovillos = coibfe.coibfeaninovillos;
        cf.coibfeanitoros = coibfe.coibfeanitoros;
        cf.coibfeanivacas = coibfe.coibfeanivacas;
        cf.coibfeanivaquillas = coibfe.coibfeanivaquillas;
        cf.coibfeaniotros = coibfe.coibfeaniotros;
        cf.coibfeanitotal = coibfe.coibfeanitotal;
        cf.coibfeanihilton = coibfe.coibfeanihilton;
        cf.coibfetecnico_vpa_id = coibfe.coibfetecnico_vpa_id;
        cf.coibfetecniconame = coibfe.coibfetecniconame;
        cf.coibfefrigorificoname = coibfe.coibfefrigorificoname;
        cf.coibfefrigorifico_id = coibfe.coibfefrigorifico_id;
        cf.coibfeproductorname = coibfe.coibfeproductorname;
        cf.coibfeproductor_id = coibfe.coibfeproductor_id;
        cf.coibfeproductorsitrap = coibfe.coibfeproductorsitrap;
        cf.coibfepropriedadname = coibfe.coibfepropriedadname;
        cf.coibfepropriedad_id = coibfe.coibfepropriedad_id;
        cf.coibfepropriedadsigor = coibfe.coibfepropriedadsigor;
        cf.coibfepropriedadsitrap = coibfe.coibfepropriedadsitrap;
        cf.coibfepropriedaddepartamento = coibfe.coibfepropriedaddepartamento;
        cf.coibfepropriedaddistrito = coibfe.coibfepropriedaddistrito;
        cf.coibfepropriedad_productor_id = coibfe.coibfepropriedad_productor_id;
        cf.coibfeprecinto1 = coibfe.coibfeprecinto1;
        cf.coibfeprecinto2 = coibfe.coibfeprecinto2;
        cf.coibfeprecinto3 = coibfe.coibfeprecinto3;
        cf.coibfepos_id = coibfe.coibfepos_id;
        cf.coibfeposlatitud = coibfe.coibfeposlatitud;
        cf.coibfeposlongitud = coibfe.coibfeposlongitud;
        cf.coibfeposdate = coibfe.coibfeposdate;
        cf.coibfeposapikeymobile = coibfe.coibfeposapikeymobile;
        cf.coibfeobs = coibfe.coibfeobs;
        cf.coibfedocnroprop = coibfe.coibfedocnroprop;
        cf.coibfedocdigprop = coibfe.coibfedocdigprop;
        cf.coibfedocorigabrev = coibfe.coibfedocorigabrev;
        cf.coibfedoctipoabrev = coibfe.coibfedoctipoabrev;
        cf.coibfeerrocode = coibfe.coibfeerrocode;
        cf.coibfeerromessage = coibfe.coibfeerromessage;
        cf.coibfeanimales = coibfe.coibfeanimales;
        cf.coibfe_issinc = coibfe.coibfe_issinc;
      })
    );
  });

  await database.write(async () => {
    await database.batch(...inserts);
  });
};

export default CoibfeDump;
