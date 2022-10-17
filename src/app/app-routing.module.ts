import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './component/adduser/adduser.component';
import { AdminbComponent } from './component/adminb/adminb.component';
import { SelectComponent } from './component/select/select.component';
import { TaskaddComponent } from './component/taskadd/taskadd.component';
import { UserloginComponent } from './component/userlogin/userlogin.component';
import { UsermenuComponent } from './component/usermenu/usermenu.component';

const routes: Routes = [

  {path:'',component:SelectComponent},
  {path:'main',component:AdminbComponent,
    children:[
        {path:'adduser',component:AdduserComponent},
        {path:'taskadd',component:TaskaddComponent}
    ]},
  {path:'user',component:UsermenuComponent,
    children:[
      {path:'login',component:UserloginComponent},
      {path:'taskadd',component:TaskaddComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
