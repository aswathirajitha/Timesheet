import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './component/select/select.component';
import { HeaderComponent } from './component/header/header.component';
import { AdminbComponent } from './component/adminb/adminb.component';
import { AdduserComponent } from './component/adduser/adduser.component';
import { ViewuserComponent } from './component/viewuser/viewuser.component';
import { PiechartComponent } from './component/piechart/piechart.component';
import { BarchartComponent } from './component/barchart/barchart.component';
import { TaskaddComponent } from './component/taskadd/taskadd.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    HeaderComponent,
    AdminbComponent,
    AdduserComponent,
    ViewuserComponent,
    PiechartComponent,
    BarchartComponent,
    TaskaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
