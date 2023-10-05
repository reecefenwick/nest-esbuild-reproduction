import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as assert from 'assert';

@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService,
  ) {
  }

  test() {
    console.log('hello')
    assert.notEqual(this.jwtService, undefined);
  }

}
