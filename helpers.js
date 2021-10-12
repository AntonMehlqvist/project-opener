import { readdirSync } from 'fs';

export const getDirectories = source =>
readdirSync(source, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

export const trimProjectName = dirName => {
    const isAcProject = dirName.includes( 'dev.synot.io' );

    if ( isAcProject ) {
        const dirNameParts = dirName.split( '.' );
        dirNameParts.length = dirNameParts.length - 3;
        const newDirName = dirNameParts.join( '.' );

        return newDirName;
    }

    return dirName;
};