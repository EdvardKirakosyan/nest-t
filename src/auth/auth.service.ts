import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { msg: 'I am signin' };
  }

  signup() {
    return { msg: 'I am signup' };
  }
}
