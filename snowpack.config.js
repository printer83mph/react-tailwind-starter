// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "src": "/dist",
    "public": "/"
  },
  plugins: [
    ["@snowpack/plugin-babel",
      {
        transformOptions: {
          presets: [
            "@babel/preset-react",
            "@babel/preset-typescript",
            "@babel/preset-env"
          ]
        }
      }
    ],
    ["@snowpack/plugin-postcss",
      {
        config: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {}
          }
        }
      }
    ],
	  "@snowpack/plugin-react-refresh",
    ["@snowpack/plugin-webpack"]
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
    open: 'none'
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    }
  ],
  buildOptions: {
    /* ... */
  },
};
