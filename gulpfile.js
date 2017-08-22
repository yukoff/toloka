'use strict';

const gulp = require('gulp'),
      defaults = require('defaults'),
      path = require('path'),
      fs = require('fs'),
      less = require('gulp-less'),
      uglify = require('gulp-uglify'),
      uglifycss = require('gulp-uglifycss'),
      consolidate = require('gulp-consolidate'),
      fontBlast = require('gulp-font-blast'),
      iconfont = require('gulp-iconfont');

const requiredIcons = ['magnet', 'empty.star', 'thumbs.up', 'download'];

/**
 * Font settings
 */
const fontName = 'iconfont'; // set name of symbol font
const className = 's';       // set CSS class name
const template = 'iconfont';

const cssPath = path.join(__dirname, 'src', 'css');
const lessPath = path.join(__dirname, 'src', 'less');
const jsPath = path.join(__dirname, 'src', 'js');
const semanticUiPath = path.join(__dirname, 'node_modules', 'semantic-ui-less');
const semanticThemePath = path.join(semanticUiPath, 'themes', 'default');
const iconFontPath = path.join(semanticThemePath, 'assets', 'fonts');

/**
 * Recommended to get consistent builds when watching files
 * See https://github.com/nfroidure/gulp-iconfont
 */
const timestamp = Math.round(Date.now() / 1000)

/**
 * This is needed for mapping glyphs and codepoints.
 */
function mapGlyphs (glyph) {
	console.log(glyph);
  return {name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0)};
}

/**
 * Gulp tasks
 */
gulp.task('iconfont', function () {
  var iconsConfig = `${semanticThemePath}/elements/icon.overrides`;
  // FIXME: better var name
  var svgFontContent = fs.readFileSync(iconsConfig, 'utf-8');
  // i.icon.search:before { content: "\f002"; }
  var definitions = svgFontContent.match(/i\.icon\.(.*?):[\s\S]+?content.*?['"].*?['"]/g),
      convertFilenames = {};

  definitions.forEach(function (line) {
      var charName = line.match(/i\.icon\.(.*?):/)[1],
          charCode = line.match(/content.*?['"](.*?)['"]/)[1];
      convertFilenames[charCode.replace('\\', '')] = charName;
  });

  var iconfontConfig = {
    className,
    fontHeight: 1001,
    fontDate: new Date().getTime(),
    fontName,
    fontPath: '../fonts/',
    formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
    normalize: true,
    timestamp,
    //appendCodepoints: true,
    //appendUnicode: false,
    //centerHorizontally: true
  };

  return gulp.src(`${iconFontPath}/*.svg`)
    .pipe(fontBlast({filenames: convertFilenames, icons: requiredIcons}))
    .pipe(iconfont(iconfontConfig))
    .on('glyphs', (glyphs, opt) => {
      opt = opt || {};

      const options = defaults(opt, {
          glyphs: glyphs.map(mapGlyphs)
      });

      console.log(glyphs, options);

      gulp.src(`src/css/${template}.css`)
        .pipe(consolidate('underscore', options))
        .pipe(gulp.dest('public/fonts'));

      /*gulp.src('src/html/${template}.html')
        .pipe(consolidate('underscore', options))
        .pipe(gulp.dest('iconfont'));*/
    })
    .pipe(gulp.dest('public/fonts'));
});

/**
 * build and minify css
 */
gulp.task('less', function () {
    return gulp.src('./src/less/**/*.less')
        .pipe(less({
            paths: [ semanticUiPath ]
        }))
        //.pipe(/* gulpif(env === 'prod', uglifycss()) */ uglifycss())
        .pipe(gulp.dest('./public/css'));
});

/**
 * build and minify js
 */
// TODO
