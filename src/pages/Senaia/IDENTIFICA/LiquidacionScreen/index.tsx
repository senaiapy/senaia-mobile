/* eslint-disable max-params */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable max-lines-per-function */

/* eslint-disable react-native/no-inline-styles */
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import { Env } from '@env';
import React, { memo, useEffect, useState } from 'react';
import { ScrollView, Vibration, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
//  import { Character, useGetCharactersQuery } from '@/common/generated/graphql';
import {
  Col,
  Row,
  Rows,
  Table,
  TableWrapper,
} from 'react-native-table-component';

import LiquidacionServices from './services';
import styles from './styles';
import type { ILiquidacion } from './types';

const CONTENT = {
  tableHead: [
    '                     TABELA            ',
    '                   Guía           ',
    '            Cantidad     ',
    '        Faena Kg    ',
    '     Prom Animal     ',
    '    Precio Venta    ',
    '       Fecha Salida       ',
    '      Fecha de Faena      ',
    'Precio Kg Carcaza',
  ],

  tableTitle: [
    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8',
    'C9',
    'C10',
    'C11',
    '____',
    'TOTAL',
  ],

  tableData: [
    [
      '90427837',
      '36',
      '8.315,60',
      '230,99',
      '775,4875',
      '16/02/2022',
      '17/02/2022',
      '3,36',
    ],
    [
      '90427838',
      '37',
      '8.560,80',
      '231,37',
      '776,3705',
      '16/02/2022',
      '17/02/2022',
      '3,36',
    ],
    [
      '90427842',
      '37',
      '8.750,80',
      '236,51',
      '792,9022',
      '16/02/2022',
      '17/02/2022',
      '3,35',
    ],
    [
      '90429585',
      '36',
      '9.700,20',
      '269,45',
      '920,2869',
      '24/02/2022',
      '25/02/2022',
      '3,42',
    ],
    [
      '90429582',
      '35',
      '9.648,00',
      '275,66',
      '941,7613',
      '24/02/2022',
      '25/02/2022',
      '3,42',
    ],
    [
      '90429583',
      '35',
      '9.840,60',
      '281,16',
      '960,1959',
      '24/02/2022',
      '25/02/2022',
      '3,42',
    ],
    [
      '90429584',
      '35',
      '10.124,80',
      '289,28',
      '990,832',
      '25/02/2022',
      '26/02/2022',
      '3,43',
    ],
    [
      '90429591',
      '38',
      '10.004,20',
      '263,27',
      '902,2913',
      '25/02/2022',
      '26/02/2022',
      '3,43',
    ],
    [
      '90429586',
      '37',
      '9.255,20',
      '250,14',
      '858,0411',
      '25/02/2022',
      '26/02/2022',
      '3,43',
    ],
    [
      '90429588',
      '37',
      '9.351,60',
      '252,75',
      '867,0895',
      '25/02/2022',
      '26/02/2022',
      '3,43',
    ],
    [
      '90429590',
      '37',
      '9.380,20',
      '253,52',
      '869,8622',
      '25/02/2022',
      '26/02/2022',
      '3,43',
    ],
    [
      '________',
      '__',
      '________',
      '______',
      '________',
      '__________',
      '__________',
      '____',
    ],
    [
      '          ',
      '1',
      '200,00',
      '200,00',
      '373,13',
      '08/05/2022',
      '09/05/2022',
      '1,87',
    ],
  ],
};

// ############### internationalization #######################
// import i18n from '../../translations/locales/i18n'; // {i18n.t('films.cartaz')}

// ############### internationalization #######################

const LiquidacionScreen: React.FC = () => {
  //Orientation.lockToLandscape();
  Orientation.lockToPortrait();

  function showSimpleMessage(
    messagem: string,
    description: string,
    typess: any,
    props = {}
  ) {
    const message = {
      message: messagem,
      description: description,
      type: typess,
      ...props,
    };
    // @ts-ignore
    showMessage(message);
  }
  // ----------------------------------------------
  // const { data, loading } = useGetCharactersQuery();
  const [isLoadingS, setIsLoadingS] = useState(false);

  const [liquidacionss, setLiquidacionss] = useState<Partial<ILiquidacion>>({
    dbversion: '',
    liquidacionId: '',
    liquidacionUniqueId: '',
    liquidacion_company: '',
    liquidacionGuias: '',
    liquidacionCantidad: '',
    liquidacionFaena_kg_total: '',
    liquidacionPromedio_animal: '',
    liquidacionPrecio_venta: '',
    liquidacionFecha_salida: '',
    liquidacionFecha_faena: '',
    liquidacionPrecio_kg_carcasa: '',
    liquidacionPrecio_total: '',
  });
  // ###############################   API  ########################
  async function sendApi() {
    if (!isLoadingS) {
      setIsLoadingS(true);
      // CREATE
      const returno = await LiquidacionServices.LiquidacionCrudCreate(
        liquidacionss
      );
      // FIND ALL
      // const returno1 = await LiquidacionServices.LiquidacionCrudFind();
      // FIND ONE
      //const returno2 = await LiquidacionServices.LiquidacionCrudFindOne("id");

      if (Env.DEBUG === 'true') {
        console.log('API_RETURN', returno);
      }
      if (returno?.created_at) {
        showSimpleMessage('Datos Enviados', 'SENAIA', 'success', {
          hideStatusBar: true,
        });
      } else {
        showSimpleMessage('Error', 'SENAIA', 'danger', {
          hideStatusBar: true,
        });
      }
    }
    Vibration.vibrate();
    setIsLoadingS(false);
  }
  // ##################################################
  // #################################################
  useEffect(() => {
    return () => {
      Orientation.lockToPortrait();
    };
  }, []);
  // ##################################################
  // ##################################################

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <ScrollView>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row
              data={CONTENT.tableHead}
              flexArr={[1, 2, 1, 1]}
              style={styles.head}
              textStyle={styles.text}
            />
            <TableWrapper style={styles.wrapper}>
              <Col
                data={CONTENT.tableTitle}
                style={styles.title}
                heightArr={[28, 28]}
                textStyle={styles.text}
              />
              <Rows
                data={CONTENT.tableData}
                flexArr={[2, 1, 1]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default memo(LiquidacionScreen);
