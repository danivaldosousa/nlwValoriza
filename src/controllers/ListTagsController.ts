import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";


class ListTagsController {
  async handle(request: Request, response: Response) {
    const tagsService = new ListTagService;
    const tags = await tagsService.execute();
    return response.json(tags);
  }
}

export { ListTagsController }