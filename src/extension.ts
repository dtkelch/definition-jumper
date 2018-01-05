'use strict';
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
    const jumpTo = vscode.commands.registerCommand('extension.jumpTo', () => {
        vscode.commands.executeCommand('editor.action.goToDeclaration')
   });
    const jumpBack = vscode.commands.registerCommand('extension.jumpBack', () => {
        vscode.commands.executeCommand('workbench.action.navigateBack')
   });
    context.subscriptions.push(jumpTo, jumpBack);
}

export function deactivate() {
}