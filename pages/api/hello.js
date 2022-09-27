// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require('fs');




export default function handler(req, res) {
  fs.writeFile('public/oneway.txt', new URL(req.url, "http:/" + req.headers.host).searchParams.get('code') , function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  res.status(200).json({ name: 'John Doe' })
}
