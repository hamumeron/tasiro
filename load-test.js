// load-test.js
const http = require('http'); // httpsにも対応可能
const target = 'http://localhost:3000';
const concurrency = 50;
const interval = 100; // ms

function send() {
  http.get(target, res => {});
}

setInterval(() => {
  for (let i = 0; i < concurrency; i++) send();
}, interval);
