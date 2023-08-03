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
export interface ISalida {
  dbversion?: string;
  salidaId?: string;
  salida_UniqueId: string;
  salida_company?: string;
  salida_guia?: string;
  salida_caravana?: string;
  entrada_fecha_entrada?: string;
  entrada_modalidade?: string;
  salida_ms_cab_dia?: string;
  salida_costo_compra?: string;
  salida_costo_diaria?: string;
  salida_costo_curativo?: string;
  salida_costo_protocolo?: string;
  salida_corral?: string;
  salida_peso_entrada?: string;
  salida_categoria?: string;
  salida_angus?: string;
  salida_propietario_origem?: string;
  salida_peso_salida?: string;
  salida_dias_confinamento?: string;
  salida_lote?: string;
  salida_fecha_salida?: string;
  salida_peso_proyectado?: string;
  salida_cms_pv?: string;
  salida_cms_total?: string;
  salida_gmd?: string;
  salida_destino?: string;
  salida_controlador?: string;
  salida_tipo_salida?: string;
  salida_cantidad?: string;
  salida_nombre_identificaccion?: string;
  salida_custo_total?: string;
}

export type TSalida = {
  dbversion?: string;
  salidaId?: string;
  salida_UniqueId: string;
  salida_company?: string;
  salida_guia?: string;
  salida_caravana?: string;
  entrada_fecha_entrada?: string;
  entrada_modalidade?: string;
  salida_ms_cab_dia?: string;
  salida_costo_compra?: string;
  salida_costo_diaria?: string;
  salida_costo_curativo?: string;
  salida_costo_protocolo?: string;
  salida_corral?: string;
  salida_peso_entrada?: string;
  salida_categoria?: string;
  salida_angus?: string;
  salida_propietario_origem?: string;
  salida_peso_salida?: string;
  salida_dias_confinamento?: string;
  salida_lote?: string;
  salida_fecha_salida?: string;
  salida_peso_proyectado?: string;
  salida_cms_pv?: string;
  salida_cms_total?: string;
  salida_gmd?: string;
  salida_destino?: string;
  salida_controlador?: string;
  salida_tipo_salida?: string;
  salida_cantidad?: string;
  salida_nombre_identificaccion?: string;
  salida_custo_total?: string;
};
