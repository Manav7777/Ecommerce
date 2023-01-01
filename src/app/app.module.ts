import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NotFound } from './Error/notFound.component';
import { ListingComponent } from './pages/listing/listing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CardComponent } from './common/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './common/loader/loader.component';
import { ListingProductComponent } from './common/listing-product/listing-product.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthenticationComponent,
    NotFound,
    ListingComponent,
    CardComponent,
    LoaderComponent,
    ListingProductComponent,
    DetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCarouselModule,
    NgbModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
