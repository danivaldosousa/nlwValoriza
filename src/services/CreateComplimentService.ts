import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface IComplimentRequest {
  user_receiver: string;
  user_sender: string;
  tag_id: string;
  message: string;
}
class CreateComplimentService {

  async execute({ tag_id, user_receiver, user_sender, message }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);
    const tagsRepositories = getCustomRepository(TagsRepositories);
    if (user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver!");
    }
    const userReceiverExists = await usersRepositories.findOne(user_receiver);
    if (!userReceiverExists) {
      throw new Error("User Receiver does not exists!");
    }
    const userSenderExists = await usersRepositories.findOne(user_sender);
    if (!userSenderExists) {
      throw new Error("User Sender does not exists!");
    }
    const TagExists = await tagsRepositories.findOne(tag_id);
    if (!TagExists) {
      throw new Error("Tag does not exists!");
    }
    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })
    await complimentsRepositories.save(compliment);
    return compliment;
  }
}
export { CreateComplimentService }