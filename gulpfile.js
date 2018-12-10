let gulp = require('gulp')
let gutil = require('gulp-util')
let autoprefixer = require('gulp-autoprefixer')
let cssnano = require('gulp-cssnano')
let gulpIf = require('gulp-if')
let plumber = require('gulp-plumber')
let stylus = require('gulp-stylus')
let sourcemaps = require('gulp-sourcemaps')

let {NODE_ENV} = process.env
let dev = NODE_ENV === 'development'
let prd = NODE_ENV === 'production'

let webpack
let bundlerConfig
let bundler

let patterns = {
  styl: '{src,themes/handshake-academy/src}/**/*.styl',
  js: '{src,themes/handshake-academy/src}/**/*.js',
  fonts: ['themes/handshake-academy/src/fonts/*','node_modules/@fortawesome/fontawesome-free/webfonts/*']
}

gulp.task('fonts', () =>
  gulp
    .src(patterns.fonts)
    .pipe(gulp.dest('themes/handshake-academy/source/webfonts'))
)

gulp.task('stylus', () =>
  gulp
    .src('themes/handshake-academy/src/index.styl')
    .pipe(plumber())
    .pipe(gulpIf(dev, sourcemaps.init()))
    .pipe(
      stylus({
        'include css': true
      })
    )
    .pipe(autoprefixer())
    .pipe(gulpIf(prd, cssnano()))
    .pipe(gulpIf(dev, sourcemaps.write('.')))
    .pipe(gulp.dest('themes/handshake-academy/source'))
)

gulp.task('webpack-init', done => {
  webpack = require('webpack')
  bundlerConfig = require('./webpack.config')
  bundler = webpack(bundlerConfig)
  done()
})

gulp.task('webpack', done => {
  bundler.run((err, stats) => {
    if (err !== undefined && err !== null) {
      console.error('error bundling', err)
    }

    if (stats.hasWarnings() === true) {
      stats.toJson().warnings.forEach(item => {
        gutil.log.warn('webpack warning', item)
      })
    }

    if (stats.hasErrors() === true) {
      stats.toJson().warnings.forEach(item => {
        gutil.log.error('error', item)
      })
    }

    done()
  })
})

gulp.task('watch', () => {
  gulp.watch(patterns.styl, gulp.series('stylus'))
  gulp.watch(patterns.js, gulp.series('webpack'))
})

gulp.task('build', gulp.parallel('fonts', 'stylus', 'webpack-init', 'webpack'))
gulp.task('dev', gulp.parallel('build', 'watch'))
gulp.task('prd', gulp.series('build'))
