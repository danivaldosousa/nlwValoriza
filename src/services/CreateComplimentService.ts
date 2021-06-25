import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/Complimentsrepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

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
    if (user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver!");
    }
    const userReceiverExists = await usersRepositories.findOne(user_receiver);
    if (!userReceiverExists) {
      throw new Error("User Receiver does not exists!");
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
}.
export { CreateComplimentService }