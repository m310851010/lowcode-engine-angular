import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorComponent} from './editor.component';
import {EditorRoutingModule} from './editor-routing.module';
import { LogoComponent } from './components/logo/logo.component';


@NgModule({
  declarations: [
    EditorComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule
  ]
})
export class EditorModule {
}
