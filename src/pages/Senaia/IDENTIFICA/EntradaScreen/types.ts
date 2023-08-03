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
export interface IEntrada {
  dbversion?: string;
  entradaId?: string;
  entrada_UniqueId: string;
  entrada_company?: string;
  entrada_guia?: string;
  entrada_lote?: string;
  entrada_caravana?: string;
  entrada_numero_anterior?: string;
  entrada_sigla_anterior?: string;
  entrada_corral_origem?: string;
  entrada_dispositivo_anterior?: string;
  entrada_color_anterior?: string;
  entrada_numero_actual?: string;
  entrada_sigla_actual?: string;
  entrada_dispositivo_actual?: string;
  entrada_color_actual?: string;
  entrada_angus?: string;
  entrada_peso_actual?: string;
  entrada_categoria?: string;
  entrada_fecha_entrada?: string;
  entrada_fecha_aplicaccion?: string;
  entrada_corral_actual?: string;
  entrada_modalidade?: string;
  entrada_propietario_origem?: string;
  entrada_ms_cab_dia?: string;
  entrada_costo_compra?: string;
  entrada_costo_diario?: string;
  entrada_costo_curativo?: string;
  entrada_costo_protocolo?: string;
}

export type TEntrada = {
  dbversion?: string;
  entradaId?: string;
  entrada_UniqueId: string;
  entrada_company?: string;
  entrada_guia?: string;
  entrada_lote?: string;
  entrada_caravana?: string;
  entrada_numero_anterior?: string;
  entrada_sigla_anterior?: string;
  entrada_corral_origem?: string;
  entrada_dispositivo_anterior?: string;
  entrada_color_anterior?: string;
  entrada_numero_actual?: string;
  entrada_sigla_actual?: string;
  entrada_dispositivo_actual?: string;
  entrada_color_actual?: string;
  entrada_angus?: string;
  entrada_peso_actual?: string;
  entrada_categoria?: string;
  entrada_fecha_entrada?: string;
  entrada_fecha_aplicaccion?: string;
  entrada_corral_actual?: string;
  entrada_modalidade?: string;
  entrada_propietario_origem?: string;
  entrada_ms_cab_dia?: string;
  entrada_costo_compra?: string;
  entrada_costo_diario?: string;
  entrada_costo_curativo?: string;
  entrada_costo_protocolo?: string;
};
