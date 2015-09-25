/// <reference path="../../typings/tsd.d.ts" />
require('angular');
require('./lion/lion.module');

angular.element(document).ready(function () {
	angular.bootstrap(document, ['lion']);
});