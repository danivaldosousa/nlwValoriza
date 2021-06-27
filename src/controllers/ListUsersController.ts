import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";


class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersController = new ListUserService();
    const users = await listUsersController.execute();

    return response.json(users)
  }
}

export { ListUsersController }