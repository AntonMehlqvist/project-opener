'use strict';
const alfy = require('alfy');
const homedir = require('os').homedir();

const { getDirectories, trimProjectName } = require( './helpers' );

const filterArg = process.argv.slice( 2 );

const directories = getDirectories( `${ homedir }/projects/www` )
	.filter( dirName => dirName.includes( filterArg ) );

alfy.output( directories.map( dirName => (
		{
			title: trimProjectName( dirName ),
			subtitle: 'Open folder in VSCode',
			arg: `${ homedir }/projects/www/${ dirName }`,
			icon: {
				type: "png",
				path: "./folder.png"
			}
		}
	)
) );
