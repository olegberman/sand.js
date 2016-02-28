'use strict';

(function() {

  var selector = 'sand.js';

  var getSandboxes = function() {
    var nodeList = document.querySelectorAll('script[type=' + selector + ']');
    return Array.prototype.slice.call(nodeList);
  };

  var createIframeWithBtoa = function(content) {
    var iframe = document.createElement('iframe');
    iframe.src = 'data:text/html;base64,' + btoa(content);
    return iframe;
  };

  var replaceWithFrames = function(sandboxes) {
    sandboxes.forEach(function(sandbox) {
      var iframe = createIframeWithBtoa(sandbox.innerHTML);
      sandbox.parentNode.replaceChild(iframe, sandbox);
    });
    return true;
  };

  document.addEventListener('DOMContentLoaded', function() {
    replaceWithFrames(getSandboxes());
  });


})();
