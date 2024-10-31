
SystemJS.config({
  baseURL: 'https://unpkg.com/',
  defaultExtension: true,
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@17.0.1/umd/react.development.js',
    'react-dom': 'react-dom@17.0.1/umd/react-dom.development.js',
    'prop-types': 'prop-types@15.6/prop-types.js',
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./app.js')
  .catch(console.error.bind(console));
