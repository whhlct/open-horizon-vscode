// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "openhorizon" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('openhorizon.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from OpenHorizon!');
	});
	// The command has been defined in the package.json file
	let printTime = vscode.commands.registerCommand('openhorizon.printTime', () => {
		const currentTime = new Date();
		let config = vscode.workspace.getConfiguration();
		// let localeTime:boolean = config.get('printLocaleTime');
		
		if (config.get('openhorizon.printLocaleTime') == true) {
			vscode.window.showInformationMessage(currentTime.toLocaleTimeString());
		} else {
			vscode.window.showInformationMessage(currentTime.toTimeString());
		}
		// vscode.window.showInformationMessage();
		// vscode.window.showInformationMessage(currentTime.toTimeString());
	})
	context.subscriptions.push(disposable);
	context.subscriptions.push(printTime);
}

// This method is called when your extension is deactivated
export function deactivate() {}
