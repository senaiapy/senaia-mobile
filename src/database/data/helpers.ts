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
 * @ Modified time: 2022-02-10 18:52:55
 * @ Description:
 */
import database from '@/database/index';

export type Weight = {
  createdAt?: Date;
  weight: string | number;
  note: string | undefined;
};

const weights = database.collections.get('weights');

export const observeWeights = () => weights.query().observe();

export const saveWeight = async ({ weight, note }: Weight) => {
  await database.write(async () => {
    await weights.create(
      // @ts-ignore
      (entry: { weight: number; note: string | undefined }) => {
        entry.weight = Number(weight);
        entry.note = note;
      }
    );
  });
};
