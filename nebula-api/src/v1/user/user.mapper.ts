import { Injectable } from '@nestjs/common';
import { Cart, User } from '@prisma/client';

@Injectable()
export class UserMapper {
  getUsers(users: User[]) {
    return users.map((user) => this.getUser(user));
  }

  getUser(user: User & { cart?: Cart }) {
    return {
      id: user.id,
      username: user.username,
      cartId: user.cart.id,
      role: user.role,
    };
  }
}
