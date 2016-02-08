var randomGenerator = require('../index'),
    assert = require('assert');

(function () {
    var i;
    it('should be a number that is  >= 0 and < 1', function () {
        for (i = 0; i < 1000; i++) {
    	      var randomValue = randomGenerator();
            assert.equal(typeof randomValue, 'number', 'not a number');
    	      assert(randomValue >= 0, randomValue + ' is not >= 0');
    	      assert(randomValue < 1, randomValue + ' is not < 1');
        }
	  });
    it('should be a number that is  >= min and < max', function () {
        function test (min, max) {
            for (i = 0; i < 1000; i++) {
        	      var randomValue = randomGenerator.range(min, max);
                assert.equal(typeof randomValue, 'number', 'not a number');
        	      assert(randomValue >= min, randomValue + ' is not >= ' + min);
        	      assert(randomValue < max, randomValue + ' is not < ' + max);
            }
        }
        for (i = 0; i < 100; i++) {
            var min = Math.random() * 100;
            var max = min + Math.random() * 100;
            test(min, max);
        }
	  });
}());
