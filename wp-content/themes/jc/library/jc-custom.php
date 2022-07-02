<?php

/*
*
* Adds the Site Config for ACF section
*/

if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
    'page_title' => 'Site Config',
    'menu_title' => 'Site Config',
    'menu_slug' 	=> 'site-config',
    'show_in_graphql' => true,
  ));

}