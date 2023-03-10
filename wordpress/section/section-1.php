<?php
$team_position = get_post_meta(get_the_ID(), "team_position", true);
$team_name = get_post_meta(get_the_ID(), "team_name", true);
$image1 = get_post_meta(get_the_ID(), "team_image1", true);
$image2 = get_post_meta(get_the_ID(), "team_image2", true);
//  echo get_the_ID();
//  print_r($image1);
?>
<section class="container section1 my-9 my-md-10 my-xl-20">
  <div class="row">
    <figure class="col-sm-12 col-md-6 col-xl-5 ">
      <?php if (isset($image1)) : ?>
        <img class="image-first" src="<?php echo $image1; ?>">
    </figure>
  <?php endif; ?>
  <figure class="d-none d-md-block col-md-6 col-xl-7">
    <?php if (isset($image2)) : ?>
      <img class="image-first" src="<?php echo $image2; ?>">
    <?php endif; ?>
  </figure>
  </div>
</section>


<?php
        //  the_title();
        //  the_content();
         // echo $term->name;​
