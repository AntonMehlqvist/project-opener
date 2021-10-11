'use strict';
const alfy = require('alfy');
const { readdirSync } = require('fs')
const homedir = require('os').homedir();

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
	
const directories = getDirectories( `${ homedir }/Projects` );

alfy.output( directories.map( dir => (
		{
			title: dir,
			subtitle: 'Open folder in VSCode',
			arg: `${ homedir }/Projects/${ dir }`
		}
	)
) );
	