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

export interface IPeso {
  dbversion?: string;
  pesoId?: string;
  pesoUniqueId: string;
  peso_company?: string;
  pesoPesoActual?: string;
  pesoPesoFinal?: string;
  pesoPesoEntrada?: string;
  pesoEdad?: string;
}

export type TPeso = {
  dbversion?: string;
  pesoId?: string;
  pesoUniqueId: string;
  peso_company?: string;
  pesoPesoActual?: string;
  pesoPesoFinal?: string;
  pesoPesoEntrada?: string;
  pesoEdad?: string;
};
