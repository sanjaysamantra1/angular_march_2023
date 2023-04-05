import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UsersComponent } from './components/users/users.component';
import { GreetComponent } from './components/greet/greet.component';
import { NumberonlyDirective } from './custome-directives/numberonly.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { RemainingPipe } from './custom-pipes/remaining.pipe';
import { OrdinalPipe } from './custom-pipes/ordinal.pipe';
import { UserCardComponent } from './user-card/user-card.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { ClsComponent } from './cls/cls.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { MathComponent } from './components/math/math.component';
import { EmpComponent } from './components/emp/emp.component';
import { Emp2Component } from './components/emp2/emp2.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCrudComponent } from './components/user-crud/user-crud.component';
import { FormDemo1Component } from './components/form-demo1/form-demo1.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { TemplateDrivenFormClsComponent } from './components/template-driven-form-cls/template-driven-form-cls.component';
import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';

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
    DirectiveComponent,
    ProductListComponent,
    UsersComponent,
    GreetComponent,
    NumberonlyDirective,
    PipesComponent,
    RemainingPipe,
    OrdinalPipe,
    UserCardComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    EmployeesComponent,
    EmployeeTableComponent,
    ClsComponent,
    EmployeeAddComponent,
    MathComponent,
    EmpComponent,
    Emp2Component,
    UserListComponent,
    UserCrudComponent,
    FormDemo1Component,
    TemplateDrivenFormComponent,
    TemplateDrivenFormClsComponent,
    ModelDrivenFormComponent,
    HomeComponent,
    AboutusComponent,
    CareersComponent,
    NotfoundComponent,
    ProductDetailsComponent,
    ProductInfoComponent,
    PermanentJobsComponent,
    ContractJobsComponent,
  ],
  // dependent modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  // services(Injectables)
  providers: [],
  // which component to load
  bootstrap: [AppComponent],
})
export class AppModule {}
