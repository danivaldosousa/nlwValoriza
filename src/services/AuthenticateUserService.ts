import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateUserService {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserService) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      email
    });
    if (!user) {
      throw new Error("Email/Password incorrect!");
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Email/Password incorrect!");
    }
    const token = sign({
      email: user.email
    },
      "c9a2282013d450d71e5eb9e4003515a5",
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );
    return token;
  }
}
export { AuthenticateUserService }