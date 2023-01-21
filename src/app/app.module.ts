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
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from "ngx-infinite-scroll";


import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './common/Model';
import { LoaderComponent } from './common/loader/loader.component';
import { ListingProductComponent } from './common/listing-product/listing-product.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { ProductDetailComponent } from './common/product-detail/product-detail.component';
import { FooterComponent } from './common/footer/footer.component';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { TostComponent } from './common/tost/tost.component';
import { InputsComponent } from './common/inputs/inputs.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';




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
    ProductDetailComponent,
    FooterComponent,
    CartpageComponent,
    TostComponent,
    InputsComponent,
    CheckoutComponent,
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
    NgbToastModule,
    InfiniteScrollModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
