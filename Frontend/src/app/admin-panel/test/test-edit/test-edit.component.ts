import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from 'src/app/models/test';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styles: [
  ]
})
export class TestEditComponent implements OnInit {

  id;
  test: Test;
  loaded: boolean;

  constructor(private testService: TestService, private router: Router, activeRoute: ActivatedRoute) {
      this.id = activeRoute.snapshot.params["id"];
  }

  ngOnInit(){
    if(this.id){
      this.loadTest();
    }
  }

  loadTest(){
    this.testService.getTestById(this.id)
      .subscribe((data: Test) =>{
          this.test = data;
          this.loaded = true;
      })
  }

  save() {
    this.testService.putTest(this.test).subscribe(data => this.router.navigateByUrl("/admin-panel"));
  }
}
