import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUserService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const user = await usersRepositories.find();

    return user;

  }
}

export { ListUserService }