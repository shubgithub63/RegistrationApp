//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';//yha http clint module remove kiyas ha
//import { AppComponent } from './app.component';

//@NgModule({
 // declarations: [
   // AppComponent
 // ],
  //imports: [
   // BrowserModule,
   // HttpClientModule
  //],
  //providers: [
   // provideHttpClient(withFetch())
  //],
 // bootstrap: [AppComponent]
//})
//export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { RouterModule, Routes } from '@angular/router';
//import { HttpClientModule } from '@angular/common/http';
const appRoutes:Routes=[
  {path:'',component:RegisterComponent},
  {path:'userdetail',component:UserdetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserdetailComponent
  ],
  imports: [
    //HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
