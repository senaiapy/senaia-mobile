/* eslint-disable unicorn/filename-case */

/* eslint-disable unused-imports/no-unused-vars */

// ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-08-17 13:35
// ########################################
// @ Modified time: 2022-08-17 13:03:35
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  NetPrinter,
  NetPrinterEventEmitter,
  RN_THERMAL_RECEIPT_PRINTER_EVENTS,
} from 'react-native-thermal-receipt-printer-image-qr';

import Loading from '@/components/Loading';

export interface DeviceType {
  host: string;
  port: string;
  device_name?: string;
  printerType?: string;
}

export const FindPrinter = () => {
  const [devices, setDevices] = React.useState<DeviceType[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (devices.length === 0) {
      setLoading(true);
      NetPrinterEventEmitter.addListener(
        RN_THERMAL_RECEIPT_PRINTER_EVENTS.EVENT_NET_PRINTER_SCANNED_SUCCESS,
        (printers: DeviceType[]) => {
          console.log({ printers });
          if (printers) {
            console.log({ printers });
            setLoading(false);
            setDevices(printers);
          }
        }
      );
      (async () => {
        const results = await NetPrinter.getDeviceList();
        console.log({ results });
      })();
    }
    return () => {
      NetPrinterEventEmitter.removeAllListeners(
        RN_THERMAL_RECEIPT_PRINTER_EVENTS.EVENT_NET_PRINTER_SCANNED_SUCCESS
      );
      NetPrinterEventEmitter.removeAllListeners(
        RN_THERMAL_RECEIPT_PRINTER_EVENTS.EVENT_NET_PRINTER_SCANNED_ERROR
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading loading={true} text={'Finding'} />;
  }

  const onSelectedPrinter = (printer: any) => {
    //navigate('Home', {printer});
  };

  return (
    <View style={styles.container}>
      {devices !== undefined &&
        devices?.length > 0 &&
        devices?.map((item: any, index) => {
          const onPress = () => onSelectedPrinter(item);
          return (
            <TouchableOpacity key={`printer-item-${index}`} onPress={onPress}>
              <Text>{item.host}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
