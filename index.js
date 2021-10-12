'use strict';
import alfy from 'alfy';
import os from 'os';
const homedir = os.homedir();

import { getDirectories, trimProjectName } from './helpers.js';

const filterArg = process.argv[ 2 ];

let directories = getDirectories( `${ homedir }/projects/www` );

if ( filterArg ) {
	directories = directories.filter( dirName => dirName.includes( filterArg ) );
}

alfy.output( directories.map( dirName => (
		{
			title: trimProjectName( dirName ),
			subtitle: 'Open folder in VSCode',
			arg: `${ homedir }/projects/www/${ dirName }`,
			icon: {
				type: "png",
				path: "./icon.png"
			}
		}
	)
) );
