import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";


class ListUserReceiveComplimentController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserReceiveComplimentService = new ListUserReceiveComplimentsService();
    const compliments = await listUserReceiveComplimentService.execute(user_id);

    return response.json(compliments);
  }

}

export { ListUserReceiveComplimentController }