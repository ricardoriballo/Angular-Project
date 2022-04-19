import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film: any = [];

  constructor(private http:HttpClient,  private activeRoute: ActivatedRoute,) { }


  ngOnInit(): void {
    this.activeRoute.params.subscribe(_id => {
      const {id} = _id;
      this.http.get(`https://ghibliapi.herokuapp.com/films/${id}`)
      .subscribe(response => {
        this.film = response;
      })
    })
  }
}
