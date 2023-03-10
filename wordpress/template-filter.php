<?php

$term = get_term('category', array(
  'hide_empty' => true
));
?>

<ul class="terms">
  <?php

  if (isset($terms) && is_array($terms)) :

    foreach ($terms as $term) : ?>

      <li id="<?php echo $term->term_id; ?>"><?php echo $term->name; ?></li>

  <?php

  endforeach;
  endif;
  ?>

</ul>