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

export interface IGuia {
  dbversion?: string;
  guiaId?: string;
  guiaUniqueId?: string;
  guia_company?: string;
  guiaOrden?: string;
  guiaGuias?: string;
  guiaContrato?: string;
  guiaFechaEntrada?: string;
  guiaCantidad?: string;
  guiaOrigen?: string;
  guiaCategoria?: string;
  guiaCorral?: string;
  guiaModalidad?: string;
}

export type TGuia = {
  dbversion?: string;
  guiaId?: string;
  guiaUniqueId?: string;
  guia_company?: string;
  guiaOrden?: string;
  guiaGuias?: string;
  guiaContrato?: string;
  guiaFechaEntrada?: string;
  guiaCantidad?: string;
  guiaOrigen?: string;
  guiaCategoria?: string;
  guiaCorral?: string;
  guiaModalidad?: string;
};
