/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 10:42:22
 * @ Description:
 */

// ###############################   TYPES  ###############################
export interface IVacuna {
  dbversion?: string;
  vacunaId?: string;
  vacunaUniqueId: string;
  vacuna_company?: string;
  vacuna_lote?: string;
  vacuna_codigo?: string;
  vacuna_nome?: string;
  vacuna_edad?: string;
  vacuna_caravana?: string;
}

export type TVacuna = {
  dbversion?: string;
  vacunaId?: string;
  vacunaUniqueId: string;
  vacuna_company?: string;
  vacuna_lote?: string;
  vacuna_codigo?: string;
  vacuna_nome?: string;
  vacuna_edad?: string;
  vacuna_caravana?: string;
};
