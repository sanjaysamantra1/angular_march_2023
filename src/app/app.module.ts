import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DatabindingComponent } from './components/databinding/databinding.component';

@NgModule({
  // components,pipes,directives
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NavbarComponent,
    CarouselComponent,
    CategoriesComponent,
    DatabindingComponent,
  ],
  // dependent modules
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  // services(Injectables)
  providers: [],
  // which component to load
  bootstrap: [AppComponent],
})
export class AppModule {}