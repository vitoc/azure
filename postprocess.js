import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.11/mod.ts' 

const filename = Deno.args[0] // Same name as downloaded_filename `const filename = 'btc-price.json';`
const json = await readJSON(filename)
console.log(json)

const readings = json.items[0].readings;

const newFilename = `temperature-processed.json`;
await writeJSON(newFilename, readings);
console.log("Wrote a post process file");