import { PeopleComponent } from './people/people.component';
import { SpeciesComponent } from './species/species.component';
import { FilmsComponent } from './films/films.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AppRoutingModule } from '../app-routing.module';
import { LocationComponent } from './location/location.component';
import { FilmComponent } from './film/film.component';



@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [AppRoutingModule],
  declarations: [FilmsComponent, FilmComponent, PageComponent, VehiclesComponent, SpeciesComponent, PeopleComponent, LocationComponent]
})
export class ApiModule { 

}

