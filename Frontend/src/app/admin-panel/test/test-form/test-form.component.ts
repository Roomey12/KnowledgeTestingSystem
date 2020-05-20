import { Component, OnInit, Input } from '@angular/core';
import { Test } from 'src/app/models/test';

@Component({
  selector: 'test-form',
  templateUrl: './test-form.component.html',
  styles: []
})
export class TestFormComponent implements OnInit {

  @Input() test: Test;
  
  constructor() { }

  ngOnInit(): void {
  }

}
