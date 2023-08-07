export interface UsuarioDTO {
  user_vpa: string;
  email: string;
  password: string;
  ids?: string;
  user_id?: string;
  nome?: string;
  senha?: string;
  telefone?: string;
  cpf?: string;
  firstname?: string;
  lastname?: string;
  user_company?: string;
  user_name?: string;
  user_register?: string;
  user_password?: string;
  user_mail?: string;
  user_phone?: string;
  user_cpf?: string;
  user_pos_id?: string;
  user_levelaccess?: string;
  user_acreditacion?: string;
  user_apikeymobile?: string;
  user_servername?: string;
  user_devicestatus?: string;
  user_keyprivate?: string;
  user_apikeyhardware?: string;
  user_apikeysoftware?: string;
  user_messages?: string;
  user_passwordremote?: string;
  user_groupusers?: string;
  user_issync?: string;
  user_uniqueid?: string;
  user_vpa_id?: string;
  user_key?: string;
  user_name_register?: string;
  user_status?: string;
  user_locked?: string;
  user_key_hardware?: string;
  user_level_access?: string;
  user_token?: string;
  user_public_key?: string;
  user_private_key?: string;
  user_wallet_id?: string;
  user_system_type?: string;
  user_mail_verify?: string;
  user_phone_verify?: string;
  user_professional_type?: string;
  user_gender?: string;
  user_born_date?: string;
  user_nation?: string;
  user_photo_ci?: string;
  user_photo?: string;
  user_bank_name?: string;
  user_bank_user_name?: string;
  user_bank_account?: string;
  user_bank_agency?: string;
  user_bank_user_cpf?: string;
  user_date_register?: string;
  user_otp_verify?: string;
  user_latitude?: string;
  user_longitude?: string;
  user_coordinates?: string;
  user_number_services?: string;
  Status?: string;
  servicos?: string;
  user_issinc?: string;
  counter?: number;
}
export interface UserCategoryDTO {
  user_id: number | undefined;
  key: number | undefined;
  title: string;
  name: string;
  address: string;
  price: string;
  description: string;
  photo: string;
  star: string;
  reviews: string;
  category: string;
  img: string;
  other: string;
  dollar: string;
  cleaner: string;
  usersCategory_sync: boolean;
}

export interface CoibfePropriedadDTO {
  id?: number;
  created_at?: number;
  updated_at?: number;
  dbversion?: string;
  propriedad_id?: string;
  propriedadname: string;
  propriedadpropietario?: string;
  propriedadstatus?: string;
  propriedadsigor: string;
  propriedadsitrap?: string;
  propriedaddepartamento?: string;
  propriedaddistrito?: string;
  propriedadproductors?: string;
}
export interface CoibfeProductorDTO {
  id?: number;
  created_at?: number;
  updated_at?: number;
  dbversion?: string;
  productorname: string;
  productor_id: string;
  productortoken?: string;
  productorsitrap?: string;
  productoracreditacion?: string;
  productor_propriedad_id?: string;
  productorpassword?: string;
  productormail?: string;
  productorphone?: string;
  productorissync?: string;

  productordocnroprop?: string;
  productordocdigprop?: string;
  productordocorigabrev?: string;
  productordoctipoabrev?: string;
  productorstatus?: string;
  productormessages?: string;
  productorkeyprivate?: string;
  productorapikeysoftware?: string;
}

export interface CoibfeFrigorificoDTO {
  id?: number;
  created_at?: number;
  updated_at?: number;
  dbversion?: string;
  frigorificoname: string;
  frigorifico_id: string;
  frigorificodepartamento?: string;
  frigorificokeyprivate?: string;
  frigorificostatus?: string;
}

export interface CoibfeCoibfeDTO {
  dbversion?: string;
  coibfeid: string;
  coibfekey?: string;
  coibfetoken?: string;
  coibfecodigov: string;
  coibfedestino: string;
  coibfefinalidad: string;
  coibfetransporte: string;
  coibfeaninovillos: string;
  coibfeAniToros: string;
  coibfeanivacas: string;
  coibfeanivaquillas: string;
  coibfeaniotros: string;
  coibfeanitotal: string;
  coibfeanihilton: string;
  coibfetecnico_vpa_id: string;
  coibfetecniconame: string;
  coibfefrigorificoname: string;
  coibfefrigorifico_id: string;
  coibfeproductorname: string;
  coibfeproductor_id: string;
  coibfeproductorsitrap?: string;
  coibfepropriedadname: string;
  coibfepropriedad_id?: string;
  coibfepropriedadsigor: string;
  coibfepropriedadsitrap?: string;
  coibfepropriedaddepartamento?: string;
  coibfepropriedaddistrito?: string;
  coibfepropriedad_productor_id?: string;
  coibfeprecinto1: string;
  coibfeprecinto2?: string;
  coibfeprecinto3?: string;
  coibfepos_id?: string;
  coibfeposlatitud: string;
  coibfeposlongitud: string;
  coibfeposdate?: string;
  coibfeposapikeymobile?: string;
  coibfeobs?: string;
  coibfedocnroprop?: string;
  coibfedocdigprop?: string;
  coibfedocorigabrev?: string;
  coibfedoctipoabrev?: string;
  coibfeerrocode?: string;
  coibfeerromessage?: string;
  coibfeanimales?: string;
  coibfe_issinc?: string;
}

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
  created_at?: any;
  updated_at?: any;
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

  created_at?: any;
  updated_at?: any;
}
export interface RazaDTO {
  dbversion?: string;
  razaId?: string;
  razaUniqueId?: string;
  raza_company?: string;
  razaIdRaca?: string;
  razaNomeRaca?: string;
  razaOrdemExibicao?: string;
  created_at?: any;
  updated_at?: any;
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
  created_at?: any;
  updated_at?: any;
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
  created_at?: any;
  updated_at?: any;
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
  created_at?: any;
  updated_at?: any;
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
  created_at?: any;
  updated_at?: any;
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

  created_at?: any;
  updated_at?: any;
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
  created_at?: any;
  updated_at?: any;
}

export interface GeneralDTO {
  generalId: string;
  generalUniqueId?: string;
  general_vacuna?: string;
  general_raza?: string;
  general_classificacion?: string;
  general_dispositivo?: string;
  general_color?: string;
  general_categoria?: string;
  general_modalidad?: string;
  general_destino?: string;
  general_permission?: string;
  general_1?: string;
  general_2?: string;
  general_3?: string;
  general_4?: string;
  general_5?: string;
  general_6?: string;
  general_7?: string;
  general_8?: string;
  general_9?: string;
  general_10?: string;
  general_is_sync?: boolean;
  dbversion?: string;
  created_at?: any;
  updated_at?: any;
}
