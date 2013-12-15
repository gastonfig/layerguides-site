# Require any additional compass plugins here.
require "sass-css-importer"

# Set this to the root of your project when deployed:
http_path = "dist"
css_dir = "dist/css"
sass_dir = "dist/sass"
images_dir = "dist/images"
javascripts_dir = "dist/js"
fonts_dir = "dist/fonts"

output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false
color_output = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass stylesheets scss && rm -rf sass && mv scss sass
preferred_syntax = :scss
