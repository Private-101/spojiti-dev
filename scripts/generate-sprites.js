// import * as fs from "fs";
// import * as path from "path";

const fs = require('node:fs');
const path = require('node:path');
const svgstore = require('svgstore');


const ICONS_DIR = `${process.cwd()}/icons`;
const SPRITES_FILE = `app/components/sprites.svg`;

if (fs.existsSync(SPRITES_FILE)) {
	console.log('sprites file found. removing now...')
	fs.rmSync(SPRITES_FILE);
	console.log('removal complete');
}

console.log(`icons directory found at ${ICONS_DIR}`);

const sprites = svgstore({renameDefs: true});

fs.readdirSync(ICONS_DIR).forEach((file) => {
	
	if (file.endsWith(".svg")) {
		console.log(`Found svg file: ${file}`);
		console.log('adding to sprites...');
		sprites.add(
			file.replace(/\.svg$/, ""),
			fs.readFileSync(path.join(ICONS_DIR, file), "utf8")
		);
	}
});

console.log(`creating sprites file at ${SPRITES_FILE}`);
fs.writeFileSync(SPRITES_FILE, sprites);