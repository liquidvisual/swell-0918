Instructions (2023)
=============================

## Quickstart

```bash
git clone git@github.com:liquidvisual/swell-0918.git
npm run installs
npm run dev
```

## More commands
```bash
npm run build
npm run preview # spins up http-server on port:8888
npm run deploy # deploys to gh-pages
```

## IE11 Support Dropped
**grunt-babel** was previously being used in **Gruntfile.js** under `build` (approx line 635) to translate ES6 compatibility. This has now been dropped to simplify the build process. To restore IE11 support; uncomment babel from the build task.

## Dev Notes
* Stream urls are in this format: https://stream.n1.au.swellnet.com/surfcams/[location-name].stream/playlist.m3u8. If 404s are experienced, check the base url.
* Video posters (thumbnails) are following format: https://static.swellnet.com.au/images/surfcams/[location-name].jpg
* Video posters may not during dev due to https and cors, but should work on swellnet domain.

Make sure to map `localhost` to `swellnet.local` under hosts. To access over the local network, enter the machine IP address in the browser eg `http://192.168.1.66`.

## Problems?
Most issues arise with Ruby, Node and node-sass being out of date. Here are some things to try:

1. Delete **node_modules** and **package-lock.json** and `npm install` again.
2. Delete **Gemfile.lock**.
3. Go to [Jekyll's Github](https://github.com/jekyll/jekyll) and check latest version **eg. v4.3.2** then edit Jekyll to be the latest version in the Gemfile.
4. `bundle install`
5. Go to [node-sass' Github](https://github.com/sass/node-sass), check latest version then make the edit in **package.json**, proceed to `npm install`.

## Info

This repo is a heavily modified version of [Jekyllrb Yeoman generator](https://github.com/robwierzbowski/generator-jekyllrb).