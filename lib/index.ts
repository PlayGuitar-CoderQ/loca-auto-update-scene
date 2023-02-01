import fetch from 'node-fetch';

const getScene = async () => {
  const response = await fetch("https://hub.realibox.com/api/hub/v1/studio/scenes/publish/2371408606185652314");
  const res = await response.json();
  return res
}

getScene();