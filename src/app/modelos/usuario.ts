export interface Registro {
  firstName: string;
  lastName: string;
  age: number;
  username: string;
  password: string;
  birthDate: string;
  gender: 'male' | 'female';

}

export interface RegistroResponse extends Registro {
  id: number;
}
