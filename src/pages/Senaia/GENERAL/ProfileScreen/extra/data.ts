/* eslint-disable max-params */
import type { ImageSourcePropType } from 'react-native';

export class Profile {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly photo: ImageSourcePropType,
    readonly location: string,
    readonly experience: number,
    readonly description: string,
    readonly followers: number,
    readonly following: number,
    readonly posts: number,
    readonly height: number,
    readonly weight: number
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static jenniferGreen(): Profile {
    return new Profile(
      'VPA',
      '',
      require('../assets/image-profile.jpg'),
      'Asunción, Paraguay',
      3,
      '¡Hola!nOMBRE.Técnico Licenciado SENACSA.',
      1111,
      99,
      100,
      174,
      48
    );
  }
}
