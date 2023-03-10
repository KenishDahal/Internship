<?php
function section2_metabox()
{
       add_meta_box(
              'section2_metabox', // $id is a unique id given to every meta box
              'Section2 Details', // $title is the title displayed in custom meta box
              'section2_metabox_callback', // $callback is a function that outputs markup inside the custom meta box
              'page', // $page represents the admin page on which the meta box will be displayed on. It can be page, post, custom post type.
              'advanced', // $context represents the position2 of the meta box. It can be normal, advanced or side.
              'default' // $priority is the position2 of the box inside the context. It can be high, core, default or low.
       );
}
add_action('add_meta_boxes', 'section2_metabox');

function section2_metabox_callback($post)
{
       wp_nonce_field(basename(__FILE__), 'team2_nonce');
       $team2_position2 = get_post_meta($post->ID, "team2_position2", true);
       $team2_name = get_post_meta($post->ID, "team2_name", true);
       $image3 = get_post_meta($post->ID, "team2_image3", true);
?>
       <table class="table">
              <tr>
                     <td><?php _e('position2', 'team2') ?></td>
                     <td><input type="text" name="position2" id="position2" value="<?php if (isset($team2_position2)) echo $team2_position2; ?>" /></td>
              </tr>
              <tr>
                     <td for="name2" class="team2-row-title"><?php _e('name2', 'team2') ?></td>
                     <td><input type="text" name="name2" id="name2" value="<?php if (isset($team2_name)) echo $team2_name; ?>" /></td>
              </tr>
              <tr>
                     <td>image3</td>
                     <td>
                            <input type="url" name="image3" id="image3" value="<?php echo esc_attr($image3); ?>"><br>
                     </td>
                     <td><button type="button" class="button" id="image3-btn" data-media-uploader-target="#image3"><?php _e('Upload Image', 'intern-demo') ?></button></td>
              </tr>

       </table>
<?php
}


add_action("save_post", "section2_save_metabox_data", 10, 2);

function section2_save_metabox_data($post_id, $post)
{

       // we have verfied the nonce
       if (!isset($_POST['team2_nonce']) || !wp_verify_nonce($_POST['team2_nonce'], basename(__FILE__))) {
              return $post_id;
       }

       // verifying slug value
       $post_slug = "page";
       if ($post_slug != $post->post_type) {
              return;
       }

       //save value to db field
       $team2_position2 = '';
       $team2_name = '';
       $image3 = '';
       // $image4 = '';
       if (isset($_POST['position2'])) {
              $team2_position2 = sanitize_text_field($_POST['position2']);
       }

       if (isset($_POST['name2'])) {
              $team2_name = sanitize_text_field($_POST['name2']);
       }

       if (isset($_POST['image3'])) {
              $image3 = sanitize_url($_POST['image3']);
       }

       if (isset($_POST['image4'])) {
              $image4 = sanitize_url($_POST['image4']);
       }

       update_post_meta($post_id, "team2_position2", $team2_position2);
       update_post_meta($post_id, "team2_name", $team2_name);
       update_post_meta($post_id, "team2_image3", $image3);
}
