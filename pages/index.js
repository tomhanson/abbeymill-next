import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Slider from 'react-slick';
import gql from 'graphql-tag';
import Layout from '../components/Layout';

import { H1 } from '../components/global/Global.styles';
import Flex from '../components/helpers/Flex.styles';
import {
  Container,
  Column,
  Row,
  Banner,
  Section,
  Spacer,
  Icon,
  DownArrow,
  CallToAction,
} from '../components/index';

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
  home: homeProps,
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
      ... on Home {
        bannerHeadline
        testimonialsSubheadline
        testimonialsHeadline
        bottomContentHeadline
        bottomContentSubheadline
        contentImage(size: large) {
          width
          height
          width
          url
        }
        topContent
        bannerVideo
        bannerHeadline
        bannerImage(size: bgLg) {
          width
          height
          url
        }
        sliderProperties {
          title
          mainPhoto(size: propertyTileSm) {
            url
            width
            height
          }
        }
      }
    }
  }
`;

class Index extends Component<EmptyProps, State> {
  settings = {
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
  };
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
            const {
              bannerImage,
              bannerHeadline,
              topContent,
              sliderProperties,
              bottomContentHeadline,
              bottomContentSubheadline,
              contentImage,
            } = data.pages;

            return (
              <div>
                <Banner img={bannerImage.url}>
                  <Flex align="center" justify="center">
                    <Container>
                      <Row>
                        <Column xs={12}>
                          <H1 secondary>{bannerHeadline}</H1>
                          <div
                            className="spacing-sm--top-only | play-icon"
                            data-toggle="modal"
                            data-target="#videoModal"
                          >
                            <Spacer paddingTop={20}>
                              <Icon
                                src="/static/assets/play-icon.svg"
                                alt="Play Video"
                                maxWidth={50}
                              />
                            </Spacer>
                          </div>
                        </Column>
                      </Row>
                    </Container>
                  </Flex>
                  <DownArrow id="js-home-scroll" className="down-arrow">
                    <Icon src="/static/assets/down-arrow.svg" alt="Scroll Down" maxWidth={40} />
                    {/* <img src="https://abbeymillhomes.co.uk/wp-content/themes/abbeymill-v2/assets/images/icons/down-arrow.svg" alt="Scroll Down"> */}
                  </DownArrow>
                </Banner>
                <Section paddingTop={65} paddingBottom={65}>
                  <Container>
                    <Row>
                      <Column md={10} mdOffset={1}>
                        <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: topContent }} />
                      </Column>
                    </Row>
                  </Container>
                </Section>
                <section id="section:slider" className="slider slider--primary">
                  <Container>
                    <Row>
                      <Column xs={12}>
                        <ul className="home-slider">
                          slider
                          <Slider {...this.settings}>
                            {sliderProperties.map(({ mainPhoto, title }) => (
                              <img
                                key={mainPhoto.url}
                                src={mainPhoto.url}
                                alt={title}
                                height={mainPhoto.height}
                                width={mainPhoto.width}
                              />
                            ))}
                          </Slider>
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
                      </Column>
                    </Row>
                  </Container>
                </section>
                <CallToAction
                  image={contentImage}
                  headline={bottomContentHeadline}
                  subHeadline={bottomContentSubheadline}
                />
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
