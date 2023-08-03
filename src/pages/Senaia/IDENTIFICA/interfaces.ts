export interface VacunaDTO {
  dbversion?: string;
  vacunaId?: string;
  vacunaUniqueId?: string;
  vacuna_company?: string;
  vacuna_lote?: string;
  vacuna_codigo?: string;
  vacuna_nome?: string;
  vacuna_edad?: string;
  vacuna_caravana?: string;
  createdAt: any;
  updatedAt: any;
}

export interface SalidaDTO {
  dbversion?: string;

  salidaId?: string;
  salida_UniqueId?: string;
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

  createdAt: any;
  updatedAt: any;
}
export interface RazaDTO {
  dbversion?: string;
  razaId?: string;
  razaUniqueId?: string;
  raza_company?: string;
  razaIdRaca?: string;
  razaNomeRaca?: string;
  razaOrdemExibicao?: string;
  createdAt: any;
  updatedAt: any;
}

export interface PesoDTO {
  dbversion?: string;
  pesoId?: string;
  pesoUniqueId?: string;
  peso_company?: string;
  pesoPesoActual?: string;
  pesoPesoFinal?: string;
  pesoPesoEntrada?: string;
  pesoEdad?: string;
  createdAt: any;
  updatedAt: any;
}

export interface LiquidacionDTO {
  dbversion?: string;
  liquidacionId?: string;
  liquidacionUniqueId?: string;
  liquidacion_company?: string;
  liquidacionGuias?: string;
  liquidacionCantidad?: string;
  liquidacionFaena_kg_total?: string;
  liquidacionPromedio_animal?: string;
  liquidacionPrecio_venta?: string;
  liquidacionFecha_salida?: string;
  liquidacionFecha_faena?: string;
  liquidacionPrecio_kg_carcasa?: string;
  liquidacionPrecio_total?: string;
  createdAt: any;
  updatedAt: any;
}

export interface IdentificaDTO {
  dbversion?: string;
  identificaId?: string;
  identificaUniqueId?: string;
  identifica_company?: string;
  identificaIdAnimal?: string;
  identificaNroTag?: string;
  identificaIdTecnico?: string;
  identificaNumeroIdentificador?: string;
  identificaDataNascimento?: string;
  identificaSexo?: string;
  identificaIdRaca?: string;
  identificaMarcaFogo?: string;
  identificaLatitude?: string;
  identificaLongitude?: string;
  identificaCarimbo?: string;
  identificaLoteVacina?: string;
  identificaPeso?: string;
  identificaCodErro?: string;
  identificaDataIdentificacao?: string;
  createdAt: any;
  updatedAt: any;
}

export interface GuiaDTO {
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
  createdAt: any;
  updatedAt: any;
}

export interface EntradaDTO {
  dbversion?: string;

  entradaId?: string;
  entrada_UniqueId?: string;
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

  createdAt: any;
  updatedAt: any;
}

export interface AnimalDTO {
  dbversion?: string;
  animalId?: string;
  animalUniqueId?: string;
  animal_company?: string;
  animalNroTag?: string;
  animalDataNascimento?: string;
  animalDataQuarentena?: string;
  animalIdRaca?: string;
  animalSexo?: string;
  animalIdClassificacao?: string;
  animalUltimoPeso?: string;
  animalDataUltimapesagem?: string;
  animalListaNegra?: string;
  animal_raza?: string;
  animal_color?: string;
  animal_edad?: string;
  animalProductor_ID?: string;
  animalPropriedad_ID?: string;
  animalMarcaFuego?: string;
  createdAt: any;
  updatedAt: any;
}
