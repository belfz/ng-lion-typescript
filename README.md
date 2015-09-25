# ng-lion-TYPESCRIPT

A

- TypeScript (!!!)
- Angular 1.4
- UI-router
- Karma
- Gulp
- Browserify
- LESS
- Skeleton CSS

boilerplate.

## How to install?

First, you need tsd and gulp installed globally:
```
$ sudo npm i -g tsd
$ sudo npm i -g gulp
```

Then, run:
```
$ npm install
$ tsd install
```

And finally (it will run the tests!):
```
$ gulp build
```

or, to trigger the browserify + watchify without running the tests:
```
$ gulp :browserify
```