import { Component, Input } from '@angular/core';
import { Resource } from '@models/resource-model';

@Component({
  selector: 'app-resource-template',
  templateUrl: './resource-template.component.html',
  styleUrls: ['./resource-template.component.scss'],
})
export class ResourceTemplateComponent {
  @Input() resource: Resource;

  onImgError(event: { target: HTMLImageElement }): void {
    event.target.src = '/assets/default/default.jpg';
  }
}
