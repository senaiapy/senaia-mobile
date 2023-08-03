//########################################
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/09/2020
//########################################

var MD5 = require('react-native-crypto-js').MD5;

function serialize(obj: any) {
  // obj any
  return JSON.stringify(obj, function (k, v) {
    if (this[k] instanceof Date) {
      return ['__date__', +this[k]];
    }
    return v;
  });
}

function deserialize(s: string) {
  // s string
  try {
    return JSON.parse(s, (_, v) =>
      Array.isArray(v) && v[0] === '__date__' ? new Date(v[1]) : v
    );
  } catch (e) {
    console.log('error', e);
    return null;
  }
}

function arrayNotNullVerify<T>(array: T[]) {
  let retorno = false;
  if (Array.isArray(array) && array.length) {
    retorno = true;
  }
  return retorno;
}

const isObject = (value: any) => typeof value === 'object' && value !== null;

// ---------------------------------
function generateSecret(value: string, destino: string) {
  // value = vpa_id 000 + 0000 coibfeid => 123 1234
  var nvalue = value; // TODO: NO ESTABA PY_DIGIT="4";
  if (destino === 'UE') {
    nvalue = nvalue + '1';
  } else {
    nvalue = nvalue + '2';
  }
  var numbers = MD5(nvalue).toString();
  //console.log(numbers);
  var returno =
    numbers[0] +
    numbers[24] +
    numbers[12] +
    numbers[31] +
    numbers[4] +
    numbers[26];
  return String(returno);
}
// ---------------------------------
const xor_str = function (S: any, K: any) {
  let c = '';
  for (let i = 0; i < S.length; i++) {
    for (let ik = 0; ik < K.length; ik++) {
      c += String.fromCharCode(
        // eslint-disable-next-line no-bitwise
        S[i].charCodeAt(0).toString(10) ^ K.charCodeAt(0).toString(10)
      ); // XORing with letter 'K'
    }
  }
  return c;
};

const Functions = {
  isObject,
  serialize,
  deserialize,
  arrayNotNullVerify,
  generateSecret,
  xor_str,
};

export default Functions;
