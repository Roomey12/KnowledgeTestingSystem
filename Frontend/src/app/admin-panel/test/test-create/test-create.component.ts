import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { Answer } from 'src/app/models/answer';
import { QuestionService } from 'src/app/services/question.service';
import { AnswerService } from 'src/app/services/answer.service';
import { forkJoin, of, from } from 'rxjs';
import { mergeMap, map, mergeAll, concatMap, tap, finalize } from 'rxjs/operators';
import { TestFormComponent } from '../test-form/test-form.component';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: []
})
export class TestCreateComponent implements OnInit {

  test;
  questions = [];
  hideQuestions: boolean = true;
  testCreated: boolean;
  questionsCreated: boolean;
  end: boolean;
  sas: Map<object, number[]>;

  constructor(private fb: FormBuilder, public testService: TestService, public questionService: QuestionService,
              public answerService: AnswerService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void { 
    this.test = new Test;
  }

  questionModel = this.fb.group({
    Content: ['', Validators.required],
    AnswersCount: ['', [this.answerCountRangeValidator, Validators.required]]
  });

  answerModel = this.fb.group({
    Content: ['', Validators.required],
    Mark: ['', [this.markRangeValidator, Validators.required]]
  });

  create(){
    let testTime = new Date();
    let Time = this.test.maxTime.split(":");
    testTime.setMinutes(Time[0]);
    testTime.setSeconds(Time[1]);
    testTime.setMilliseconds(0);
    this.test.maxTime = testTime;
    this.test.maxScore = Number(this.test.maxScore);
    for(let i = 0; i < this.test.maxScore; i++){
      this.questions.push(i);
    }
    this.testCreated = true;
  }

  next(){
    this.sas = new Map<object, number[]>();
    for(let i = 0; i < this.questions.length; i++){
      let q = document.getElementById(`q_${i+1}`) as HTMLInputElement;
      let t = document.getElementById(`t_${i+1}`) as HTMLInputElement;
      let a = document.getElementById(`a_${i+1}`) as HTMLInputElement;
      let cad = document.getElementById(`cad_${i+1}`) as HTMLInputElement;
      let isSin = true;
      if(t.checked){
        isSin = false;
      }
      let quest = {
        content: q.value,
        answerDescription: cad.value == null ? null : cad.value,
        isSingle: isSin
      };
      let help = [];
      for(let j = 0; j < Number(a.value); j++){
        help.push(j);
      }
      this.sas.set(quest, help);
    }
    this.questionsCreated = true;
    this.hideQuestions = false;
  }

  onSubmit(){
    this.test.maxScore = 0;
    this.testService.createTest(this.test).subscribe(data => {
          this.fillQuest();
      });
  }

  fillQuest(){
    let i = 0;
    from(this.sas).pipe(
      concatMap(item => {
        // get question info
        let q = document.getElementById(`q_${i+1}`) as HTMLInputElement;
        let t = document.getElementById(`t_${i+1}`) as HTMLInputElement;
        let cad = document.getElementById(`cad_${i+1}`) as HTMLInputElement;
        let isSin = true;
        if(t.checked){
            isSin = false;
        }
        let question = new Question();
        question.Content = q.value;
        question.IsSingle = isSin;
        question.AnswerDescription = cad.value;

        // get answers for this question
        let answers = [];
        for(let j of item[1]){
            let isCorrect = document.getElementById(`a_isCorrect_${i}:${j}`) as unknown as HTMLInputElement;
            let content = document.getElementById(`a_content_${i}:${j}`) as unknown as HTMLInputElement;
            let mark =  document.getElementById(`a_mark_${i}:${j}`) as unknown as HTMLInputElement;

            let answer = new Answer();
            answer.IsCorrect = isCorrect.checked;
            answer.Content = content.value;
            answer.Mark = Number(mark.value);
            answers.push(answer);
            j++;
        }
        i++;

        //post question
        return this.questionService.createQuestionForNewTest(question).pipe(
            concatMap(data=> {
                console.log(`question ${question.Content} done`);
                return from(answers).pipe(
                    concatMap(answer => this.answerService.createAnswerForNewQuestion(answer).pipe(
                        tap(data => console.log(`answer ${answer} done` ) ),
                    )),
                    finalize(() => {
                        console.log("done");
                    }),
                );
            }),
        );
    }),
    finalize(() => {
      this.router.navigateByUrl("/admin-panel");
      this.toastr.success("Тест был создан.", "Успешно.");
      this.end = true;
    }),
    ).subscribe();
  }

  answerCountRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 0 || control.value > 50)) {
        return { 'answerCountRange': true };
    }
    return null;
  }

  markRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < -100 || control.value > 100)) {
        return { 'markRange': true };
    }
    return null;
  }
}