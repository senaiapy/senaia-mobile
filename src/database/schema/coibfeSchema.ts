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

const coibfeSchema = tableSchema({
  name: 'coibfes',
  columns: [
    { name: 'dbversion', type: 'string' },
    { name: 'coibfeid', type: 'string' },
    { name: 'coibfekey', type: 'string' },
    { name: 'coibfetoken', type: 'string' },
    { name: 'coibfecodigov', type: 'string' },
    { name: 'coibfedestino', type: 'string' },
    { name: 'coibfefinalidad', type: 'string' },
    { name: 'coibfetransporte', type: 'string' },
    { name: 'coibfeaninovillos', type: 'string' },
    { name: 'coibfeanitoros', type: 'string' },
    { name: 'coibfeanivacas', type: 'string' },
    { name: 'coibfeanivaquillas', type: 'string' },
    { name: 'coibfeaniotros', type: 'string' },
    { name: 'coibfeanitotal', type: 'string' },
    { name: 'coibfeanihilton', type: 'string' },
    { name: 'coibfetecnico_vpa_id', type: 'string' },
    { name: 'coibfetecniconame', type: 'string' },
    { name: 'coibfefrigorificoname', type: 'string' },
    { name: 'coibfefrigorifico_id', type: 'string' },
    { name: 'coibfeproductorname', type: 'string' },
    { name: 'coibfeproductor_id', type: 'string' },
    { name: 'coibfeproductorsitrap', type: 'string' },
    { name: 'coibfepropriedadname', type: 'string' },
    { name: 'coibfepropriedad_id', type: 'string' },
    { name: 'coibfepropriedadsigor', type: 'string' },
    { name: 'coibfepropriedadsitrap', type: 'string' },
    { name: 'coibfepropriedaddepartamento', type: 'string' },
    { name: 'coibfepropriedaddistrito', type: 'string' },
    { name: 'coibfepropriedad_productor_id', type: 'string' },
    { name: 'coibfeprecinto1', type: 'string' },
    { name: 'coibfeprecinto2', type: 'string' },
    { name: 'coibfeprecinto3', type: 'string' },
    { name: 'coibfepos_id', type: 'string' },
    { name: 'coibfeposlatitud', type: 'string' },
    { name: 'coibfeposlongitud', type: 'string' },
    { name: 'coibfeposdate', type: 'string' },
    { name: 'coibfeposapikeymobile', type: 'string' },
    { name: 'coibfeobs', type: 'string' },
    { name: 'coibfedocnroprop', type: 'string' },
    { name: 'coibfedocdigprop', type: 'string' },
    { name: 'coibfedocorigabrev', type: 'string' },
    { name: 'coibfedoctipoabrev', type: 'string' },
    { name: 'coibfeerrocode', type: 'string' },
    { name: 'coibfeerromessage', type: 'string' },
    { name: 'coibfeanimales', type: 'string' },
    { name: 'coibfe_issinc', type: 'string' },

    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});

export { coibfeSchema };
