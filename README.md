<div align="center"> 
  <img alt="guitar" width="100" src="https://github.com/PlayGuitar-CoderQ-Sub/img-bed/blob/master/uPic/updated.png?raw=true">
  <br> <br>

  <h1> 🔭 - Local - Auto - Update - Scene 🔎 </h1>
</div>
 <br> 

# 当前脚本用于解决内部方便替换新的本地场景数据 🚀

<br />

# 👨‍💻 用法

<br />

## 安装

 ```shell 
 # 安装包 local-auto-update-scene
 pnpm install local-auto-update-scene
 ```
 <br />

## 准备配置

在项目的根目录位置建立一个 laus.config.json 文件，并且在文件内写入对应的参数

```json 
{
  "sceneUrl": "",
  "sceneStaticPath": ""
}
```
- sceneUrl：我们的请求场景的 url 。
- sceneStaticPath：是我们要在项目里面引入的本地场景数据文件地址。

<br />

## 构建

在和构建的命令行前面写入 laus 也是就是我们执行更新场景数据的命令。例如：

```shell
"build": "laus && pnpm build"
```

然后在服务器构建的时候就会自动更新我们本地的场景数据了。

<br />

# 注意 🌟 

如果在本地单独执行 laus 的话会可能触发一个 commit。需要记得提交
