/* eslint-disable unicorn/filename-case */
// ########################################
/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-02-09 12:39:09
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:53:30
 * @ Description:
 */
import { tableSchema } from '@nozbe/watermelondb';

const enviar_sigorSchema = tableSchema({
  name: 'enviar_sigors',
  columns: [
    { name: 'dbversion', type: 'string' },
    { name: 'coibfeId', type: 'string' }, // ": "38320011",
    { name: 'coibfeDestino', type: 'string' }, //": "UE",
    { name: 'coibfeFinalidad', type: 'string' }, // ": "F",
    { name: 'coibfeTransporte', type: 'string' }, // ": "T",
    { name: 'coibfeAniNovillos', type: 'string' }, // ": "0",
    { name: 'coibfeAniToros', type: 'string' }, // ": "40",
    { name: 'coibfeAniVacas', type: 'string' }, // ": "0",
    { name: 'coibfeAniVaquillas', type: 'string' }, // ": "0",
    { name: 'coibfeAniOtros', type: 'string' }, // ": "0",
    { name: 'coibfeAniHilton', type: 'string' }, // ": "0",
    { name: 'coibfeTecnico_VPA_ID', type: 'string' }, // ": "832",
    { name: 'coibfeFrigorifico_ID', type: 'string' }, // ": "1113010010",
    { name: 'coibfeProductor_ID', type: 'string' }, // ": "80061886-6",
    { name: 'coibfePropriedadSigor', type: 'string' }, // ": "1613010027",
    { name: 'coibfePropriedadSitrap', type: 'string' }, // ": "AGLH",
    { name: 'coibfePrecinto1', type: 'string' }, // ": "442318",
    { name: 'coibfePrecinto2', type: 'string' }, // ": "442319",
    { name: 'coibfePrecinto3', type: 'string' }, // ": "442320",
    { name: 'coibfePosLatitud', type: 'string' }, // ": "-22.3446833",
    { name: 'coibfePosLongitud', type: 'string' }, // ": "-60.2523733",
    { name: 'coibfePosDateTime', type: 'string' }, // ": "2021-02-05T12:51:47",
    { name: 'coibfeDigNroProp', type: 'string' }, // ": "6",
    { name: 'coibfeDocNroProp', type: 'string' }, // ": "80061886",
    { name: 'coibfeDocOrigAbrev', type: 'string' }, // ": "NA",
    { name: 'coibfeDocTipoAbrev', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

export { enviar_sigorSchema };
