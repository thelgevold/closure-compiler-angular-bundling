This is version of the Closure fork with a highly modifed version of the original flat ESM Angular bundles.

```
++ ls -alH dist/bundle.js dist/bundle.js.brotli dist/bundle.js.gz dist/bundle.js.map
-rw-r--r--  1 tor  staff   47487 Mar 26 13:58 dist/bundle.js
-rw-r--r--  1 tor  staff   13979 Mar 26 13:58 dist/bundle.js.brotli
-rw-r--r--  1 tor  staff   15482 Mar 26 13:58 dist/bundle.js.gz
-rw-r--r--  1 tor  staff  133888 Mar 26 13:58 dist/bundle.js.map
++ for script in dist/bundle.js node_modules/zone.js/dist/zone.min.js
++ gzip --keep -f node_modules/zone.js/dist/zone.min.js
++ bro --force --quality 10 --input node_modules/zone.js/dist/zone.min.js --output node_modules/zone.js/dist/zone.min.js.brotli
++ ls -alH node_modules/zone.js/dist/zone.min.js node_modules/zone.js/dist/zone.min.js.brotli node_modules/zone.js/dist/zone.min.js.gz
-rw-r--r--  1 tor  staff  29634 Mar 25 11:00 node_modules/zone.js/dist/zone.min.js
-rw-------  1 tor  staff   8759 Mar 26 13:58 node_modules/zone.js/dist/zone.min.js.brotli
-rw-r--r--  1 tor  staff   9516 Mar 25 11:00 node_modules/zone.js/dist/zone.min.js.gz
```

See https://github.com/angular/angular/issues/8550 for more context.

# Try it

``` shell
$ yarn install
$ yarn run build
$ python -m SimpleHTTPServer
```

## Where does the size come from?

``` shell
$ npm run explore
```

# Notes

This requires an ES6 distro of Angular. These snapshots are published on green Angular
builds, see the locations in `package.json` where these come from.

Requires Node 6.x since the `ngc` tool (and its deps) are now shipped as ES6 as well.

## RxJS distros
Angular depends on RxJS and the size of the bundle depends on how well we can tree-shake Rx operators.

The above measurement uses an ES6 build of RxJS. See `vendor/tsconfig.rxjs-es6.json` in this
repo. However, RxJS has no such public distro.

Another option is to build RxJS as ES5+esm. See `vendor/tsconfig.rxjs-es5+esm.json` in this
repo, and change the `postinstall` line in package.json to switch.

Yet another option is to build with ES6 and `@angular/tsc-wrapped` which does some extra
closure output using the tsickle package.

The application size seems about the same regardless of which option is used.

## TODO
- Need rxjs to produce a closure-compatible ES6 distro, don't use my branch.
  See https://github.com/ReactiveX/rxjs/issues/2335
- Remove the hack of needing node_modules/rxjs for nodejs and vendor/rxjs for browser
- Extend the demo to use a 3rd party component, like @angular/material
