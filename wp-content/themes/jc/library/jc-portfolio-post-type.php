<?php 

// Register Custom Post Type
function jc_portfolio_post_type() {

	$labels = array(
		'name'                  => _x( 'Portfolio Items', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Portfolio Item', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Portfolio', 'text_domain' ),
		'name_admin_bar'        => __( 'Portfolio', 'text_domain' ),
		'archives'              => __( 'Portfolio Archives', 'text_domain' ),
		'attributes'            => __( 'Portfolio Attributes', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		'all_items'             => __( 'All Portfolio Items', 'text_domain' ),
		'add_new_item'          => __( 'Add New Portfolio Item', 'text_domain' ),
		'add_new'               => __( 'Add New Portfolio', 'text_domain' ),
		'new_item'              => __( 'New Portfolio Item', 'text_domain' ),
		'edit_item'             => __( 'Edit Portfolio Item', 'text_domain' ),
		'update_item'           => __( 'Update Portfolio Item', 'text_domain' ),
		'view_item'             => __( 'View Portfolio Item', 'text_domain' ),
		'view_items'            => __( 'View Portfolio Items', 'text_domain' ),
		'search_items'          => __( 'Search Portfolio Item', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Featured Portfolio Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into portfolio item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this portfolio item', 'text_domain' ),
		'items_list'            => __( 'Portfolio items list', 'text_domain' ),
		'items_list_navigation' => __( 'Portfolio items list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter portfolio items list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Portfolio Items', 'text_domain' ),
		'description'           => __( 'Portfolio Custom Post Type', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => true,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 20,
		'menu_icon'             => 'dashicons-images-alt2',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
    'rest_base'             => 'portfolio-items',
    'show_in_graphql'       => true,
    'graphql_single_name'   => 'portfolioItem',
    'graphql_plural_name'   => 'portfolioItems',
	);
	register_post_type( 'portfolio_type', $args );

}
add_action( 'init', 'jc_portfolio_post_type', 0 );