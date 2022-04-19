import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: any [] = [];

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    this.http.get('https://ghibliapi.herokuapp.com/people')
    .subscribe((response:any)=> {
      this.people = response;
      console.log(this.people)
    })
    
  }
}
