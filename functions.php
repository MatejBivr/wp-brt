<?php
  header("Access-Control-Allow-Origin: *");
  //featured images
  add_theme_support( 'post-thumbnails' ); 
  add_theme_support( 'html5', array( 'search-form', 'gallery' ) );

   // add_action('woocommerce_before_main_content', 'my_theme_wrapper_start', 10);
  // add_action('woocommerce_after_main_content', 'my_theme_wrapper_end', 10);
 
  function my_theme_wrapper_start() {
    echo '<section id="main">';
  }

  function my_theme_wrapper_end() {
    echo '</section>';
  }
  function wpb_adding_scripts(){
    wp_register_script('inline', get_template_directory_uri() . '/dist/inline.bundle.js', array(), false, true);
    wp_register_script('polyfills', get_template_directory_uri() . '/dist/polyfills.bundle.js', array(), false, true);
    wp_register_script('vendor', get_template_directory_uri() . '/dist/vendor.bundle.js', array(), false, true);
    wp_register_script('main', get_template_directory_uri() . '/dist/main.bundle.js', array(), false, true);
    wp_register_script('styles', get_template_directory_uri() . '/dist/styles.bundle.js', array(), false, true);

    wp_enqueue_script('inline');
    wp_enqueue_script('polyfills');
    wp_enqueue_script('vendor');
    wp_enqueue_script('styles');
    wp_enqueue_script('main');
  }

  add_action('wp_enqueue_scripts', 'wpb_adding_scripts');
  
  // function theme_styles() { 
  //   wp_enqueue_style( 'styles', get_template_directory_uri() . '/dist/styles.bundle.css' );
  // }
  // add_action('wp_enqueue_scripts', 'theme_styles');


  function add_favicon() {
    echo '<link rel="shortcut icon" href="' . get_template_directory_uri() . '/dist//favicon-32x32.png' . '" />';
    echo '<link rel="shortcut icon" href="' . get_template_directory_uri() . '/dist/favicon-16x16.png' . '" />';
    echo '<link rel="shortcut icon" href="' . get_template_directory_uri() . '/dist/favicon.ico' . '" />';
  }
  add_action('admin_head', 'add_favicon');

  function mytheme_add_woocommerce_support() {
    add_theme_support( 'woocommerce' );
  }
  add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );

  // $woo_metaboxes = array(

  //       "image" => array (
  //           "name" => "image",
  //           "label" => "Post Image",
  //           "type" => "upload",
  //           "desc" => "Upload file here…"
  //       ),
  //     )

//   // Add various fields to the JSON output
// function celestial_register_fields() {
//     // Add Author Name
//     register_rest_field( 'product',
//         'author_name',
//         array(
//             'get_callback'      => 'celestial_get_author_name',
//             'update_callback'   => null,
//             'schema'            => null
//         )
//     );
//     // Add Featured Image
//     register_rest_field( 'product',
//         'featured_image_src',
//         array(
//             'get_callback'      => 'celestial_get_image_src',
//             'update_callback'   => null,
//             'schema'            => null
//         )
//    );
//    // Add Published Date
//     register_rest_field( 'product',
//        'published_date',
//        array(
//            'get_callback'      => 'celestial_published_date',
//            'update_callback'   => null,
//            'schema'            => null
//        )
//     );
// }
// add_action( 'rest_api_init', 'celestial_register_fields' );

// function celestial_get_author_name( $object, $field_name, $request ) {
//     return get_the_author_meta( 'display_name' );
// }
// function celestial_get_image_src( $object, $field_name, $request ) {
//    if($object[ 'featured_media' ] == 0) {
//        return $object[ 'featured_media' ];
//    }
//     $feat_img_array = wp_get_attachment_image_src( $object[ 'featured_media' ], 'thumbnail', true );
//    return $feat_img_array[0];
// }
// function celestial_published_date( $object, $field_name, $request ) {
//     return get_the_time('F j, Y');
// }

// remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );

// remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
// remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
// remove_action( 'woocommerce_archive_description', 'woocommerce_taxonomy_archive_description', 10 );
// remove_action( 'woocommerce_archive_description', 'woocommerce_product_archive_description', 10 );
// remove_action( 'woocommerce_before_shop_loop', 'wc_print_notices', 10 );
// remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
// remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );

// remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash', 10 );
// remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20 );.
 
//  remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );
// remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );
// remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );
 
// remove_action( 'woocommerce_review_before', 'woocommerce_review_display_gravatar', 10 );
// remove_action( 'woocommerce_review_before_comment_meta', 'woocommerce_review_display_rating', 10 );
// remove_action( 'woocommerce_review_meta', 'woocommerce_review_display_meta', 10 );
// remove_action( 'woocommerce_review_comment_text', 'woocommerce_review_display_comment_text', 10 );


// remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );

// remove_action( 'woocommerce_grouped_add_to_cart', 'woocommerce_grouped_add_to_cart', 30 );
// remove_action( 'woocommerce_variable_add_to_cart', 'woocommerce_variable_add_to_cart', 30 );
// remove_action( 'woocommerce_external_add_to_cart', 'woocommerce_external_add_to_cart', 30 );
// remove_action( 'woocommerce_single_variation', 'woocommerce_single_variation', 10 );
// remove_action( 'woocommerce_single_variation', 'woocommerce_single_variation_add_to_cart_button', 20 );


// remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );
// remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );
// remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );
 
// remove_action( 'woocommerce_review_before', 'woocommerce_review_display_gravatar', 10 );
// remove_action( 'woocommerce_review_before_comment_meta', 'woocommerce_review_display_rating', 10 );
// remove_action( 'woocommerce_review_meta', 'woocommerce_review_display_meta', 10 );
// remove_action( 'woocommerce_review_comment_text', 'woocommerce_review_display_comment_text', 10 );
// remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart' );
//remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
add_action( 'rest_api_init', 'appp_register_post_meta' );
function appp_register_post_meta() {
    register_rest_field( 'product', // any post type registered with API
        '_price', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function appp_get_meta( $object, $field_name, $request ) {
    return get_post_meta( $object[ 'id' ], $field_name, true );
}

?>