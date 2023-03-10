<?php
// Metaboxes
function home_metabox()
{
    add_meta_box(
        'home_metabox', // $id is a unique id given to every meta box
        'home Details', // $title is the title displayed in custom meta box
        'home_metabox_callback', // $callback is a function that outputs markup inside the custom meta box
        'home', // $page represents the admin page on which the meta box will be displayed on. It can be page, post, custom post type.
        'advanced', // $context represents the position of the meta box. It can be normal, advanced or side.
        'default' // $priority is the position of the box inside the context. It can be high, core, default or low.
    );
}
add_action('add_meta_boxes', 'home_metabox');

function home_metabox_callback($post)
{
    wp_nonce_field(basename(__FILE__), 'home_nonce');
    $home_position = get_post_meta($post->ID, "home_position", true);
    $home_name = get_post_meta($post->ID, "home_name", true);
    $image1 = get_post_meta($post->ID, "home_image1", true);
    $image2 = get_post_meta($post->ID, "home_image2", true);
?>
    <table class="table">
        <tr>
            <td><?php _e('Position', 'home') ?></td>
            <td><input type="text" name="position" id="position" value="<?php if (isset($home_position)) echo $home_position; ?>" /></td>
        </tr>
        <tr>
            <td for="name" class="home-row-title"><?php _e('Name', 'home') ?></td>
            <td><input type="text" name="name" id="name" value="<?php if (isset($home_name)) echo $home_name; ?>" /></td>
        </tr>
        <tr>
            <td>Image1</td>
            <td>
                <input type="url" name="image1" id="image1" value="<?php echo esc_attr($image1); ?>"><br>
            </td>
            <td><button type="button" class="button" id="image1-btn" data-media-uploader-target="#image1"><?php _e('Upload Image', 'intern-demo') ?></button></td>
        </tr>
        ​
        <tr>
            <td>Image2</td>
            <td>
                <input type="url" name="image2" id="image2" value="<?php echo esc_attr($image2); ?>">
            </td>
            <td><button type="button" class="button" data-media-uploader-target="#image2"><?php _e('Upload Image', 'intern-demo') ?></button></td>
        </tr>
    </table>
<?php
}
add_action("save_post", "home_save_metabox_data", 10, 2);

function home_save_metabox_data($post_id, $post)
{

    // we have verfied the nonce
    if (!isset($_POST['home_nonce']) || !wp_verify_nonce($_POST['home_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // verifying slug value
    $post_slug = "home";
    if ($post_slug != $post->post_type) {
        return;
    }

    //save value to db field
    $home_position = '';
    $home_name = '';
    $image1 = '';
    $image2 = '';
    if (isset($_POST['position'])) {
        $home_position = sanitize_text_field($_POST['position']);
    }

    if (isset($_POST['name'])) {
        $home_name = sanitize_text_field($_POST['name']);
    }

    if (isset($_POST['image1'])) {
        $image1 = sanitize_url($_POST['image1']);
    }

    if (isset($_POST['image2'])) {
        $image2 = sanitize_url($_POST['image2']);
    }

    update_post_meta($post_id, "home_position", $home_position);
    update_post_meta($post_id, "home_name", $home_name);
    update_post_meta($post_id, "home_image1", $image1);
    update_post_meta($post_id, "home_image2", $image2);
}

/*
* Load metabox admin styles
*/
function load_metabox_admin_styles()
{
    wp_enqueue_script('metabox-js', get_template_directory_uri() . '/js/meta-box.js', array('jquery'), '', false);
    wp_enqueue_style('metabox-style', get_template_directory_uri() . '/css/meta-box.css');
}

add_action('admin_enqueue_scripts', 'load_metabox_admin_styles');
