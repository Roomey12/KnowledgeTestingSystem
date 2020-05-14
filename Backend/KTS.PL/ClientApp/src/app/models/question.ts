import { Test } from './test';

export class Question {
    QuestionId: number;
    Content: string;
    TestId: number;
    IsSingle: boolean;
    Test: Test;
}