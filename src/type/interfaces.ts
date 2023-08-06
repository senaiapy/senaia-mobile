export interface Results {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Film {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Tvg {
  id: string;
  name: string;
  language: string;
  country: string;
  logo: string;
  url: string;
  rec: string;
}

export interface Group {
  title: string;
}

export interface Http {
  referrer: string;
  user_agent: string;
}

export interface Catchup {
  type: string;
  days: string;
  source: string;
}
export interface IItems {
  name: string;
  tvg: Tvg[];
  group: Group[];
  http: Http[];
  url: string;
  raw: string;
  catchup: Catchup[];
  timeshift: string;
}
export interface ITecnico {
  id: number;
  Counter: string;
  tecnicoId: string;
  tecnicoUniqueId: string;
  tecnicocreatedAt?: string;
  tecnicoModifiedAt: string;
  tecnicoOBS: string;
  tecnicoErroCode: string;
  tecnicoIsSync: string;
  tecnicoDocumentos: ITECDocumentos;
  tecnicoRegistro: ITECRegistro;
  tecnicoStatus: ITECStatus;
  tecnicoKeys: ITECKeys;
  tecnicoChat: ITECChat;
  tecnicoGeo: ITECGeo;
}
export interface ITECDocumentos {
  tecnico_vpa_id: string;
  tecnico_ci: string;
  tecnico_ruc: string;
  tecnicoDocDigProp: string;
  tecnicoDocOrigAbrev: string;
  tecnicoDocTipoAbrev: string;
  tecnico_name: string;
}
export interface ITECRegistro {
  tecnico_register: string;
  tecnico_password: string;
  tecnicoMail: string;
  tecnicoPhone: string;
}
export interface ITECStatus {
  tecnico_mac: string;
  tecnicoLevelAccess: string;
  tecnico_status: string;
  tecnicoLocked: string;
  tecnicoServerName: string;
  tecnicoLocalServerIp: string;
  tecnicoDeviceStatus: string;
}
export interface ITECKeys {
  tecnicoKey: string;
  tecnicoToken: string;
  tecnicoApiKeyMobile: string;
  tecnicoKeyPrivate: string;
  tecnicoPasswordResetExpires: string;
  tecnicoApiKeySoftware: string;
  tecnicoSaltKey: string;
  tecnicoPos_ID: string;
}
export interface ITECChat {
  tecnicoMessages: string;
  tecnicoGroupUsers: string;
  tecnicoChatId: string;
}
export interface ITECGeo {
  tecnicoPosLatitud: string;
  tecnicoPosLongitud: string;
}

export interface DBList {
  __changes: {
    _value: [];
    closed: boolean;
    hasError: boolean;
    isStopped: boolean;
    observers: [];
    thrownError: null;
  };
  _isEditing: boolean;
  _preparedState: null;
  _raw: {
    _changed: string;
    _status: string; // "created",
    group: string; // "CINE SKY",
    id: string; //  "oh7ccmst3y6om5gi",
    id_: string; //  2,
    logo: string; //  "http://asbx.xyz:80/images/711b1f8b9a30ceff12f0e72268a2b765.png",
    name: string; //  "Cine Sky Ação",
    token: string; // null,
    url: string; //  "http://asbx.xyz:80/live/fuinha01/123321/71616.m3u8"
  };
  _subscribers: [];
  collection: {
    _cache: [];
    _subscribers: [];
    changes: [];
    database: [];
    modelClass: [/*Function ListaCineSkys*/];
  };
}
