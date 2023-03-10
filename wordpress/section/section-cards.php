<?php

$terms = get_terms('category', array(
    'hide_empty' => false
));
?>
<section class="container section1 ">
    <article class="categoryDropdown">
        <ul class="nav categoryDropdown__ul h6">
            <span>Category:</span>
            <?php

            if (isset($terms) && is_array($terms)) :

                foreach ($terms as $term) : ?>

                    <li  class="category" id="<?php echo $term->term_id; ?>"><?php echo $term->name; ?></li>

            <?php
                endforeach;
            endif;
            ?>
        </ul>

        <div class="d-md-flex justify-content-between">
            <div class="input-group mb-3 border border-2 border-dark bg-white">
                <input type="text" class="form-control border-0" id="searchKey" name="searchKey" placeholder="" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                <i class="icon-checkmark"></i>
            </div>
            <div class="d-flex flex-row-reverse">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </button>
                    <ul class="dropdown-menu bg-mint rounded-0 border border-peach h6">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="container-wrapper blog--frame row py-10 py-lg-20 py-xl-30">
            
            <!-- first items -->
            <?php
            $args = array(
                'post_type' => 'post',
                'post_status' => 'publish',
                'orderby' => 'date',
                'order' => 'DESC',
                'posts_per_page' => get_option('posts_per_page'),
            );
            $query = new WP_Query($args);
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
            ?>
        </div>

    </article>
</section>