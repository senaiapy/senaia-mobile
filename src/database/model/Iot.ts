/* eslint-disable unicorn/filename-case */
// ########################################
/**
 // ########################################

 * @ Create Time: 2022-02-09 12:39:09
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:53:23
 * @ Description:
 */

import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class Iot extends Model {
  static table = 'iots';

  @field('sensorMaintenance')
  sensorMaintenance!: string;
  @field('sensorWarning')
  sensorWarning!: string;
  @field('sensorUserName')
  sensorUserName!: string;
  @field('sensorUserPassword')
  sensorUserPassword!: string;
  @field('sensorUserMail')
  sensorUserMail!: string;
  @field('sensorUserLevelAces')
  sensorUserLevelAces!: string;
  @field('sensorUserLocked')
  sensorUserLocked!: string;
  @field('sensorId')
  sensorId!: string;
  @field('sensorKey')
  sensorKey!: string;
  @field('sensorKeyPrivate')
  sensorKeyPrivate!: string;
  @field('sensorUniqueId')
  sensorUniqueId!: string;
  @field('sensorName')
  sensorName!: string;
  @field('sensorStatus')
  sensorStatus!: string;
  @field('sensorLocked')
  sensorLocked!: string;
  @field('sensorInTotal')
  sensorInTotal!: string;
  @field('sensorOutTotal')
  sensorOutTotal!: string;
  @field('sensorInParcial')
  sensorInParcial!: string;
  @field('sensorOutParcial')
  sensorOutParcial!: string;
  @field('sensorParcialClear')
  sensorParcialClear!: string;
  @field('sensorCredits')
  sensorCredits!: string;
  @field('sensorCreditsFactor')
  sensorCreditsFactor!: string;
  @field('sensorWeight')
  sensorWeight!: string;
  @field('sensorEnergyKW')
  sensorEnergyKW!: string;
  @field('sensorEnergyV')
  sensorEnergyV!: string;
  @field('sensorEnergyAS')
  sensorEnergyAS!: string;
  @field('sensorEnergyI')
  sensorEnergyI!: string;
  @field('sensorEnergyP')
  sensorEnergyP!: string;
  @field('sensorEnergyVA')
  sensorEnergyVA!: string;
  @field('sensorEnergyKWH')
  sensorEnergyKWH!: string;
  @field('sensorEnergyCurrent')
  sensorEnergyCurrent!: string;
  @field('sensorEnergyVoltage')
  sensorEnergyVoltage!: string;
  @field('sensorEnergyPower')
  sensorEnergyPower!: string;
  @field('sensorEnergyCalibra')
  sensorEnergyCalibra!: string;
  @field('sensorEnergyPf')
  sensorEnergyPf!: string;
  @field('sensorEnergyTariff')
  sensorEnergyTariff!: string;
  @field('sensorType')
  sensorType!: string;
  @field('sensorPrivateKey')
  sensorPrivateKey!: string;
  @field('sensorPublicKey')
  sensorPublicKey!: string;
  @field('sensorSaveLog')
  sensorSaveLog!: string;
  @field('sensorUserId')
  sensorUserId!: string;
  @field('sensorDate')
  sensorDate!: string;
  @field('sensorTime')
  sensorTime!: string;
  @field('sensorLong')
  sensorLong!: string;
  @field('sensorLati')
  sensorLati!: string;
  @field('sensorPres')
  sensorPres!: string;
  @field('sensorTem1')
  sensorTem1!: string;
  @field('sensorTem2')
  sensorTem2!: string;
  @field('sensorTem3')
  sensorTem3!: string;
  @field('sensorTem4')
  sensorTem4!: string;
  @field('sensorTem5')
  sensorTem5!: string;
  @field('sensorHumi')
  sensorHumi!: string;
  @field('sensorAceX')
  sensorAceX!: string;
  @field('sensorAceY')
  sensorAceY!: string;
  @field('sensorAceZ')
  sensorAceZ!: string;
  @field('sensorMagX')
  sensorMagX!: string;
  @field('sensorMagY')
  sensorMagY!: string;
  @field('sensorMagZ')
  sensorMagZ!: string;
  @field('sensorGyrX')
  sensorGyrX!: string;
  @field('sensorGyrY')
  sensorGyrY!: string;
  @field('sensorGyrZ')
  sensorGyrZ!: string;
  @field('sensorPuls')
  sensorPuls!: string;
  @field('sensorOxim')
  sensorOxim!: string;
  @field('sensorMapX')
  sensorMapX!: string;
  @field('sensorMapY')
  sensorMapY!: string;
  @field('sensorMapZ')
  sensorMapZ!: string;
  @field('sensorSeco')
  sensorSeco!: string;
  @field('sensorSno2')
  sensorSno2!: string;
  @field('sensorSnh3')
  sensorSnh3!: string;
  @field('sensorLigh')
  sensorLigh!: string;
  @field('sensorSoun')
  sensorSoun!: string;
  @field('sensorAna1')
  sensorAna1!: string;
  @field('sensorAna2')
  sensorAna2!: string;
  @field('sensorAna3')
  sensorAna3!: string;
  @field('sensorBut1')
  sensorBut1!: string;
  @field('sensorBut2')
  sensorBut2!: string;
  @field('sensorBut3')
  sensorBut3!: string;
  @field('sensorBut4')
  sensorBut4!: string;
  @field('sensorBut5')
  sensorBut5!: string;
  @field('sensorLed1')
  sensorLed1!: string;
  @field('sensorLed2')
  sensorLed2!: string;
  @field('sensorLed3')
  sensorLed3!: string;
  @field('sensorLed4')
  sensorLed4!: string;
  @field('sensorLed5')
  sensorLed5!: string;
}

export { Iot };
