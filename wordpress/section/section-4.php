<?php
$team_position = get_post_meta(get_the_ID(), "team_position", true);
$team_name = get_post_meta(get_the_ID(), "team_name", true);
$image1 = get_post_meta(get_the_ID(), "team_image1", true);
$image2 = get_post_meta(get_the_ID(), "team_image2", true);
//  echo get_the_ID();
//  print_r($image1);
?>

<article class="card-a01 container">
    <div class="row column-changing @@a-item-c py-10 py-md-20 py-xl-30 ">
        <div class="col-sm-12 col-md-6 col-xl-6 d-flex flex-column gap-4 justify-content-center justify-content-around">
            <?php
            $pages = get_pages(array(
                'sort_column' => 'menu_order',
                'sort_order' => 'ASC',
                'hierarchical' => 0,
                'post_type' => 'page',
                'post_status' => 'publish'
            ));

            $page = get_post(38); // Replace 123 with the ID of your desired page
            echo '<h1>' . $page->post_title . '</h1>';
             echo '<h3>' .$page->post_excerpt . '</h3>';;
        
// Display the excerpt
            ?>
            <button class="bg-primary">LEARN MORE</button>
        </div>

        <div class="video bg-ash col-sm-12 col-md-6 col-xl-5 offset-xl-1 p-6 mt-10 mt-md-0">
            <h6> HOW ABOUT US?</h6>
            <div class="feature-video" style="width: 100%; height: 100%;">
                <?php

                if (has_post_thumbnail($page->ID)) {
                    $thumbnail = wp_get_attachment_image_src(get_post_thumbnail_id($page->ID), 'medium');
                    echo '<img style="width: 100%; height: 80%;" src="' . $thumbnail[0] . '" alt="' . $page->post_title . '">';
                }
                ?>
            </div>
        </div>
    </div>
</article>