<?php
  header("Access-Control-Allow-Origin: *");
  require __DIR__ . '/vendor/autoload.php';
	//featured images
	add_theme_support( 'post-thumbnails' ); 
  add_theme_support( 'html5', array( 'search-form', 'gallery' ) );


  use Automattic\WooCommerce\Client;

  remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
  remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);


  add_action('woocommerce_before_main_content', 'my_theme_wrapper_start', 10);
  add_action('woocommerce_after_main_content', 'my_theme_wrapper_end', 10);

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
 //  class Custom_Endpoints_Woocommerce_API
 //  {
 //    protected function  get_client(){
      
 //      return new Client(        
 //        'http://localhost/',
 //        'ck_8f8ac29b12043150262fa45e4002008101d0366f', 
 //        'cs_500b7ec34daef7836258800bf862002ab01be053',
 //        [
 //          'wp_api' => true,
 //          'version' => 'wc/v2',
 //          'validate_url'    => false,
 //          // 'follow_redirects' => true,
 //          'query_string_auth' => true,
 //          'verify_ssl' => false,
 //          // 'timeout' => 30
 //        ]
 //      );
 //    }

 //    public function register_woocommerce_routes() {
 //      register_rest_route('customroutes', '/products', array(
 //        'methods' => 'GET',
 //        'callback' => array( $this, 'view_products' )
 //      ));
 //    }

 //    public function view_products( WP_REST_Request $request ){
 //      $woocommerce = $this->get_client();
 //      try {
 //        $woocommerce->get( 'products');
 //      } catch (Exception $e) {
 //        $lastRequest = $woocommerce->http->getRequest();
 //        echo $e->getMessage();
 //        //echo $lastRequest->getMethod(); // Request method (string).
 //        //echo $lastRequest->getParameters(); // Request parameters (array).
 //        //echo $lastRequest->getHeaders(); // Request headers (array).
 //        //echo $lastRequest->getBody(); // Request body (JSON).
 //        echo $lastRequest->getUrl();
 //      }
     
 //    }
 //  }

 // $call = new Custom_Endpoints_Woocommerce_API();
 // $call->register_woocommerce_routes();
?>