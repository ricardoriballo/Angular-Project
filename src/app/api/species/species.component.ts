import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  species: any [] = [];

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    this.http.get('https://ghibliapi.herokuapp.com/species')
    .subscribe((response:any)=> {
      this.species = response;
      console.log(this.species)
    })
    
  }
}
