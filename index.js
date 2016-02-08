var randomGenerator = function () {
    return Math.random();
};

randomGenerator.range = function (min, max) {
    return (Math.random() * (max - min) + min);
};

if (module) {
    module.exports = randomGenerator;
}
