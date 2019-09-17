import ICard from "./Card";

export default interface IBoard {
  id: string;
  name: string;
  cards: ICard[];
}
