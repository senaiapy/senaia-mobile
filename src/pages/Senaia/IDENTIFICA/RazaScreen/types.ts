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
export interface IRaza {
  dbversion?: string;
  razaId?: string;
  razaUniqueId: string;
  raza_company?: string;
  razaIdRaca?: string;
  razaNomeRaca?: string;
  razaOrdemExibicao?: string;
}

export type TRaza = {
  dbversion?: string;
  razaId?: string;
  razaUniqueId: string;
  raza_company?: string;
  razaIdRaca?: string;
  razaNomeRaca?: string;
  razaOrdemExibicao?: string;
};
