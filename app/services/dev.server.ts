import fs from 'fs';
import path from 'path';
import process from "process";

const root = process.cwd();
const basePath = `${root}/app/routes/dev`;

export interface FileObject {
    path: string;
    fileName: string;
};

export interface RouteData {
    fileObjects: FileObject[];
    // filePaths: string[];
}

export const getAllFiles = (folderPath: string = basePath, filePaths: string[] = []): string[] => {
    const files = fs.readdirSync(folderPath);
    const folders: string[] = [];

  files.forEach((file) => {
    const fullPath = path.join(folderPath, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
      folders.push(file);
      getAllFiles(fullPath, filePaths);
    } else {
      filePaths.push(file);
    };
  });

  filePaths = filePaths.filter((file) => {
    if (folders.find((f) => f.includes(file))) return false;
    return true;
  }).map((file) => file.substring(0, file.length - 4));

  return filePaths;
};

export function generateRoutes(): RouteData {
    const fileObjects: FileObject[] = [];
    const filePaths: string[] = getAllFiles();

    // fileObjects.push({ path: fullPath, fileName: file.substring(0, file.length - 4) });
    filePaths.forEach(filepath => {
        const fileIndex = filepath.lastIndexOf('/');
        const extIndex = filepath.lastIndexOf('.');
        const fileName = filepath.substring(fileIndex + 1, extIndex);
        fileObjects.push({ path: filepath, fileName });
    })
    const data: RouteData = {
        fileObjects,
        // filePaths,
      };

      console.log(JSON.stringify(data), null, 2);

      return data;
}

// Test the function:
// const files = getAllFiles();
// console.log(files);



/*




        (err, stats) => {
        if (stats.isDirectory()) {
            paths.push(route);
            return await verifyRoute()
        } else {
            routes.push(route)
        };
    })
    
    stat(pathsToCheck[i], (err, stats) => {
    console.log(stats.isDirectory());
    console.log(stats);
  });

  if (!route.includes(".tsx")) {
        // this is a folder, so save it in paths
        paths.push(route);
        const contents = fs.readdirSync(`${paths.join('/')}/${route}`);
    } else {
        // this is a file, so save it in routes
        routes.push(route);
    }

    
        if (verifiedRoute.isDirectory) {
            const subRoutes = fs.readdirSync(`${basePath}/${route}`);
            for await (let subRoute of subRoutes) {

            }
        }
        console.log(...devRoutes);
        return devRoutes;
  

export async function verifyRoutes(routes: string[]) {
        const routesArray: string[] = [];
        const pathsArray: string[] = [];

    for await (const route of routes) {
        const verifiedRoute = await verifyRoute(`${basePath}/${route}`);
        if (verifiedRoute.isDirectory) {
            pathsArray.push(route);
        }
    };
}

    export async function verifyRoute(route: string) {
        

        const routeStats = fs.statSync(route);
        if (routeStats.isDirectory()) {
            // paths.push(route);
            let routeData: RouteObj = {
                path: route,
                isDirectory: true,
                contents: fs.readdirSync(route)
            };
            return routeData;
        } else {
            // routes.push(route);
            let routeData: RouteObj = {
                path: route,
                isDirectory: false
            };
            return routeData;
        };
    }

    export const getDevRoutes = async () => {
        const devRoutes = fs.readdirSync(`${root}/app/routes/dev`);
*/