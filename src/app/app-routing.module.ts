import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponentComponent } from '@components/not-found-component/not-found-component.component';
import { ResourcesCategoryComponent } from '@components/resources-category/resources-category.component';
import { ResourcesWidgetComponent } from '@components/resources-widget/resources-widget.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: ResourcesWidgetComponent },
  { path: 'category/:categoryName', component: ResourcesCategoryComponent },
  { path: '404', component: NotFoundComponentComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
