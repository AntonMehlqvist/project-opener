'use strict';
import alfy from 'alfy';
import os from 'os';
import { readdirSync } from 'fs';

const homedir = os.homedir();

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

function getDirectories( source ) {
	return readdirSync( source, { withFileTypes: true } )
		.filter( dirent => dirent.isDirectory() )
		.map( dirent => dirent.name );
}

function trimProjectName( dirName ) {
    const isAcProject = dirName.includes( 'dev.synot.io' );

    if ( isAcProject ) {
        const dirNameParts = dirName.split( '.' );
        dirNameParts.length = dirNameParts.length - 3;
        const newDirName = dirNameParts.join( '.' );

        return newDirName;
    }

    return dirName;
};
