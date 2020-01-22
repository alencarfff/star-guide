import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { MoviesModule } from './movies/movies.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { WarningComponent } from './warning/warning.component';
import { CharactersModule } from './characters/characters.module';
import { PlanetsModule } from './planets/planets.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { SpeciesModule } from './species/species.module';
import { StarshipsModule } from './starships/starships.module';
import { EntityListComponent } from './shared/components/entity-list/entity-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ErrorPageComponent,
    WarningComponent,
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    CharactersModule,
    PlanetsModule,
    StarshipsModule,
    VehiclesModule,
    SpeciesModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
