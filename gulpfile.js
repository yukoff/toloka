const gulp = require('gulp'),
      path = require('path'),
      fs = require('fs'),
      less = require('gulp-less'),
      uglify = require('gulp-uglify'),
      uglifycss = require('gulp-uglifycss'),
      consolidate = require('gulp-consolidate'),
      iconfont = require('gulp-iconfont'),
      fontBlast = require('font-blast'),
      tmp = require('tmp');

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

gulp.task('iconfont', function () {
   return gulp.src(`${iconFontPath}/*.svg`)
        .pipe(iconfont({
            fontName,
            formats: ['eot', 'svg'],
            timestamp,
            fontHeight: 1001,
            normalize: true,
            //appendCodepoints: true,
            //appendUnicode: false,
            //centerHorizontally: true
        }))
        .on('glyphs', /*function (glyphs, options) {*/ (glyphs) => {
            const options = {
                className,
                fontName,
                //fontPath: '../fonts/', // set path to font (from your CSS file if relative)
                fontDate: new Date().getTime(),
                glyphs: glyphs.map(mapGlyphs)
            }
            console.log(glyphs, options);
            gulp.src(`src/css/${template}.css`)
                .pipe(consolidate('underscore', options/*{
                    glyphs: glyphs,
                    fontName: options.fontName,
                    fontDate: new Date().getTime()
                }*/))
                .pipe(gulp.dest('iconfont'));

            /*gulp.src('src/html/${template}.html')
                .pipe(consolidate('underscore', {
                    glyphs: glyphs,
                    fontName: options.fontName
                }))
                .pipe(gulp.dest('iconfont'));*/
        })
        .pipe(gulp.dest('iconfont'));
});

gulp.task('extract-icons', function () {
    var iconsConfig = `${semanticThemePath}/elements/icon.overrides`;
    var svgFontContent = fs.readFileSync(iconsConfig, "utf-8");
    // i.icon.search:before { content: "\f002"; }
    var definitions = svgFontContent.match(/i\.icon\.(.*?):[\s\S]+?content.*?['"].*?['"]/g),
        convertFilenames = {};

    definitions.forEach(function (line) {
        var charName = line.match(/i\.icon\.(.*?):/)[1],
            charCode = line.match(/content.*?['"](.*?)['"]/)[1];
        convertFilenames[charCode.replace('\\', '')] = charName;
    });
    console.log(convertFilenames);

//    tmp.setGracefulCleanup();
    var tmpObj = tmp.dirSync({ mode: 0750, prefix: 'font-blast-tmp-'/*, unsafeCleanup: true*/ });
    var tmpDir = tmpObj.name;
//    tmp.dir({ mode: 0750, prefix: 'font-blast-tmp-' }, function (err, tmpDir, cleanupCallback) {
//        if (err) throw err;
        fontBlast(`${iconFontPath}/icons.svg`, tmpDir, {
            filenames: convertFilenames,
        });
        console.log("Dir: ", tmpDir);
        return gulp.src(`${tmpDir}/svg/*.svg`)
            .pipe(iconfont({
                fontName,
                formats: ['eot', 'svg'],
                timestamp,
                fontHeight: 1001,
                normalize: true,
            }))
            .on('glyphs', /*function (glyphs, options) {*/ (glyphs) => {
                const options = {
                    className,
                    fontName,
                    //fontPath: '../fonts/', // set path to font (from your CSS file if relative)
                    fontDate: new Date().getTime(),
                    glyphs: glyphs.map(mapGlyphs)
                }
                console.log(glyphs, options);
                gulp.src(`src/css/${template}.css`)
                    .pipe(consolidate('underscore', options/*{
                        glyphs: glyphs,
                        fontName: options.fontName,
                        fontDate: new Date().getTime()
                    }*/))
                    .pipe(gulp.dest('iconfont'));

                /*gulp.src('src/html/${template}.html')
                    .pipe(consolidate('underscore', {
                        glyphs: glyphs,
                        fontName: options.fontName
                    }))
                    .pipe(gulp.dest('iconfont'));*/
            })
            .pipe(gulp.dest('iconfont'))
            .on('end', function() {
                console.log('ending');
//                tmpObj.removeCallback();
            });
//            .on('end', cleanupCallback);
//        cleanupCallback();
//    });
//    tmpObj.removeCallback();
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

/**
 * This is needed for mapping glyphs and codepoints.
 */
function mapGlyphs (glyph) {
	console.log(glyph);
  return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
}

