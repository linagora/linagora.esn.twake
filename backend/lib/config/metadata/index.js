module.exports = dependencies => ({
  configurations: {
    applicationUrl: require('./applicationUrl')(dependencies)
  }
});
