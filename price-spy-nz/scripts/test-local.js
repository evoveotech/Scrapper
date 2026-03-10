/**
 * Local integration test - verifies key pages return 200
 * Run: node scripts/test-local.js
 * Ensure dev server is running on port 3000 first: npm run dev
 */

const http = require('http');

const BASE = 'http://localhost:3000';
const PORT = 3000;

const tests = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/help', name: 'Help' },
  { path: '/how-it-works', name: 'How it Works' },
  { path: '/privacy', name: 'Privacy' },
  { path: '/terms', name: 'Terms' },
  { path: '/cookies', name: 'Cookies' },
  { path: '/product/1', name: 'Product detail' },
  { path: '/category/computers', name: 'Category' },
  { path: '/search?q=samsung', name: 'Search' },
];

const expect404 = [
  { path: '/product/999', name: 'Invalid product (404)' },
  { path: '/category/invalid', name: 'Invalid category (404)' },
];

function fetch(path) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE);
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Testing PriceSpy NZ at', BASE);
  console.log('Ensure dev server is running: npm run dev\n');

  let passed = 0;
  let failed = 0;

  for (const { path, name } of tests) {
    try {
      const { status } = await fetch(path);
      if (status === 200) {
        console.log('✓', name, `(${path})`);
        passed++;
      } else {
        console.log('✗', name, `- got ${status} expected 200`);
        failed++;
      }
    } catch (err) {
      console.log('✗', name, `- ${err.message}`);
      failed++;
    }
  }

  for (const { path, name } of expect404) {
    try {
      const { status } = await fetch(path);
      if (status === 404) {
        console.log('✓', name);
        passed++;
      } else {
        console.log('✗', name, `- got ${status} expected 404`);
        failed++;
      }
    } catch (err) {
      console.log('✗', name, `- ${err.message}`);
      failed++;
    }
  }

  console.log('\n---');
  console.log(`Passed: ${passed}, Failed: ${failed}`);
  process.exit(failed > 0 ? 1 : 0);
}

run().catch((err) => {
  console.error('Test failed:', err.message);
  console.log('\nIs the dev server running? Try: cd price-spy-nz && npm run dev');
  process.exit(1);
});
