import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from '../components/Layout';
import { Container, Column, Row } from '../components/Grid/Grid.styles';
import Button from '../components/button/Button';
import Banner from '../components/banner/Banner';
import { H1 } from '../components/global/Global.styles';

import '../components/css/base.scss';

type homeProps = {
  homeBannerImage: string,
  home_testimonials_subheadline: string,
  home_testimonials_headline: string,
  home_bottom_content_subheadline: string,
  home_bottom_content_headline: string,
  home_top_content: string,
  home_banner_video: string,
  home_banner_headline: string,
};

type Home = {
  home: [homeProps],
};

type Props = {
  data: Home,
  loading: boolean,
  error: boolean,
};

type EmptyProps = {};
type State = {};

const HOME_QUERY: string = gql`
  query home {
    pages(page: "home") {
      home {
        bannerHeadline
        testimonialsSubheadline
        testimonialsHeadline
        bottomContentHeadline
        bottomContentSubheadline
        topContent
        bannerVideo
        bannerHeadline
        bannerImage {
          propertyTileMd {
            width
            height
            url
          }
        }
      }
    }
  }
`;

class Index extends Component<EmptyProps, State> {
  test() {
    console.log(this);
  }
  render() {
    return (
      <Layout>
        <Query query={HOME_QUERY}>
          {({ loading, error, data }: Props) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            const { home } = data.pages;
            return (
              <div>
                <Banner img={home.bannerImage.propertyTileMd.url}>
                  <Container>
                    <Row>
                      <Column xs={12}>
                        <H1 secondary>{home.bannerHeadline}</H1>
                        <div
                          className="spacing-sm--top-only | play-icon"
                          data-toggle="modal"
                          data-target="#videoModal"
                        >
                          <img src="../../../assets/play-icon.svg" alt="Play Video" />
                        </div>

                        <Button primary>View all properties</Button>
                      </Column>
                    </Row>
                  </Container>
                </Banner>
                <section
                  id="section:content-block"
                  className="spacing-lg | content-block content-block--secondary"
                >
                  <Container>
                    <Row>
                      <Column md={10} mdOffset={1}>
                        <div
                          className="wysiwyg"
                          dangerouslySetInnerHTML={{ __html: home.topContent }}
                        />
                      </Column>
                    </Row>
                  </Container>
                </section>
                <section id="section:slider" className="slider slider--primary">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12">
                        <ul className="home-slider">
                          {}
                          {/* <?php while( have_rows('home_properties') ) : the_row(); ?>
          <?php
                            $post_object = get_sub_field('property');
                              // override $post
                              $post = $post_object;
                              setup_postdata( $post );
                
                              ?> */}
                          <li>
                            {/* <?php get_template_part('templates/content', 'tile-primary'); ?> */}
                          </li>
                          {/* <?php wp_reset_postdata(); endwhile; ?> */}
                        </ul>
                        <div className="text-center | spacing-md--top-only spacing-lg--btm-only">
                          <a href="/our-properties" className="btn btn--primary">
                            View all properties
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            );
          }}
        </Query>
      </Layout>
    );
  }
}
export default Index;

/* <section id="section:slider" class="slider slider--primary">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <ul class="home-slider">
          <?php while( have_rows('home_properties') ) : the_row(); ?>
          <?php
            $post_object = get_sub_field('property');
              // override $post
              $post = $post_object;
              setup_postdata( $post ); 

              ?>
            <li>
              <?php get_template_part('templates/content', 'tile-primary'); ?>
            </li>
            <?php wp_reset_postdata(); endwhile; ?>
        </ul>
        <div class="text-center | spacing-md--top-only spacing-lg--btm-only">
          <a href="/our-properties" class="btn btn--primary">
            View all properties
          </a>
        </div>
      </div>
    </div>
  </div>
</section> */
