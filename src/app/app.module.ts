import { ResourceService } from './services/resource.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarMenuComponent } from '@components/navbar-menu/navbar-menu.component';
import { ResourcesWidgetComponent } from '@components/resources-widget/resources-widget.component';

@NgModule({
  declarations: [AppComponent, NavbarMenuComponent, ResourcesWidgetComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ResourceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
