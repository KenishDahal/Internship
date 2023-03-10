<?php
function section4_metabox()
{
    add_meta_box(
        'section4_metabox', // $id is a unique id given to every meta box
        'Section4 Details', // $title is the title displayed in custom meta box
        'section4_metabox_callback', // $callback is a function that outputs markup inside the custom meta box
        'page', // $page represents the admin page on which the meta box will be displayed on. It can be page, post, custom post type.
        'advanced', // $context represents the position of the meta box. It can be normal, advanced or side.
        'default' // $priority is the position of the box inside the context. It can be high, core, default or low.
    );
}
add_action('add_meta_boxes', 'section4_metabox');

function section4_metabox_callback($post)
{
    wp_nonce_field(basename(__FILE__), 'team_nonce');
    $team_position = get_post_meta($post->ID, "team_position", true);
    $team_name = get_post_meta($post->ID, "team_name", true);
    $image1 = get_post_meta($post->ID, "team_image1", true);
    $image2 = get_post_meta($post->ID, "team_image2", true);
?>
    <table class="table">
        <tr>
            <td><?php _e('Position', 'team') ?></td>
            <td><input type="text" name="position" id="position" value="<?php if (isset($team_position)) echo $team_position; ?>" /></td>
        </tr>
        <tr>
            <td for="name" class="team-row-title"><?php _e('Name', 'team') ?></td>
            <td><input type="text" name="name" id="name" value="<?php if (isset($team_name)) echo $team_name; ?>" /></td>
        </tr>
        <tr>
            <td>Image1</td>
            <td>
                <input type="url" name="image1" id="image1" value="<?php echo esc_attr($image1); ?>"><br>
            </td>
            <td><button type="button" class="button" id="image1-btn" data-media-uploader-target="#image1"><?php _e('Upload Image', 'intern-demo') ?></button></td>
        </tr>
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


add_action("save_post", "section4_save_metabox_data", 10, 2);

function section4_save_metabox_data($post_id, $post)
{

    // we have verfied the nonce
    if (!isset($_POST['team_nonce']) || !wp_verify_nonce($_POST['team_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // verifying slug value
    $post_slug = "page";
    if ($post_slug != $post->post_type) {
        return;
    }

    //save value to db field
    $team_position = '';
    $team_name = '';
    $image1 = '';
    $image2 = '';
    if (isset($_POST['position'])) {
        $team_position = sanitize_text_field($_POST['position']);
    }

    if (isset($_POST['name'])) {
        $team_name = sanitize_text_field($_POST['name']);
    }

    if (isset($_POST['image1'])) {
        $image1 = sanitize_url($_POST['image1']);
    }

    if (isset($_POST['image2'])) {
        $image2 = sanitize_url($_POST['image2']);
    }

    update_post_meta($post_id, "team_position", $team_position);
    update_post_meta($post_id, "team_name", $team_name);
    update_post_meta($post_id, "team_image1", $image1);
    update_post_meta($post_id, "team_image2", $image2);
}