'use strict';

angular.module('elyresumeApp')
  .controller('ParticleRingCtrl', function ($scope) {
    this.rings = [];
    this.rings.length = 12;
    this.spokes = [];
    this.spokes.length = 12;
  });
