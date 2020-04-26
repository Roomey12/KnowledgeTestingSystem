import { Question } from './question';

export class Answer {
    AnswerId: number;
    Content: string;
    IsCorrect: boolean;
    Mark: number;
    QuestionId: number;
    Question: Question;
}