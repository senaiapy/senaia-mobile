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

const gameSchema = tableSchema({
  name: 'games',
  columns: [
    { name: 'gameUser', type: 'string' },
    { name: 'gameBio', type: 'string' },
    { name: 'gameAvatar', type: 'string' },
    { name: 'gameToken', type: 'string' },
    { name: 'gameGroupUser', type: 'string' },
    { name: 'gameDeviceType', type: 'string' },
    { name: 'gameApiKeyHardware', type: 'string' },
    { name: 'gameApiKeyMobile', type: 'string' },
    { name: 'gameApiKeySoftware', type: 'string' },
    { name: 'gameJackpot1Locked', type: 'string' },
    { name: 'gameJackpot2Locked', type: 'string' },
    { name: 'gameJackpot3Locked', type: 'string' },
    { name: 'gameMaintenance', type: 'string' },
    { name: 'gameWarning', type: 'string' },
    { name: 'gameUserName', type: 'string' },
    { name: 'gameUserPassword', type: 'string' },
    { name: 'gameUserMail', type: 'string' },
    { name: 'gameUserLevelAcess', type: 'string' },
    { name: 'gameUserLocked', type: 'string' },
    { name: 'gameId', type: 'string' },
    { name: 'game_id', type: 'string' },
    { name: 'gameRelative_cashin', type: 'string' },
    { name: 'gameRelative_cashout', type: 'string' },
    { name: 'gameKey', type: 'string' },
    { name: 'gameKeyPrivate', type: 'string' },
    { name: 'gameUniqueId', type: 'string' },
    { name: 'gameName', type: 'string' },
    { name: 'gameStatus', type: 'string' },
    { name: 'gameLocked', type: 'string' },
    { name: 'gameInTotal', type: 'string' },
    { name: 'gameOutTotal', type: 'string' },
    { name: 'gameInParcial', type: 'string' },
    { name: 'gameOutParcial', type: 'string' },
    { name: 'gameParcialClear', type: 'string' },
    { name: 'gameCredits', type: 'string' },
    { name: 'gameCreditsFactor', type: 'string' },
    { name: 'gameJackpot1', type: 'string' },
    { name: 'gameJackpot2', type: 'string' },
    { name: 'gameJackpot3', type: 'string' },
    { name: 'gameWeight', type: 'string' },
    { name: 'gameRegister1', type: 'string' },
    { name: 'gameRegister2', type: 'string' },
    { name: 'gameRegister3', type: 'string' },
    { name: 'gameRegister4', type: 'string' },
    { name: 'gameRegister5', type: 'string' },
    { name: 'gameRegister6', type: 'string' },
    { name: 'gameRegister7', type: 'string' },
    { name: 'gameRegister8', type: 'string' },
    { name: 'gameRegister9', type: 'string' },
    { name: 'gameRegister10', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { gameSchema };
