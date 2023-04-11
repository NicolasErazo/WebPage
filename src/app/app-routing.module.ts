import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { IndexOldComponent } from './components/index-old/index-old.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: '2', component: IndexOldComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
