<?php
$team_name = get_post_meta(get_the_ID(), "team_name", true);

//  echo get_the_ID();
//  print_r($image1);
?>

<section class="ourteam ">
    <div class="container ourteam__container">
        <?php
          $page = get_post(71); // Replace 123 with the ID of your desired page

        //   echo '<h3>' . $page->post_excerpt . '</h3>';
              echo '<h3>' . $page->post_title . '</h3>';;
        ?>

        <div class="ourteam__card mb-10">
            <figure class="ourteam__card__img">
                <?php

                if (has_post_thumbnail($page->ID)) {
                    $thumbnail = wp_get_attachment_image_src(get_post_thumbnail_id($page->ID), 'medium');
                    echo '<img style="width: 100%;" src="' . $thumbnail[0] . '" alt="' . $page->post_title . '">';
                }
                ?>
            </figure>
            <div class="ourteam__card__description">
                <?php
                $pages = get_pages(array(
                    'sort_column' => 'menu_order',
                    'sort_order' => 'ASC',
                    'hierarchical' => 0,
                    'post_type' => 'page',
                    'post_status' => 'publish'
                ));

                $page = get_post(38); // Replace 123 with the ID of your desired page

                $team_name;
                echo '<h3>' ."Sally Albana - Site Engineer" . '</h3>';
                echo '<p class="body-xl" >' . $page->post_excerpt . '<p>';

                // Display the excerpt
                ?>
            </div>
        </div>
        <div class="ourteam__slider d-flex justify-content-between">
            <div class="left-arrow arrow">
                <i class="icon-arrow-left"></i>
            </div>
            <div class="ourteam__slider__indicators">
                <div class="circle fill"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="right-arrow arrow">
                <i class="icon-arrow-right"></i>
            </div>
        </div>
    </div>
</section>
