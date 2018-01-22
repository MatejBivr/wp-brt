<!-- <?php require get_template_directory()."/dist/index.html"; ?> -->

<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php wp_title(); ?></title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <?php wp_head(); ?>
  </head>
  <body>
    <app-root>Loading...</app-root>
    <?php wp_footer(); ?>
  </body>
</html>
