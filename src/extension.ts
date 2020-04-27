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
  let disposable_va = vscode.commands.registerCommand('extension.akita', (param) => {
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

  context.subscriptions.push(disposable_va);
}

// this method is called when your extension is deactivated
export function deactivate() { }
