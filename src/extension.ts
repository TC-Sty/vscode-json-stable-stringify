import * as vscode from 'vscode';
import { formatTextEditorCommand } from './formatTextEditorCommand';

export function activate(context: vscode.ExtensionContext) {
  // tslint:disable-next-line:no-console
  console.info('[vscode-json5-stable-stringify] activated!');
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.vscode-json5-stable-stringify.jsonStableSort', formatTextEditorCommand));
}

// tslint:disable-next-line:no-empty
export function deactivate() {}
