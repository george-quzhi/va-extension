// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
var va = require("va");
var path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "va-extension" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable_akita = vscode.commands.registerCommand('extension.akita', (param) => {
    try {
      vscode.window.showInputBox(
        { 
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称，以驼峰形式，如：userInfo',
          prompt: '文件名会以-分割单词'
        }).then(function (name) {
          if (name && name.length > 0) {
            va.generate('akita', param.path, name);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });

  let disposable_component = vscode.commands.registerCommand('extension.component', (param) => {
    try {
      vscode.window.showInputBox(
        { 
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称，以驼峰形式，如：userInfo',
          prompt: '文件名会以-分割单词'
        }).then((name) => {
          if (name && name.length > 0) {
            vscode.window.showQuickPick(['创建同名目录', '直接生成文件']).then((selected)=> {
              let createForder = false;
              if (selected === '创建同名目录') {
                createForder = true;
              }
              va.generate('component', param.path, name, createForder);
              vscode.window.showInformationMessage('generate done!');
            });
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });

  let disposable_controller = vscode.commands.registerCommand('extension.controller', (param) => {
    try {
      vscode.window.showInputBox(
        { 
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称，以驼峰形式，如：userInfo',
          prompt: '文件名会以-分割单词'
        }).then((name) => {
          if (name && name.length > 0) {
            va.generate('controller', param.path, name);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });

  let disposable_dto = vscode.commands.registerCommand('extension.dto', (param) => {
    try {
      vscode.window.showInputBox(
        { 
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称，以驼峰形式，如：userInfo',
          prompt: '文件名会以-分割单词'
        }).then((name) => {
          if (name && name.length > 0) {
            va.generate('dto', param.path, name);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });

  let disposable_service = vscode.commands.registerCommand('extension.service', (param) => {
    try {
      vscode.window.showInputBox(
        { 
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称，以驼峰形式，如：userInfo',
          prompt: '文件名会以-分割单词'
        }).then((name) => {
          if (name && name.length > 0) {
            va.generate('service', param.path, name);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });

  let disposable_db_service = vscode.commands.registerCommand('extension.db-service', (param) => {
    try {
      vscode.window.showInputBox(
        { 
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称，以驼峰形式，如：userInfo',
          prompt: '文件名会以-分割单词'
        }).then((name) => {
          if (name && name.length > 0) {
            va.generate('db-service', param.path, name);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });

  let disposable_db_model = vscode.commands.registerCommand('extension.db-model', (param) => {
    try {
      vscode.window.showInputBox(
        { 
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称，以驼峰形式，如：userInfo',
          prompt: '文件名会以-分割单词'
        }).then((name) => {
          if (name && name.length > 0) {
            va.generate('db-model', param.path, name);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });

  let disposable_module = vscode.commands.registerCommand('extension.module', (param) => {
    try {
      vscode.window.showInputBox(
        { 
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称，以驼峰形式，如：userInfo',
          prompt: '文件名会以-分割单词'
        }).then((name) => {
          if (name && name.length > 0) {
            va.generate('component', path.join(param.path, 'pages'), name, true);
            va.generate('akita', param.path, name);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });

  let disposable_function = vscode.commands.registerCommand('extension.function', (param) => {
    try {
      vscode.window.showInputBox(
        { 
          password: false,
          ignoreFocusOut: true,
          placeHolder: '请输入模块名称，以驼峰形式，如：userInfo',
          prompt: '文件名会以-分割单词'
        }).then((name) => {
          if (name && name.length > 0) {
            va.generate('controller',path.join(param.path, 'api'), name);
            va.generate('dto', path.join(param.path, 'request-dto'), name);
            va.generate('service', path.join(param.path, 'services'), name);
            va.generate('db-service', path.join(param.path, 'services', 'db-service'), name);
            va.generate('db-model', path.join(param.path, 'models'), name);
            vscode.window.showInformationMessage('generate done!');
          }
        });
    } catch (e) {
      vscode.window.showInformationMessage('generate error!');
    }
  });

  context.subscriptions.push(disposable_akita);
  context.subscriptions.push(disposable_component);
  context.subscriptions.push(disposable_controller);
  context.subscriptions.push(disposable_dto);
  context.subscriptions.push(disposable_service);
  context.subscriptions.push(disposable_db_service);
  context.subscriptions.push(disposable_db_model);
  context.subscriptions.push(disposable_module);
  context.subscriptions.push(disposable_function);
}

// this method is called when your extension is deactivated
export function deactivate() { }
