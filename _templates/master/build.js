const esbuild = require('esbuild');
const path = require('path');

const ROOT = __dirname;

const browserTransforms = [
  'button', 'badge', 'chip', 'avatar', 'skeleton',
  'input', 'controls', 'progress', 'alert', 'pagination',
  'toast', 'rating', 'navbar', 'tabs', 'sidebar-nav', 'breadcrumb', 'site-footer', 'accordion',
];

async function build() {
  // Browser: each transform as self-contained IIFE (bundles its own deps)
  await Promise.all(
    browserTransforms.map(name =>
      esbuild.build({
        entryPoints: [path.join(ROOT, `src/components/${name}/${name}.transform.ts`)],
        bundle: true,
        format: 'iife',
        platform: 'browser',
        outfile: path.join(ROOT, `components/${name}/${name}.transform.js`),
        logLevel: 'warning',
      })
    )
  );

  // Browser: icons bundle (sets window.SuperIcons)
  await esbuild.build({
    entryPoints: [path.join(ROOT, 'src/shared/icons.ts')],
    bundle: true,
    format: 'iife',
    platform: 'browser',
    outfile: path.join(ROOT, 'shared/icons.js'),
    logLevel: 'warning',
  });

  // Node: compiler as CJS bundle
  await esbuild.build({
    entryPoints: [path.join(ROOT, 'src/compiler/compile.ts')],
    bundle: true,
    format: 'cjs',
    platform: 'node',
    outfile: path.join(ROOT, 'compiler/compile.js'),
    logLevel: 'warning',
  });

  console.log('Build complete.');
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
