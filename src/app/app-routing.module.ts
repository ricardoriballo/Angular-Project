import { LocationComponent } from './api/location/location.component';
import { SpeciesComponent } from './api/species/species.component';
import { VehiclesComponent } from './api/vehicles/vehicles.component';
import { PeopleComponent } from './api/people/people.component';
import { FilmsComponent } from './api/films/films.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './api/film/film.component';

const routes: Routes = [
  {path: 'films', component: FilmsComponent},  
  {path: 'people', component: PeopleComponent},
  {path: 'locations', component: LocationComponent},
  {path: 'vehicles', component: VehiclesComponent},  
  {path: 'species', component: SpeciesComponent},
  {path: ':id',    component: FilmComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }