import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateparcelle',
  templateUrl: './updateparcelle.component.html',
  styleUrls: ['./updateparcelle.component.css']
})
export class UpdateparcelleComponent implements OnInit {

  id=2;
  constructor() { }

  ngOnInit() {
  }


  showAjout(){
    this.id = 1;
    console.log(this.id);
  }
  showModification(){
    this.id = 2;
    console.log(this.id);
  }
  showSuppression(){
    this.id = 3;
    console.log(this.id);
  }

}
