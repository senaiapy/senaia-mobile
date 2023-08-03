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

export type TFormData = {
  email: string;
  password: string;
};

export type TMessage = {
  messages: string;
  descriptions: string;
  type: any;
  description: string;
  floating: boolean;
  hasDescription: boolean;
};

export interface IStorage {
  userId: string;
  userMail: string;
  userPassword: string;
  userPrinterNumber: string;
  userCoibfeLastId: string;
  userTheme: string;
  userPosId: string;
  userKey: string;
  userServerIp: string;
}

export interface IStorageRegister {
  access?: string;
  refresh?: string;
  posid?: string;
  mail?: string;
  phone?: string;
  name?: string;
  ids?: string;
  password?: string;
  usertype?: string;
  vpa?: string;
  coibfeid?: string;
  status?: string;
  locked?: string;
}

export interface IStorageRegisterVacuna {
  vacunaid?: string;
  access?: string;
  refresh?: string;
  posid?: string;
  mail?: string;
  phone?: string;
  name?: string;
  ids?: string;
  password?: string;
  usertype?: string;
  vpa?: string;
  coibfeid?: string;
  status?: string;
  locked?: string;
}

export interface IPropriedads {
  propriedad_id: string;
  propriedadname: string;
  propriedadpropietario: string;
  propriedadstatus: string;
  propriedadsigor: string;
  propriedadsitrap: string;
  propriedaddepartamento: string;
  propriedaddistrito: string;
  propriedadproductors: string;
}

export interface IVacunas {
  vacunaid: string;
  vacunapos_id: string;
}
export interface IProductors {
  productorname: string;
  productor_id: string;
  productortoken: string;
  productorsitrap: string;
  productoracreditacion: string;
  productor_propriedad_id: string;
  productorpassword: string;
  productormail: string;
  productorphone: string;
  productorissync: string;

  productordocnroprop: string;
  productordocdigprop: string;
  productordocorigabrev: string;
  productordoctipoabrev: string;
  productorstatus: string;
  productormessages: string;
  productorkeyprivate: string;
  productorapikeysoftware: string;
}

export interface IFrigorificos {
  frigorificoname: string;
  frigorifico_id: string;
  frigorificodepartamento: string;
  frigorificokeyprivate: string;
  frigorificostatus: string;
}

export interface ICoibfes {
  coibfeid: string;
  coibfekey: string;
  coibfetoken: string;
  coibfecodigov: string;
  coibfedestino: string;
  coibfefinalidad: string;
  coibfetransporte: string;
  coibfeaninovillos: string;
  coibfeanitoros: string;
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
  coibfeproductorsitrap: string;
  coibfepropriedadname: string;
  coibfepropriedad_id: string;
  coibfepropriedadsigor: string;
  coibfepropriedadsitrap: string;
  coibfepropriedaddepartamento: string;
  coibfepropriedaddistrito: string;
  coibfepropriedad_productor_id: string;
  coibfeprecinto1: string;
  coibfeprecinto2: string;
  coibfeprecinto3: string;
  coibfepos_id: string;
  coibfeposlatitud: string;
  coibfeposlongitud: string;
  coibfeposdate: string;
  coibfeposapikeymobile: string;
  coibfeobs: string;
  coibfedocnroprop: string;
  coibfedocdigprop: string;
  coibfedocorigabrev: string;
  coibfedoctipoabrev: string;
  coibfeerrocode: string;
  coibfeerromessage: string;
  coibfeanimales: string;
  coibfe_issinc: string;
}
// ###############################   TYPES  ###############################
export type TCoibfes = {
  coibfeid: string;
  coibfekey: string;
  coibfetoken: string;
  coibfecodigov: string;
  coibfedestino: string;
  coibfefinalidad: string;
  coibfetransporte: string;
  coibfeaninovillos: string;
  coibfeanitoros: string;
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
  coibfeproductorsitrap: string;
  coibfepropriedadname: string;
  coibfepropriedad_id: string;
  coibfepropriedadsigor: string;
  coibfepropriedadsitrap: string;
  coibfepropriedaddepartamento: string;
  coibfepropriedaddistrito: string;
  coibfepropriedad_productor_id: string;
  coibfeprecinto1: string;
  coibfeprecinto2: string;
  coibfeprecinto3: string;
  coibfepos_id: string;
  coibfeposlatitud: string;
  coibfeposlongitud: string;
  coibfeposdate: string;
  coibfeposapikeymobile: string;
  coibfeobs: string;
  coibfedocnroprop: string;
  coibfedocdigprop: string;
  coibfedocorigabrev: string;
  coibfedoctipoabrev: string;
  coibfeerrocode: string;
  coibfeerromessage: string;
  coibfeanimales: string;
  coibfe_issinc: string;
};

export type TPrecintos = {
  id: string;
};

export type TCaravanas = {
  id: string;
};
