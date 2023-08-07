import {injectAssets} from '@alilc/lowcode-plugin-inject';
import {IPublicModelPluginContext} from '@alilc/lowcode-types';
import assets from '../../../../assets/assets.json';
import originSchema from '../../../../assets/schema.json';
import {getProjectSchemaToLocalStorage} from '../utils';

export const InitPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      const {material, project} = ctx;
      const loadedAssets = await injectAssets(assets);
      material.setAssets(loadedAssets);

      const projectSchema = getProjectSchemaToLocalStorage();
      const schema = projectSchema ? projectSchema['componentsTree'].pop() : originSchema;

      project.onSimulatorRendererReady(() => {
        project.openDocument(schema);
      });
    }
  };
};

InitPlugin.pluginName = 'editorInit';
