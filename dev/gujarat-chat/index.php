<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<section class="wrapper section-wrapper home-top-wrapper">
  <div class="container">
    <div class="section-left">
      <ul class="featured-banner">
        <li><img src="http://www.exclusivepost.com/wp-content/uploads/2017/11/16-9-dummy-image6-768x432.jpg" /></li>
      </ul>
    </div>
    <aside class="side-bar">
      <div class="side-bar-inner">
        <h3 class="section-headline font-roboto"><a href="<?php echo esc_url( home_url( '/' ) ); ?>all-posts">Latest News</a></h3>
        <ul class="thumbnail-list">
          <?php $the_query = new WP_Query( 'posts_per_page=3' ); ?>
          <?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>
          <li> 
          <a href="<?php the_permalink() ?>">
            <figure>
              <div class="post-image">
                <?php if ( has_post_thumbnail() ) { the_post_thumbnail('thumbnail'); } ?>
              </div>
              <figcaption>
                <div class="caption-items">
                  <h4><?php echo wp_trim_words( get_the_title(), 20 ); ?></h4>
                </div>
              </figcaption>
            </figure>
            </a> 
            </li>
          <?php endwhile; wp_reset_postdata();?>
        </ul>
      </div>
    </aside>
  </div>
</section>
<section class="wrapper section-wrapper highlight-wrapper">
  <div class="container">
    <h3 class="section-headline font-roboto"><a href="<?php echo esc_url( home_url( '/' ) ); ?>trending-news">Trending News</a></h3>
    <?php $catquery = new WP_Query( 'cat=18&posts_per_page=5' ); ?>
    <ul class="clearfix textover-list">
      <?php while($catquery->have_posts()) : $catquery->the_post(); ?>
      <li> 
      <a href="<?php the_permalink() ?>">
        <figure>
          <div class="post-image">
            <?php the_post_thumbnail( 'twentyseventeen-featured-image' ); ?>
          </div>
          <figcaption>
            <div class="caption-items">
              <h4><?php echo wp_trim_words( get_the_title(), 20 ); ?></h4>
            </div>
          </figcaption>
        </figure>
        </a> 
        </li>
      <?php endwhile; ?>
    </ul>
    <?php wp_reset_postdata(); ?>
  </div>
</section>
<section class="wrapper section-wrapper">
  <div class="container">
    <div class="section-left">
      <h3 class="section-headline font-roboto"><a href="<?php echo esc_url( home_url( '/' ) ); ?>all-posts">Others News</a></h3>
      <ul class="view-list">
        <?php $the_query = new WP_Query( 'posts_per_page=6' ); ?>
        <?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>
        <li> 
        <a href="<?php the_permalink() ?>">
          <figure>
            <div class="post-image">
              <?php if ( has_post_thumbnail() ) { the_post_thumbnail('thumbnail'); } ?>
            </div>
            <figcaption>
              <div class="caption-items">
                <h4><?php echo wp_trim_words( get_the_title(), 15 ); ?></h4>
                <p><?php echo wp_trim_words( get_the_content(), 30 ); ?></p>
              </div>
            </figcaption>
          </figure>
          </a> 
          </li>
        <?php endwhile; wp_reset_postdata();?>
      </ul>
    </div>
    <aside class="side-bar">
      <div class="side-bar-inner font-roboto">
        <?php get_sidebar(); ?>
      </div>
      
      
    </aside>
  </div>
</section>
<section class="wrapper section-wrapper">
  <div class="container">
    <div class="section-left">
      <ul class="grid-list clearfix">
        <?php $the_query = new WP_Query( 'posts_per_page=6' ); ?>
        <?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>
        <li> 
        <a href="<?php the_permalink() ?>">
          <figure>
            <div class="post-image">
              <?php the_post_thumbnail( 'twentyseventeen-featured-image' ); ?>
              <div class="post-ctg">
                <?php foreach((get_the_category()) as $category) {
					echo '<span>' . $category->cat_name . '</span> ';}
				?>
              </div>
            </div>
            <figcaption>
              <div class="caption-items">
                <h4><?php echo wp_trim_words( get_the_title(), 8 ); ?></h4>
                <p><?php echo wp_trim_words( get_the_content(), 20 ); ?></p>
              </div>
            </figcaption>
          </figure>
          </a> 
          </li>
        <?php endwhile; wp_reset_postdata();?>
      </ul>
    </div>
    <aside class="side-bar">
      <div class="side-bar-inner">
        <h3 class="section-headline font-roboto"><a href="<?php echo esc_url( home_url( '/' ) ); ?>all-posts">Super Exclusive</a></h3>
        <ul class="thumbnail-list">
          <?php $the_query = new WP_Query( 'posts_per_page=5' ); ?>
          <?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>
          <li> 
          <a href="<?php the_permalink() ?>">
            <figure>
              <div class="post-image">
                <?php if ( has_post_thumbnail() ) { the_post_thumbnail('thumbnail'); } ?>
              </div>
              <figcaption>
                <div class="caption-items">
                  <h4><?php echo wp_trim_words( get_the_title(), 20 ); ?></h4>
                </div>
              </figcaption>
            </figure>
            </a> 
            </li>
          <?php endwhile; wp_reset_postdata();?>
        </ul>
      </div>
    </aside>
  </div>
</section>
<?php get_footer();