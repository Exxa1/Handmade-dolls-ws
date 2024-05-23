// Finds how many doll pages are there
// reads their id
// looks at the folders in the public/img/dolls directory to find the image names
// returns the json where you get the list of image names based on the doll id

import fs from 'fs';
import path from 'path';
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {

    const docs = await serverQueryContent(event).where({_path: {$contains: '/products'}}).only(['title', '_path', 'id', 'price']).find()    

    // const productsWithLinks = docs.map(product => ({...product, link: ''}));

    for (const element of docs) {
        const publicDir = path.join(process.cwd(), `public/img/dolls/${element.id}`);
        const filenames = fs.readdirSync(publicDir);
        element.imgPaths = []
        for (const filename of filenames) {
            // puts out the following which might cause problems: \\img\\dolls\\id001\\Artboard 1.png
            element.imgPaths.push(path.join(`/img/dolls/${element.id}`, filename))
        }
    }


    // const filenames = fs.readdirSync(publicDir);

    return {
        productsAPI: docs
    }
})