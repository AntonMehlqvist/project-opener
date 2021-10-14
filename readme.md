# alfred-project-selector [![Build Status](https://travis-ci.org/AntonMehlqvist/alfred-project-selector.svg?branch=master)](https://travis-ci.org/AntonMehlqvist/alfred-project-selector)

## What does this script do?

It lets you quickly select projects from your `~/projects/www` folder and open them in vscode.
The path to your projects folder can be configured to you liking by following the instructions under __Usage__.


## Install

```
$ npm install --global alfred-ac-project-selector
```

*Requires [Node.js](https://nodejs.org) 14+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Usage

*If your projects are not located in `~/projects/www` you can change the environment variable named `path` in `Alfred preferences->Workflows->project-selector->Configure workflow and variables(located in the top right of the workflow window)`*

In Alfred, type `<`, <kbd>Space</kbd>, and any string to filter by(optional) to see a list of your projects.
Navigate to the project you want to open and press <kbd>Enter</kbd> to launch your project in vscode.

### Modifiers
__The selected project can also be opened in iTerm and/or Finder both separately or alongside VSCode using the following modifiers while pressing <kbd>Enter</kbd>:__
* <kbd>⌘ CMD</kbd> = Open in VSCode & iTerm
* <kbd>⌘ CMD</kbd>+<kbd>⇧ Shift</kbd> = Open in only iTerm
* <kbd>⌥ OPTION</kbd> = Open in VSCode & Finder
* <kbd>⌥ OPTION</kbd>+<kbd>⇧ Shift</kbd> = Open in only Finder
* <kbd>⌥ OPTION</kbd>+<kbd>⌘ CMD</kbd> = Open in iTerm & Finder
* <kbd>⌥ OPTION</kbd>+<kbd>⌘ CMD</kbd>+<kbd>⇧ Shift</kbd> = Open in VSCode, iTerm & Finder

## Troubleshooting
Make sure that you have the `code` command installed to your path. To install the `code` command, reference the [official guide](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line).


## License

MIT © [Anton Mehlqvist](http://no-website)
