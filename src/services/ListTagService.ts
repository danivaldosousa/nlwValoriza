import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";


class ListTagService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);
    const tags = await tagsRepositories.find();

    return tags;
  }
}

export { ListTagService }