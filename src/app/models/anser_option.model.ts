import { Question } from "./question.model";

export interface AnswerOption {
    id: number;

    description: string;

    isValid: boolean;

    question: Question;
}