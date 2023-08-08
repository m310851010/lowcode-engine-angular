import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Inject from '@alilc/lowcode-plugin-inject';
import { init, plugins, project } from '@alilc/lowcode-engine';
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo';
import SchemaPlugin from '@alilc/lowcode-plugin-schema';
import DataSource from '@alilc/lowcode-plugin-datasource-pane';
import { ActionsPlugin } from './plugins/actions-plugin';
import { InitPlugin } from './plugins/init-plugin';
import { SetterPlugin } from './plugins/setter-plugin';
import { RegistryPlugin } from './plugins/registry-plugin';

@Component({
  selector: 'la-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {
    this.initialize().then();
  }

  async initialize() {
    const preference = new Map();

    preference.set('DataSourcePane', {
      importPlugins: [],
      dataSourceTypes: [
        {
          type: 'fetch'
        }
      ]
    });
    await plugins.register(Inject);
    await plugins.register(RegistryPlugin);
    // @ts-ignore
    await plugins.register(UndoRedoPlugin);
    // @ts-ignore
    await plugins.register(SchemaPlugin);
    // @ts-ignore
    await plugins.register(DataSource);
    await plugins.register(SetterPlugin);
    await plugins.register(InitPlugin);
    // await plugins.register(CodeEditor);
    await plugins.register(ActionsPlugin);

    // setupHostEnvironment(project, '/js/vue.runtime.global.js');

    await init(
      this.container.nativeElement,
      {
        enableCondition: true,
        enableCanvasLock: true,
        supportVariableGlobally: true
        // simulatorUrl: ['/js/ngx-simulator-renderer.js', '/js/ngx-simulator-renderer.css']
      },
      preference
    );
  }

  test() {}
}
