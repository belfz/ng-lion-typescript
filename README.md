# ng-lion-TYPESCRIPT

A fork of angular boilerplate repository called [ng-lion](https://github.com/belfz/ng-lion), this time written in TypeScript.

Features:
- TypeScript (!!!)
- Angular 1.4
- UI-router
- Karma
- Gulp
- Browserify
- LESS
- Skeleton CSS

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

## Credits
Written in Visual Studio Code, which I highly recommend ;-)