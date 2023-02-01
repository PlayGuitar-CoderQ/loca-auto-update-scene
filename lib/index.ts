
import { isNull } from '../utils/is';
import { getConfig, getScene, writeSceneFile } from './configFile';

const CONFIG_FILE_NAME = 'laus.config.json';

const updateLocalScene = async () => {
  const config = await getConfig(CONFIG_FILE_NAME);
  const isNotUpdate = !config?.sceneStaticPath && config?.sceneUrl;
  
  if (isNotUpdate || isNull(config)) return;

  const sceneData = await getScene(config);

  writeSceneFile(sceneData, config?.sceneStaticPath!);
}

updateLocalScene();