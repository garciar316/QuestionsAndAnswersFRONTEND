import { Category } from "./category.model";

export interface Question {
    id: number;

    description: string;

    category: Category;
}