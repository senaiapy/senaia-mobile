/* eslint-disable unicorn/filename-case */
// ########################################
/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-02-09 12:39:09
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:53:30
 * @ Description:
 */
import { tableSchema } from '@nozbe/watermelondb';

const iotSchema = tableSchema({
  name: 'iots',
  columns: [
    { name: 'sensorMaintenance', type: 'string' },
    { name: 'sensorWarning', type: 'string' },
    { name: 'sensorUserName', type: 'string' },
    { name: 'sensorUserPassword', type: 'string' },
    { name: 'sensorUserMail', type: 'string' },
    { name: 'sensorUserLevelAcess', type: 'string' },
    { name: 'sensorUserLocked', type: 'string' },
    { name: 'sensorId', type: 'string' },
    { name: 'sensorKey', type: 'string' },
    { name: 'sensorKeyPrivate', type: 'string' },
    { name: 'sensorUniqueId', type: 'string' },
    { name: 'sensorName', type: 'string' },
    { name: 'sensorStatus', type: 'string' },
    { name: 'sensorLocked', type: 'string' },
    { name: 'sensorInTotal', type: 'string' },
    { name: 'sensorOutTotal', type: 'string' },
    { name: 'sensorInParcial', type: 'string' },
    { name: 'sensorOutParcial', type: 'string' },
    { name: 'sensorParcialClear', type: 'string' },
    { name: 'sensorCredits', type: 'string' },
    { name: 'sensorCreditsFactor', type: 'string' },
    { name: 'sensorWeight', type: 'string' },
    { name: 'sensorEnergyKW', type: 'string' },
    { name: 'sensorEnergyV', type: 'string' },
    { name: 'sensorEnergyAS', type: 'string' },
    { name: 'sensorEnergyI', type: 'string' },
    { name: 'sensorEnergyP', type: 'string' },
    { name: 'sensorEnergyVA', type: 'string' },
    { name: 'sensorEnergyKWH', type: 'string' },
    { name: 'sensorEnergyCurrent', type: 'string' },
    { name: 'sensorEnergyVoltage', type: 'string' },
    { name: 'sensorEnergyPower', type: 'string' },
    { name: 'sensorEnergyCalibration', type: 'string' },
    { name: 'sensorEnergyPf', type: 'string' },
    { name: 'sensorEnergyTariff', type: 'string' },
    { name: 'sensorType', type: 'string' },
    { name: 'sensorPrivateKey', type: 'string' },
    { name: 'sensorPublicKey', type: 'string' },
    { name: 'sensorSaveLog', type: 'string' },
    { name: 'sensorUserId', type: 'string' },
    { name: 'sensorDate', type: 'string' },
    { name: 'sensorTime', type: 'string' },
    { name: 'sensorLong', type: 'string' },
    { name: 'sensorLati', type: 'string' },
    { name: 'sensorPres', type: 'string' },
    { name: 'sensorTem1', type: 'string' },
    { name: 'sensorTem2', type: 'string' },
    { name: 'sensorTem3', type: 'string' },
    { name: 'sensorTem4', type: 'string' },
    { name: 'sensorTem5', type: 'string' },
    { name: 'sensorHumi', type: 'string' },
    { name: 'sensorAceX', type: 'string' },
    { name: 'sensorAceY', type: 'string' },
    { name: 'sensorAceZ', type: 'string' },
    { name: 'sensorMagX', type: 'string' },
    { name: 'sensorMagY', type: 'string' },
    { name: 'sensorMagZ', type: 'string' },
    { name: 'sensorGyrX', type: 'string' },
    { name: 'sensorGyrY', type: 'string' },
    { name: 'sensorGyrZ', type: 'string' },
    { name: 'sensorPuls', type: 'string' },
    { name: 'sensorOxim', type: 'string' },
    { name: 'sensorMapX', type: 'string' },
    { name: 'sensorMapY', type: 'string' },
    { name: 'sensorMapZ', type: 'string' },
    { name: 'sensorSeco', type: 'string' },
    { name: 'sensorSno2', type: 'string' },
    { name: 'sensorSnh3', type: 'string' },
    { name: 'sensorLigh', type: 'string' },
    { name: 'sensorSoun', type: 'string' },
    { name: 'sensorAna1', type: 'string' },
    { name: 'sensorAna2', type: 'string' },
    { name: 'sensorAna3', type: 'string' },
    { name: 'sensorBut1', type: 'string' },
    { name: 'sensorBut2', type: 'string' },
    { name: 'sensorBut3', type: 'string' },
    { name: 'sensorBut4', type: 'string' },
    { name: 'sensorBut5', type: 'string' },
    { name: 'sensorLed1', type: 'string' },
    { name: 'sensorLed2', type: 'string' },
    { name: 'sensorLed3', type: 'string' },
    { name: 'sensorLed4', type: 'string' },
    { name: 'sensorLed5', type: 'string' },

    { name: 'sensordbversion', type: 'string' },
    { name: 'sensorcreatedAt', type: 'string' },
    { name: 'sensorupdatedAt', type: 'string' },
  ],
});

export { iotSchema };
