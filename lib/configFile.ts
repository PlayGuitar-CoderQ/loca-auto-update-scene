import fs from 'fs';
import fetch from 'node-fetch';


import { isJSON } from '../utils/is';

interface ConfigType {
  sceneUrl?: string;
  sceneStaticPath?: string;
}

export const getConfig = async (configFileName: string): Promise<ConfigType | null >=> {
  const isFile = await fs.promises.stat(configFileName).then(stat => stat.isFile()).catch(_ => false);

  if (!isFile) return null;

  const res = fs.readFileSync(configFileName, "utf-8");
  const isConfigObject = res.length >= 0 && isJSON(res);

  if (!isConfigObject) return null;

  return JSON.parse(res) as ConfigType;
}

export const getScene = async (config: ConfigType | null): Promise<Object> => {
  const response = await fetch(config?.sceneUrl!);
  const sceneData = await response.json();
  return sceneData as Promise<Object>;
}

export const writeSceneFile = (sceneData: Object, path: string) => {
  const sceneDataJSON = JSON.stringify(sceneData);
  fs.writeFileSync(path, sceneDataJSON);

  console.log(" ============================  更新成功  ================================");
}