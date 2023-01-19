export type Login = {
  username: string;
  password: string;
};

export type LoginResponse = {
  id:	string;
  userName:	string;
  email:	string;
  firstName:	string;
  lastName:	string;
  gender:	'male'| 'female';
  token:	string;

}
