import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: any [] = [];

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    this.http.get('https://ghibliapi.herokuapp.com/films')
    .subscribe((response:any)=> {
      this.films = response;
      console.log(this.films)
    })
    
  }
}
