import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { NavComponent } from './nav/nav.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserRepoListComponent } from './user-repo-list/user-repo-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { DatePipe } from './date-pipe';
import { LogoHighlightDirective } from './logo-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    NavComponent,
    SearchUserComponent,
    UserRepoListComponent,
    NotFoundComponent,
    DatePipe,
    LogoHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
