import IUser from "./User";

export default interface ICard {
  id: string;
  name: string;
  description: string;
  dueDate?: Date| string;
  assignee?: IUser;
  isDone: boolean;
}
