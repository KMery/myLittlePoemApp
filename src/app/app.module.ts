import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Routes
import { routing, appRoutingProviders } from './app.routing';

// Components
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { PoemsComponent } from './components/poems.component';
import { AuthorsComponent } from './components/authors.component';
import { RandomPoemComponent } from './components/random-poem.component';

//Services
import { PoemService } from './services/poem.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    PoemsComponent,
    AuthorsComponent,
    RandomPoemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    PoemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
