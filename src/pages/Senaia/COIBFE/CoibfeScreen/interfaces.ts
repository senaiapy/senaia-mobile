export interface CoibfeProps {
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

export interface TPropriedads {
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
export interface TProductors {
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
}

export interface TFrigorificos {
  frigorificoname: string;
  frigorifico_id: string;
  frigorificodepartamento: string;
  frigorificokeyprivate: string;
  frigorificostatus: string;
}
