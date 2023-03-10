<?php

/*
Template Name: Home template
*/

get_header();

// dynamic_sidebar('test');

get_template_part('section/section','1');

get_template_part('section/section','2');

get_template_part('section/section','4');

get_template_part('section/section','cards');

get_template_part('section/section','5');


get_footer();
