// server/middleware/readFiles.js
import fs from 'fs';
import path from 'path';


export default defineEventHandler((event) => {
    const id = getRouterParam(event, 'id')
    // console.log(`The ID is ${id}`);

    const publicDir = path.join(process.cwd(), `public/img/dolls/${id}`);
    const filenames = fs.readdirSync(publicDir);

    

    const filePaths = []

    for (const filename of filenames) {
        filePaths.push(path.join(`/img/dolls/${id}`, filename))
    }


    // console.log(filePaths);
    
    return {
        imgPaths: filePaths
    }
  })