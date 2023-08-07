import { NgModule } from '@angular/core';
import { VueSimulatorRendererComponent } from './ngx-simulator-renderer.component';
import { PageComponent } from './page/page.component';



@NgModule({
  declarations: [
    VueSimulatorRendererComponent,
    PageComponent
  ],
  imports: [
  ],
  exports: [
    VueSimulatorRendererComponent
  ]
})
export class VueSimulatorRendererModule { }
