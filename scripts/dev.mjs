import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
execFileSync(process.execPath,['scripts/build.mjs'],{stdio:'inherit'});
const root=path.resolve('dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp'};
const server=http.createServer(async(req,res)=>{try{let p=decodeURIComponent(req.url.split('?')[0]);if(p.endsWith('/'))p+='index.html';let file=path.resolve(root,'.'+p);if(!file.startsWith(root))throw new Error('bad');let data=await fs.readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data)}catch{res.writeHead(404);res.end('Not found')}});
server.listen(3000,'0.0.0.0',()=>console.log('Cosmo School prototype → http://localhost:3000'));
