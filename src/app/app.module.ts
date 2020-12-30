import { ResourceService } from './services/resource.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourcesWidgetComponent } from '@components/resources-widget/resources-widget.component';
import { NavbarMenuComponent } from '@components/navbar-menu/navbar-menu.component';
import { NotFoundComponentComponent } from '@components/common/not-found-component/not-found-component.component';
import { ResourcesCategoryComponent } from './components/resources-category/resources-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ResourceTemplateComponent } from './components/resource-template/resource-template.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    ResourcesWidgetComponent,
    ResourcesCategoryComponent,
    NotFoundComponentComponent,
    ResourceTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    NgxUsefulSwiperModule,
    LazyLoadImageModule,
  ],
  providers: [ResourceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
