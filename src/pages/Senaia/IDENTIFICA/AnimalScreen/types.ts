/**
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Create Time: 2022-04-16 20:57:35
 * @ Modified by: Your name
 * @ Modified time: 2022-04-17 10:42:22
 * @ Description:
 */

// ###############################   TYPES  ###############################
export interface IAnimal {
  dbversion?: string;
  animalId?: string;
  animalUniqueId: string;
  animal_company?: string;
  animalNroTag?: string;
  animalDataNascimento?: string;
  animalDataQuarentena?: string;
  animalIdRaca?: string;
  animalSexo?: string;
  animalIdClassificacao?: string;
  animalUltimoPeso?: string;
  animalDataUltimapesagem?: string;
  animalListaNegra?: string;
  animal_raza?: string;
  animal_color?: string;
  animal_edad?: string;
  animalProductor_ID?: string;
  animalPropriedad_ID?: string;
  animalMarcaFuego?: string;
}

export type TAnimal = {
  dbversion?: string;
  animalId?: string;
  animalUniqueId: string;
  animal_company?: string;
  animalNroTag?: string;
  animalDataNascimento?: string;
  animalDataQuarentena?: string;
  animalIdRaca?: string;
  animalSexo?: string;
  animalIdClassificacao?: string;
  animalUltimoPeso?: string;
  animalDataUltimapesagem?: string;
  animalListaNegra?: string;
  animal_raza?: string;
  animal_color?: string;
  animal_edad?: string;
  animalProductor_ID?: string;
  animalPropriedad_ID?: string;
  animalMarcaFuego?: string;
};
