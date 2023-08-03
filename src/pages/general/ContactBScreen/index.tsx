/* eslint-disable react-native/no-inline-styles */
/* eslint-disable unused-imports/no-unused-vars */
//#  www.airspacedefense.org
//#  Eng Marcelo Anjos
//#  marcelu.phd@gmail.com
//#  10/04/2020
//########################################
import React from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';

import styles from './styles';

const BG_IMAGE = require('@/assets/images/wallpaper_6.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');

import {
  Col,
  Row,
  Rows,
  Table,
  TableWrapper,
} from '@react-native-table-component';

import { useGetCharactersQuery } from '@/common/generated/graphql';

const CONTENT = {
  tableHead: ['Column 0/Row 0', 'Column 1', 'Column 2', 'Column 3'],
  tableTitle: ['Row', 'Row 2', 'Row 3', 'Row 4'],
  tableData: [
    ['1', '2', '3'],
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['a', 'b', 'c'],
  ],
};
import type { Item } from '@/type/Item';

export type Props = {
  datas: Item;
  navigatePage: any;
};

const ContactBScreen: React.FC<Props> = ({ datas, navigatePage }: Props) => {
  const { data, loading } = useGetCharactersQuery();

  if (loading) {
    return (
      <View testID="progress" style={styles.container}>
        <ActivityIndicator color="#32B768" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default ContactBScreen;
