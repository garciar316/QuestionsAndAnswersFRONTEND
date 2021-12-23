import { Category } from "./category.model";
import { Reward } from "./reward.model";

export interface Round {
    id: number;

    description: string;

    reward: Reward;

    category: Category;
}