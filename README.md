# WinbondNg7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## 建立離線的 npm 套件壓縮檔

1. 安裝 [Node.js](https://nodejs.org/en/) 執行環境 (請安裝 **LTS** 版本)

2. 開啟 PowerShell 命令提示字元

3. 設定快取資料夾變數

   ```ps1
   $CACHE_DIR="G:\npm-cache"
   ```

4. 依照以下步驟建立所有 Angular CLI 所需的 npm 套件快取：

   ```ps1
   npm install --global @angular/cli --online --cache=$CACHE_DIR

   ng new demo1-offline --routing --style css --skip-install --skip-git
   cd demo1-offline

   npm install --online --cache=$CACHE_DIR
   npm install --online --cache=$CACHE_DIR -D @types/jquery

   Compress-Archive -Path $CACHE_DIR\* -DestinationPath "npm-cache.zip"
   ```

5. 將 `npm-cache.zip` 複製給所有學員

## 離線安裝 Node.js 與 Angular CLI 工具

1. 開啟 PowerShell 命令提示字元

2. 設定環境變數

   ```ps1
   $NODE_PATH="C:\nodejs"
   ```

3. 下載 Node.js 安裝檔

   如果電腦為 64-bit (x64) 架構：

   ```ps1
   $ProgressPreference = 'SilentlyContinue'
   [Net.ServicePointManager]::SecurityProtocol = "tls12, tls11"
   Invoke-WebRequest -OutFile node.zip https://nodejs.org/dist/v10.15.3/node-v10.15.3-win-x64.zip
   ```

   如果電腦為 32-bit (x86) 架構：

   ```ps1
   $ProgressPreference = 'SilentlyContinue'
   [Net.ServicePointManager]::SecurityProtocol = "tls12, tls11"
   Invoke-WebRequest -OutFile node.zip https://nodejs.org/dist/v10.15.3/node-v10.15.3-win-x86.zip
   ```

4. 解壓縮 `node.zip` 到指定目錄

   ```ps1
   Expand-Archive .\node.zip -DestinationPath $env:TEMP -Force
   Copy-Item -Path $env:TEMP\node-*\ $NODE_PATH -Recurse
   Remove-Item $env:TEMP\node-* -Recurse
   [Environment]::SetEnvironmentVariable("PATH", $NODE_PATH + ";" + $env:Path, "User")
   $env:Path = $NODE_PATH + ";" + $env:Path
   node -v
   ```

5. 下載或取得 `npm-cache.zip` 壓縮檔 ([Offline installation for Angular CLI v7.3.8](https://github.com/coolrare/winbond-ng7/releases/tag/v1.0))

   ```ps1
   Invoke-WebRequest -OutFile npm-cache.zip https://github.com/coolrare/winbond-ng7/releases/download/v1.0/npm-cache.zip
   ```

6. 設定使用離線 npm 套件位址

   ```ps1
   Expand-Archive .\npm-cache.zip -DestinationPath "$NODE_PATH\npm-cache" -Force
   npm config set prefer-offline true
   npm config set cache "$NODE_PATH\npm-cache".Replace("\", "\\")
   ```

7. 安裝 Angular CLI 工具 (離線安裝)

   ```ps1
   npm install -g @angular/cli --offline
   ```

## 建立 Angular 專案範本

- 簡易命令 (使用以下命令安裝即可)

  ```ps1
  ng new demo1 --routing --style css --skip-git
  cd demo1
  ng serve --open
  ```

- 完整命令 (如果上述命令有問題發生才用以下命令安裝)

  ```ps1
  ng new demo1 --routing --style css --skip-git --skip-install
  cd demo1
  npm install --offline
  ng serve --open
  ```

## 改用線上模式進行 npm 安裝

- 刪除 npm 快取設定即可

  ```sh
  npm config delete prefer-offline
  npm config delete cache
  ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
