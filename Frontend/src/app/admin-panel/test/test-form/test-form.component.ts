import { Component, OnInit, Input } from '@angular/core';
import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'test-form',
  templateUrl: './test-form.component.html',
  styles: []
})
export class TestFormComponent implements OnInit {

  @Input() test: Test;
  
  constructor(public testService: TestService) { }

  ngOnInit(): void {
    this.testService.testModel.reset();
  }

}
