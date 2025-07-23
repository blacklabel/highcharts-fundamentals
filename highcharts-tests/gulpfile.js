/*
 * Copyright (C) Highsoft AS
 */

/* eslint quote-props: 0 */

'use strict';

const Gulp = require('gulp');
const GulpForwardReference = require('undertaker-forward-reference');

Gulp.registry(new GulpForwardReference());

/* *
 *
 *  Gulp Tasks
 *
 * */

(function (tasks) {
    tasks.forEach(
        gulpTask => require('./tools/gulptasks/' + gulpTask)
    );
}([
    'default',
    'scripts',
    'scripts-watch',
    'test',
    'test-tree',
    'test-ts'
]));

/* *
 *
 *  Gulp Task Aliases
 *
 * */

(function (tasks) {
    Object
        .keys(tasks)
        .forEach(alias => Gulp.task(alias, Gulp.series(tasks[alias])));
}({
    
}));
