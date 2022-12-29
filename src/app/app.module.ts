import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderOneComponent } from './header-one/header-one.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    HomeComponent,
    CardComponent,
    ListGroupComponent,
    HeaderThreeComponent,
    PaginationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
