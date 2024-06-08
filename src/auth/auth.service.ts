import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable({})
export class AuthService {
  login() {
    return { msg: 'I am signin' };
  }

  signup() {
    return { msg: 'I am signup' };
  }
}
