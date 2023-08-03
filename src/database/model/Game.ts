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
import { date, field } from '@nozbe/watermelondb/decorators';

class Game extends Model {
  static table = 'games';

  @field('gameUser')
  gameUser!: string;

  @field('gameBio')
  gameBio!: string;

  @field('gameAvatar')
  gameAvatar!: string;

  @field('gameToken')
  gameToken!: string;

  @field('gameGroupUser')
  gameGroupUser!: string;

  @field('gameDeviceType')
  gameDeviceType!: string;

  @field('gameApiKeyHardware')
  gameApiKeyHardware!: string;

  @field('gameApiKeyMobile')
  gameApiKeyMobile!: string;

  @field('gameApiKeySoftware')
  gameApiKeySoftware!: string;

  @field('gameJackpot1Locked')
  gameJackpot1Locked!: string;

  @field('gameJackpot2Locked')
  gameJackpot2Locked!: string;

  @field('gameJackpot3Locked')
  gameJackpot3Locked!: string;

  @field('gameMaintenance')
  gameMaintenance!: string;

  @field('gameWarning')
  gameWarning!: string;

  @field('gameUserName')
  gameUserName!: string;

  @field('gameUserPassword')
  gameUserPassword!: string;

  @field('gameUserMail')
  gameUserMail!: string;

  @field('gameUserLevelAcess')
  gameUserLevelAcess!: string;

  @field('gameUserLocked')
  gameUserLocked!: string;

  @field('gameId')
  gameId!: string;

  @field('game_id')
  game_id!: string;

  @field('gameRelative_cashin')
  gameRelative_cashin!: string;

  @field('gameRelative_cashout')
  gameRelative_cashout!: string;

  @field('gameKey')
  gameKey!: string;

  @field('gameKeyPrivate')
  gameKeyPrivate!: string;

  @field('gameUniqueId')
  gameUniqueId!: string;

  @field('gameUniqueId')
  gameName!: string;

  @field('gameStatus')
  gameStatus!: string;

  @field('gameLocked')
  gameLocked!: string;

  @field('gameInTotal')
  gameInTotal!: string;

  @field('gameOutTotal')
  gameOutTotal!: string;

  @field('gameInParcial')
  gameInParcial!: string;

  @field('gameOutParcial')
  gameOutParcial!: string;

  @field('gameParcialClear')
  gameParcialClear!: string;

  @field('gameCredits')
  gameCredits!: string;

  @field('gameCreditsFactor')
  gameCreditsFactor!: string;

  @field('gameJackpot1')
  gameJackpot1!: string;

  @field('gameJackpot2')
  gameJackpot2!: string;

  @field('gameJackpot3')
  gameJackpot3!: string;

  @field('gameWeight')
  gameWeight!: string;

  @field('gameRegister1')
  gameRegister1!: string;

  @field('gameRegister2')
  gameRegister2!: string;

  @field('gameRegister3')
  gameRegister3!: string;

  @field('gameRegister4')
  gameRegister4!: string;

  @field('gameRegister5')
  gameRegister5!: string;

  @field('gameRegister6')
  gameRegister6!: string;

  @field('gameRegister7')
  gameRegister7!: string;

  @field('gameRegister8')
  gameRegister8!: string;

  @field('gameRegister9')
  gameRegister9!: string;

  @field('gameRegister10')
  gameRegister10!: string;

  @field('dbversion')
  dbversion!: string;

  //@readonly
  @date('createdAt')
  createdAt: any;

  //@readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Game };
