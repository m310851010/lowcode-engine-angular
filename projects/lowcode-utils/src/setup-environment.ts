import type { IPublicApiProject } from '@alilc/lowcode-types';
import { AssetType } from '@alilc/lowcode-types/es/assets';
import { assetItem } from './asset';

export function setupHostEnvironment(
  project: IPublicApiProject,
  vueRuntimeUrl: string
): void {
  project.onSimulatorHostReady((host) => {
    host.set('environment', [
      assetItem(
        AssetType.JSText,
        'window.__is_simulator_env__=true;'
      ),
      assetItem(AssetType.JSUrl, vueRuntimeUrl, undefined, 'angular'),
    ]);
  });
}
