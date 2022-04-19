import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locations: any [] = [];

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    this.http.get('https://ghibliapi.herokuapp.com/locations')
    .subscribe((response:any)=> {
      this.locations = response;
      console.log(this.locations)
    })
    
  }
}
