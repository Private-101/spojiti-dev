/*
Prompt:
provide js code that reads all files and folders in a specific directory and generates a sitemap.xml page following http://www.sitemaps.org/schemas/sitemap schema

Response:
Sure! Here's an example JavaScript code snippet that reads all files and folders in a specific directory and generates a `sitemap.xml` page following the XML schema specified by http://www.sitemaps.org/schemas/sitemap:

Make sure to replace `'/path/to/your/directory'` with the actual directory path you want to generate the sitemap for, and `'https://www.example.com'` with your base URL.

This code reads all files and folders in the specified directory and generates a `sitemap.xml` file using the specified directory structure as the URLs in the sitemap. Each URL is accompanied by the `<lastmod>` element, which represents the last modified date of the file or directory.

After executing the code, it will generate a `sitemap.xml` file in the same directory, following the http://www.sitemaps.org/schemas/sitemap schema.

Please note that this example assumes a synchronous file system operation for simplicity. In case you have a large directory or require asynchronous operations, consider using asynchronous functions or libraries like `fs/promises` or `readdirp`.
*/

const fs = require('fs');
const path = require('path');
const process = require('process');

const cwd = process.cwd(); // The process.cwd() method returns the current working directory of the Node.js process.
const directoryPath = `${cwd}/app/routes`; // desired directory path
const sitemapFilePath = path.join(cwd, 'scripts', 'sitemap.xml');

function generateSitemapXml(directoryPath) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Generate sitemap entry for the directory
      xml += generateSitemapEntry(file + '/');
    } else {
      // Generate sitemap entry for the file
      xml += generateSitemapEntry(file);
    }
  });

  xml += '</urlset>';

  return xml;
}

function generateSitemapEntry(path) {
  const baseUrl = 'https://www.spojiti.com'; // base URL
  const lastModified = new Date().toISOString().split('T')[0];

  let entry = '  <url>\n';
  entry += `    <loc>${baseUrl}/${path}</loc>\n`;
  entry += `    <lastmod>${lastModified}</lastmod>\n`;
  entry += '  </url>\n';

  return entry;
}

/*
It's worth noting that while fs.rmSync provides more flexibility for file and directory removal operations, fs.unlinkSync remains a valid and widely used method specifically for file deletion.

When choosing between fs.rmSync and fs.unlinkSync, consider the version of Node.js you are using and the specific requirements of your use case. If you are working with older versions of Node.js or need to delete only files, fs.unlinkSync is sufficient. However, if you are using Node.js 15.5.0 or above and require the ability to delete both files and directories or have more control over the deletion process, fs.rmSync is the recommended choice.
*/

function main() {
    console.log('generating sitemap.xml...');

    if (fs.existsSync(`${cwd}/public/sitemap.xml`)) {
        console.log('Existing sitemap.xml file found!');
        fs.unlinkSync(`${cwd}/public/sitemap.xml`);
        // fs.rmSync(`${cwd}/public/sitemap.xml`);
        console.log('Existing sitemap.xml file deleted.');
      }
    
    const sitemapXml = generateSitemapXml(directoryPath);
    fs.writeFileSync(`${cwd}/public/sitemap.xml`, sitemapXml);
    console.log('sitemap.xml file generated successfully.');
};

main();