const cssnano = require("cssnano");
const del = require("del");
const extReplace = require("gulp-ext-replace");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const postcss = require("gulp-postcss");
const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const stylelint = require("gulp-stylelint");
const webp = require("imagemin-webp");

const buildFolder = "./assets";
const folders = {
  src: {
    css: "./_includes/css",
    images: "./assets"
  },
  build: {
    css: `${buildFolder}/css`,
    images: `${buildFolder}`
  }
};

gulp.task("lint:css", () => {
  return gulp
    .src([`${folders.src.css}/**/*.css`, `${folders.src.components}/**/*.css`])
    .pipe(
      stylelint({
        reporters: [{ formatter: "string", console: true }]
      })
    );
});

gulp.task("watch:lint:css", () => {
  gulp.watch(
    [`${folders.src.css}/**/*.css`, `${folders.src.components}/**/*.css`],
    gulp.parallel("lint:css")
  );
});

gulp.task("build:css", () =>
  gulp
    .src(`${folders.src.css}/index.css`, { sourcemaps: true })
    .pipe(postcss([postcssImport, postcssPresetEnv, cssnano]))
    .pipe(gulp.dest(folders.build.css, { sourcemaps: "." }))
);

gulp.task("build:images", () =>
  gulp
    .src(`${folders.src.images}/**/*.{jpg,png}`)
    .pipe(gulp.dest(folders.build.images))
);

gulp.task("build:webp", () =>
  gulp
    .src(`${folders.src.images}/**/*.{jpg,png}`)
    .pipe(
      imagemin([
        webp({
          quality: 75
        })
      ])
    )
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest(folders.build.images))
);

gulp.task("clean", () => {
  return del([`${buildFolder}**/*`]);
});

gulp.task(
  "build",
  gulp.series("clean", gulp.parallel("build:css", "build:images", "build:webp"))
);
gulp.task("default", gulp.parallel("lint:css", "watch:lint:css"));
