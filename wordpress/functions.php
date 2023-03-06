<?php

function my_theme_support(){
       add_theme_support('title-tag');
       add_theme_support('custom-logo');
       // add_theme_support('footeR-logo');

       
       
} 
add_action('after_setup_theme', 'my_theme_support');

// add_theme
function my_theme_styles()
{
       wp_enqueue_style('my-theme-style', get_template_directory_uri() . '/style.css');
}

add_action('wp_enqueue_scripts', 'my_theme_styles');

function register_my_menu()
{
       register_nav_menus(array(
              'header menu' => 'Header_menu',
              'footer menu' => 'Footer_menu'
       ));
  
}

add_action('init', 'register_my_menu');


// function theme_sidebar(){

register_sidebar(
        array(
       'name' => 'Sidebar Location',
       'id' => 'sidebar'
       // 'desciption' => 'This is footer widget area',
       // 'class' => '',
       // 'before_widget' => '<div>',
       // 'after_widget' => '</div>',
       // 'before_title' => '<h4>',
       // 'after_title' => '</P>'
));


register_sidebar(
       array(
      'name' => 'Footer Location',
      'id' => 'footer',
      'desciption' => 'This is footer widget area',
      'class' => '',
      'before_widget' => '<div class="col-12">',
      'after_widget' => '</div>',
      'before_title' => '<p>',
      'after_title' => '</p>'
));
// }
// add_action('theme_sidebars', 'theme_sidebar');
?>
