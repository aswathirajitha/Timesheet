import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './component/select/select.component';
import { HeaderComponent } from './component/header/header.component';
import { AdminbComponent } from './component/adminb/adminb.component';
import { AdduserComponent } from './component/adduser/adduser.component';
import { PiechartComponent } from './component/piechart/piechart.component';
import { BarchartComponent } from './component/barchart/barchart.component';
import { TaskaddComponent } from './component/taskadd/taskadd.component';
import { UsermenuComponent } from './component/usermenu/usermenu.component';
import { UserloginComponent } from './component/userlogin/userlogin.component';
import { UserviewComponent } from './component/userview/userview.component';
import { TodouserComponent } from './component/todouser/todouser.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    HeaderComponent,
    AdminbComponent,
    AdduserComponent,
    PiechartComponent,
    BarchartComponent,
    TaskaddComponent,
    UsermenuComponent,
    UserloginComponent,
    UserviewComponent,
    TodouserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
