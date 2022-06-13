import {IUser} from '../../types/IUser';
import cryptoService from '../crypto';

interface LoginResponse extends Omit<IUser, 'password'> {
  acess_token: number;
  name: string;
}

async function login({email, password}: IUser) {
  return new Promise<LoginResponse>(resolve => {
    setTimeout(() => {
      resolve({
        acess_token: cryptoService.hashCode(JSON.stringify({email, password})),
        name: 'Aluno da Sponte',
        email,
      });
    }, 2000);
  });
}

const authService = {login};

export default authService;
