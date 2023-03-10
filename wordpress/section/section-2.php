<?php
$team2_position2 = get_post_meta(get_the_ID(), "team2_position2", true);
$team2_name = get_post_meta(get_the_ID(), "team2_name", true);
$image3 = get_post_meta(get_the_ID(), "team2_image3", true);
//  $image4 = get_post_meta(get_the_ID(), "image4",true);
// echo "<pre>";
// print_r($image1);
?>

<section class="container my-20">
  <article class="insideAutoLayout row @@flexReverse section1__second-row">
    <!-- 1st column -->
    <div class="col-xl-8 @@bgCol @@tc">
      <div class="d-md-none border-top border-primary border-8 px-4 py-10 ">
        <h2>From the depths of the Earth to outer space, we are building the barely possible.</h2>
        <p class="body-xl">First Mode is a creative engineering company meeting humanitys challenges and opportunities—wherever we find them.</p>
      </div>
      <div class="d-none p-md-10 p-xl-20 border-top border-primary border-8 d-md-block section1__second-row__look">
        <h2>Look deep into nature, and then you will understand everything better.</h2>
        <p class="body-xl">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        <button>CONTACT</button>
      </div>
    </div>
    <!-- 2nd column -->
    <figure class="col-xl-4 d-none d-xl-block ">
      <!-- <img src="images/old-house.svg" > -->
      <?php if (isset($image3)) : ?>
        <img class="pe-3" src="<?php echo $image3; ?>">
      <?php endif; ?>
    </figure>
  </article>
</section>
<!-- // echo $term->name;​ -->