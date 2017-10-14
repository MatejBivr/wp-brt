<?php

	//featured images
	add_theme_support( 'post-thumbnails' ); 
  add_theme_support( 'html5', array( 'search-form', 'gallery' ) );

  class BRT_backend_support{
    public function init(){
      add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_parent_theme_styles' ) );
      add_action( 'load-post.php', array( $this, 'page_template_meta_boxes' ) );
      add_action( 'load-post-new.php', array( $this, 'page_template_meta_boxes' ) );
      add_action( 'save_post', array( $this, 'save_page_template_meta' ), 10, 2 );
    }
    public function page_template_meta_box() {
      add_action( 'add_meta_boxes', array( $this, 'add_page_template_meta_box' ) );
    }
    public function page_template_meta_boxes() {
      add_meta_box(
        'page-template-meta-box',
        esc_html__( 'Page Template Meta Box', 'NG-BRT2.0' ),
        array( $this, 'display_page_template_meta_box' ),
        'page',
        'side',
        'default'
      );
    }
    public function display_page_template_meta_box( $object ) {
      wp_nonce_field( basename( __FILE__ ), 'page_template_meta_box_nonce' );
      $text = get_post_meta( $object->ID, 'page_template_text', true );
      $textarea = get_post_meta( $object->ID, 'page_template_textarea', true );
      ?>
      <div>
        <p>
            <label for="page-template-text"><?php _e( "Text Control", 'NG-BRT2.0' ); ?></label><br>
            <input class="widefat" type="text" name="page-template-text" id="page-template-text" value="<?php echo esc_attr( $text ); ?>" />
        </p>
 
        <p>
            <label for="page-template-textarea"><?php _e( "Textarea Control", 'NG-BRT2.0' ); ?></label><br>
            <textarea rows="5" class="widefat" name="page-template-textarea" id="page-template-textarea"><?php echo esc_attr( $textarea ); ?></textarea>
        </p>
      </div><?php
    }
    public function save_page_template_meta( $post_id, $post ) {
 
      if ( ! ( isset( $_POST[ 'page_template_meta_box_nonce' ] ) && wp_verify_nonce( $_POST[ 'page_template_meta_box_nonce' ], basename( __FILE__ ) ) ) ) {
        return $post_id;
      }
 
      if ( ! current_user_can( 'edit_post', $post_id ) ) {
        return $post_id;
      }
 
      if( 'page' != $post->post_type ) {
        return $post_id;
      }
 
      $page_template_text_value = isset( $_POST[ 'page-template-text' ] ) ? $_POST[ 'page-template-text' ] : '';
      update_post_meta( $post_id, 'page_template_text', $page_template_text_value );
 
      $page_template_textarea_value = isset( $_POST[ 'page-template-textarea' ] ) ? $_POST[ 'page-template-textarea' ] : '';
      update_post_meta( $post_id, 'page_template_textarea', $page_template_textarea_value );
    }
  }
  // <?php
  $object_type = 'post';
  $args1 = array( // Validate and sanitize the meta value.
    // Note: currently (4.7) one of 'string', 'boolean', 'integer',
    // 'number' must be used as 'type'. The default is 'string'.
    'type'         => 'string',
    // Shown in the schema for the meta key.
    'description'  => 'A meta key associated with a string meta value.',
    // Return a single value of the type.
    'single'       => true,
    // Show in the WP REST API response. Default: false.
    'show_in_rest' => true,
  );
  register_meta( $object_type, 'page_template_text', $args1 );
  register_meta( $object_type, 'page_template_textarea', $args1 );

  $BRT_support = new  BRT_backend_support();
  $BRT_support -> init();
?>