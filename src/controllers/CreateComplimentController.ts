import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";
class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { user_receiver, tag_id, message } = request.body;
    const createComplimentService = new CreateComplimentService();
    const { user_id } = request;
    const compliment = await createComplimentService.execute(
      {
        user_receiver,
        user_sender: user_id,
        tag_id,
        message
      });

    return response.json(compliment);

  }
}
export { CreateComplimentController }