
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['b4HnBud8s2VdMv9ubviGRP'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  