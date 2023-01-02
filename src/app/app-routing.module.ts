import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './authGuard/auth.guard';
import { NotFound } from './Error/notFound.component';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { ListingComponent } from './pages/listing/listing.component';

const routes: Routes = [
  {path:'' ,component:AuthenticationComponent},
  {path:'listing' ,component:ListingComponent,canActivate:[AuthGuard]},
  {path:'product/:id',component:DetailPageComponent,canActivate:[AuthGuard]},
  {path:'add/cart' ,component:CartpageComponent,canActivate:[AuthGuard]},
  {path:'**' ,component:NotFound},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
