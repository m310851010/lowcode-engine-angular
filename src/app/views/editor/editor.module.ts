import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { WithWebComponent } from '../../custom-elements/element-registry';

@NgModule({
  declarations: [EditorComponent],
  imports: [CommonModule]
})
export class EditorModule implements WithWebComponent {
  webComponent = EditorComponent;
}
