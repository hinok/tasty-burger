module.exports = function (casper, scenario, vp) {
  casper.evaluate(function () {
    var clickAll = function(selector) {
        var elements = Array.prototype.slice.call(document.querySelectorAll(selector));

        elements.forEach(function(el) {
          el.click();
        });
      };

      clickAll('.tb');
  });

  casper.wait(500);

  console.log('onReady.js has run for: ', vp.name);
};
