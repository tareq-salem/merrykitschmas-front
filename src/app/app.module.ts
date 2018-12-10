// COMPONENTS
import { AppComponent } from './app.component';
    // HOME PAGE
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OrderToolbarComponent } from './components/welcome/order-toolbar/order-toolbar.component';
    // PRODUCT PAGE
import { ProductComponent } from './components/product-page-module/product.component';
import { CartControlComponent } from './components/product-page-module/cart-control/cart-control.component';
import {
  ProductRecommendationsComponent
} from './components/product-page-module/product-recommendations/product-recommendations.component';
import { ProductUsersCommentsComponent } from './components/product-page-module/product-users-comments/product-users-comments.component';
import { ProductDescriptionComponent } from './components/product-page-module/product-description/product-description.component';
import { ProductPictureComponent } from './components/product-page-module/product-picture/product-picture.component';
import {
    ProductUsersCommentsDetailsComponent
} from './components/product-page-module/product-users-comments-details/product-users-comments-details.component';
import { AddReviewComponent } from './components/product-page-module/product-users-comments-details/add-review/add-review.component';
import { ListReviewsComponent } from './components/product-page-module/product-users-comments-details/list-reviews/list-reviews.component';
  // SHARED
import { CartButtonComponent } from './components/share/cart-button/cart-button.component';

// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MATERIAL
import {
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatDividerModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatGridListModule
} from '@angular/material';


// DIRECTIVES

// ROUTES
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'product/id', component: ProductComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // HOME
    WelcomeComponent, // HOMEPAGE
    SideMenuComponent, // SIDE MENU
    FooterComponent, // FOOTER
    ProductComponent, // PRODUCT PAGE
    CartControlComponent,
    ProductRecommendationsComponent,
    ProductUsersCommentsComponent,
    PageNotFoundComponent,
    OrderToolbarComponent,
    ProductDescriptionComponent,
    ProductPictureComponent,
    ProductUsersCommentsDetailsComponent,
    AddReviewComponent,
    ListReviewsComponent,
    CartButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, // MATERIAL
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatDividerModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
