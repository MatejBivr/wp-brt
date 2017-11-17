<?php
/**
 * Template Name: Hero Content Module
 *
 * @package WordPress
 * @subpackage BRT
 * @since 1.0
 */
 ?>
  <?php
    while ( have_posts() ) : the_post();

        $text = get_post_meta( get_the_ID(), 'page_template_text', true );
        $textarea = get_post_meta( get_the_ID(), 'page_template_textarea', true );
        echo "<p>Text Box: " . $text . "</p>";
        echo "<p>Text Area: " . $textarea . "</p>";

    endwhile; // End of the loop.
    ?>

 <?php get_footer();