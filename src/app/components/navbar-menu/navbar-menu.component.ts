import { Component, OnInit } from '@angular/core';
import { ResourceService } from '@services/resource.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
})
export class NavbarMenuComponent implements OnInit {
  categoriesName: string[];

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.categoriesName = this.resourceService.getCategoriesName();
  }
}
