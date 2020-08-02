import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { PoemsComponent } from './components/poems.component';
import { RandomPoemComponent } from './components/random-poem.component';
// import { AuthorsComponent } from './components/authors.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'poems', component: PoemsComponent},
    {path: 'random-poem', component: RandomPoemComponent},
    // {path: 'authors', component: AuthorsComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', component: ErrorComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);