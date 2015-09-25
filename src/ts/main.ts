/// <reference path="../../typings/tsd.d.ts" />
require('angular');
require('./lion/lion.module');

var ehe = 'be'

angular.element(document).ready(function () {
	angular.bootstrap(document, ['lion']);
});

module.exports = angular.module('lion');