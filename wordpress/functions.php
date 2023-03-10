<?php

function my_theme_support()
{
       add_theme_support('title-tag');
       add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'my_theme_support');

// add_theme
function my_theme_styles()
{
       wp_enqueue_style('my-theme-style', get_template_directory_uri() . '/style.css');
}

add_action('wp_enqueue_scripts', 'my_theme_styles');

function mytheme_scripts()
{
       // ajax
       wp_enqueue_script('my-ajax-form', get_template_directory_uri() . '/js/ajax-filter.js', array('jquery'), '1.0', true);
       wp_localize_script('my-ajax-form', 'my_ajax_form', array('ajaxurl' =>  admin_url('admin-ajax.php')));
       // if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
       //     wp_enqueue_script( 'comment-reply' );
       // }
}
add_action('wp_enqueue_scripts', 'mytheme_scripts');

add_action('wp_ajax_my_action_callback', 'my_action_callback');
add_action('wp_ajax_nopriv_my_action_callback', 'my_action_callback');

function my_action_callback()
{
       // Perform some action here
       $termId = $_POST['term_id'];
       $searchKey = $_POST['searchKey'];

       if ($termId) {

              if ($termId == 'all') {
                     $args = array(
                            'post_type' => 'post',
                            'post_status' => 'publish',
                            'orderby' => 'date',
                            'order' => 'DESC',
                            'posts_per_page' => get_option('posts_per_page'),
                     );
              } else {
                     $args = array(
                            'post_type' => 'post',
                            'post_status' => 'publish',
                            'orderby' => 'date',
                            'order' => 'DESC',
                            'posts_per_page' => get_option('posts_per_page'),
                            'tax_query' => array(
                                   array(
                                          'taxonomy' => 'category',
                                          'field'    => 'term_id',
                                          'terms'    => $termId,
                                   ),
                            ),
                     );
              }
              $query = new WP_Query($args);
              ob_start();
              if ($query->have_posts()) :
                     while ($query->have_posts()) : $query->the_post();
                            $img_url = get_the_post_thumbnail_url();
?>

                            <div class="col-12 col-md-6 col-xl-4 @@d-none @@d-none-only">
                                   <article class="card @@d-none">
                                          <a href="../../../blog-single.html">
                                                 <img src="<?php echo  $img_url; ?>" class="card-img-top" alt="blog-images">
                                                 <div class="card-body">
                                                        <h6 class="card-title"><?php the_date() ?></h6>
                                                        <p class="card-text"><?php the_title() ?></p>
                                                 </div>
                                          </a>
                                   </article>
                            </div>
                     <?php
                     endwhile;
              endif;
              wp_reset_postdata();
              $result = ob_get_contents();
              ob_end_clean();
              // echo 'Action performed successfully.';
              $return = array('content' => $result);
              wp_send_json($return);
              wp_die();
       }

       if ($searchKey) {
              
                     $args = array(
                            'post_type' => 'post',
                            'post_status' => 'publish',
                            'orderby' => 'date',
                            'order' => 'DESC',
                            'posts_per_page' => get_option('posts_per_page'),
                            's' => $searchKey
                     );
              }

              else{
                     $args = array(
                            'post_type' => 'post',
                            'post_status' => 'publish',
                            'orderby' => 'date',
                            'order' => 'DESC',
                            'posts_per_page' => get_option('posts_per_page')
                     );
              }

              $query = new WP_Query($args);
              ob_start();
              if ($query->have_posts()) :
                     while ($query->have_posts()) : $query->the_post();
                            $img_url = get_the_post_thumbnail_url();
                     ?>

                            <div class="col-12 col-md-6 col-xl-4 @@d-none @@d-none-only">
                                   <article class="card @@d-none">
                                          <a href="../../../blog-single.html">
                                                 <img src="<?php echo  $img_url; ?>" class="card-img-top" alt="blog-images">
                                                 <div class="card-body">
                                                        <h6 class="card-title"><?php the_date() ?></h6>
                                                        <p class="card-text"><?php the_title() ?></p>
                                                 </div>
                                          </a>
                                   </article>
                            </div>
<?php
                     endwhile;
              endif;
              wp_reset_postdata();
              $result = ob_get_contents();
              ob_end_clean();
              // echo 'Action performed successfully.';
              $return = array('content' => $result);
              wp_send_json($return);
              wp_die();
       }

function register_my_menu()
{
       add_theme_support('post-thumbnails');
       // add_theme_support('page-excerpt');
       add_post_type_support('page', 'excerpt');

       register_nav_menus(array(
              'header menu' => 'Header_menu',
              'footer menu' => 'Footer_menu'
       ));
}

add_action('after_setup_theme', 'register_my_menu');

register_sidebar(
       array(
              'name' => 'Footer Location',
              'id' => 'footer',
              'desciption' => 'This is footer widget area',
              'class' => '',
              'before_widget' => '<div class="col-12">',
              'after_widget' => '</div>',
              'before_title' => '<h3 class="title">',
              'after_title' => '</h3>'
       )
);

// settings


// Control


register_sidebar(
       array(
              'name' => 'test Location',
              'id' => 'test',
              'desciption' => 'This is test widget area',
              'class' => '',
              'before_widget' => '<div class="">',
              'after_widget' => '</div>',
              'before_title' => '<h3 class="title">',
              'after_title' => '</h3>'
       )
);

function create_team_post_type()
{
       $labels = array(
              'name' => 'Teams',
              'singular_name' => 'Teams',
              'menu_name' => 'Teams'
       );
       $args = array(
              'labels' => $labels,
              'public' => true,
              'rewrite' => array('slug' => 'teams'),
              'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments')
       );
       register_post_type('team', $args);
}

add_action('init', 'create_team_post_type');


function create_team_taxonomies()
{
       $labels = array(
              'name' => 'Team Category',
              'singular_name' => 'Category',
              'menu_name' => 'Category'
       );

       register_taxonomy('team_category', array('team'), array(
              'hierarchical' => true,
              'labels' => $labels,
              'rewrite' => array('slug' => 'teams-category'),
       ));
}

add_action('init', 'create_team_taxonomies', 0);

require get_template_directory() . '/section-meta/section-meta-1.php';
require get_template_directory() . '/section-meta/section-meta-2.php';
require get_template_directory() . '/section-meta/section-meta-4.php';

/*
* Load metabox admin styles
*/
function load_metabox_admin_styles()
{
       wp_enqueue_script('metabox-js', get_template_directory_uri() . '/js/meta-box.js', array('jquery'), '', false);
       wp_enqueue_style('metabox-style', get_template_directory_uri() . '/css/meta-box.css');
}

add_action('admin_enqueue_scripts', 'load_metabox_admin_styles');

function my_custom_excerpt_length($length)
{
       return 20;
}
add_filter('excerpt_length', 'my_custom_excerpt_length');
