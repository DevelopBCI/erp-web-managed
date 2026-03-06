/**
 * build.mjs — Cross-platform production build script
 * Works on Mac, Linux, and Windows
 */
import { execSync } from 'child_process';
import { copyFileSync } from 'fs';

function run(cmd) {
  console.log(`\n▶ ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

try {
  // 1. Next.js build
  console.log('🔨 Building Next.js...');
  run('next build');

  // 2. Copy .htaccess
  console.log('\n📦 Copying .htaccess...');
  copyFileSync('.htaccess', 'out/.htaccess');

  console.log('\n✅ Build complete! Output in ./out');
} catch (err) {
  console.error('\n❌ Build failed:', err.message);
  process.exit(1);
}
