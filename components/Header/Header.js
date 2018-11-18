// @flow strict
import * as React from 'react';
import { injectGlobal } from 'styled-components';
import Link from 'next/link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { HeaderPrimary, HeaderScrolled, Nav, NavBtn, NavCloseBtn, NavLink } from './Header.styles';
import Flex from '../helpers/Flex.styles';
import { H5 } from '../global/Global.styles';
import { Container, Row, Column, SearchForm } from '../';
import theme from '../global/ThemeVariables';

const NAVIGATION_QUERY: string = gql`
  query navigation {
    navigation(navLocation: PRIMARY_NAVIGATION) {
      id
      title
      url
    }
  }
`;

type Props = {|
  primary: boolean,
|};

type State = {
  navOpen: boolean,
};

class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    };
  }
  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    });
  };
  render() {
    const { navOpen } = this.state;
    const { primary } = this.props;
    return (
      <div>
        <HeaderPrimary>
          <Container fluid>
            <Row>
              <Flex align="center">
                <Column xs={4}>
                  <NavBtn onClick={this.toggleNav}>
                    {primary ? <H5 secondary>Menu</H5> : <H5>Menu</H5>}
                  </NavBtn>
                  <Query query={NAVIGATION_QUERY}>
                    {({ loading, error, data }: Props) => {
                      if (loading) return 'Loading...';
                      if (error) return `Error! ${error.message}`;
                      const { navigation } = data;

                      return navOpen ? (
                        <Nav>
                          <NavCloseBtn onClick={this.toggleNav}>X</NavCloseBtn>
                          <div>
                            {navigation.map(item => (
                              <Link key={item.id} href={item.url} passHref>
                                <NavLink>{item.title}</NavLink>
                              </Link>
                            ))}
                          </div>
                        </Nav>
                      ) : null;
                    }}
                  </Query>
                </Column>
                <Column xs={4}>
                  <a href="/">
                    <Flex align="center" justify="center">
                      {primary ? (
                        <img
                          style={{ maxWidth: '120px' }}
                          src="https://abbeymillhomes.co.uk/wp-content/themes/abbeymill-v2/assets/images/abbeymill-logo-white.png"
                          alt="test"
                        />
                      ) : (
                        <img
                          style={{ maxWidth: '120px' }}
                          src="https://abbeymillhomes.co.uk/wp-content/themes/abbeymill-v2/assets/images/abbeymill-logo-black.png"
                          alt="test"
                        />
                      )}

                      {/*
                  <img style="max-width: 54px;" src="<?php bloginfo('template_directory'); ?>/assets/images/logo-lg.png" alt="<?php bloginfo('name'); ?>">
                  <img style="max-width: 54px;" src="<?php bloginfo('template_directory'); ?>/assets/images/logo-dark.png" alt="<?php bloginfo('name'); ?>">
                */}
                    </Flex>
                  </a>
                </Column>
                <Column xs={4}>
                  <SearchForm alt={primary} primary />
                </Column>
              </Flex>
            </Row>
          </Container>
        </HeaderPrimary>
        <HeaderScrolled>
          <div />
        </HeaderScrolled>
      </div>
    );
  }
}

export default Header;

// <header class="header header--primary">
//   <div class="container-fluid">
//     <div class="row">
//       <div class="flex align-center">

//         <div class="col-xs-4">
//           <button class="js-nav-btn | nav__button">
//             <h5 class="header__nav-toggle">Menu</h5>
//           </button>
//           <nav class="flex align-center justify-center | nav nav--primary">
//             <button class="js-nav-btn | nav__close">X</button>
//             <?php
//           if (has_nav_menu('primary_navigation')) :
//             wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
//           endif;
//           ?>
//           </nav>
//         </div>
//         <div class="col-xs-4">
//           <a class="flex align-center justify-center | logo logo--primary" href="<?= esc_url(home_url('/')); ?>">
//             <?php if( is_front_page() ) { ?>
//             <img style="max-width: 54px;" src="<?php bloginfo('template_directory'); ?>/assets/images/logo-lg.png" alt="<?php bloginfo('name'); ?>">
//             <?php } else { ?>
//             <img style="max-width: 54px;" src="<?php bloginfo('template_directory'); ?>/assets/images/logo-dark.png" alt="<?php bloginfo('name'); ?>">

//             <?php } ?>
//             <h1 class="hidden-xs | logo__text | hidden">
//               <?php bloginfo('name'); ?>
//             </h1>
//           </a>
//         </div>
//         <div class="col-xs-4">
//           <div class="search search--primary">
//             <?php get_search_form(); ?>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>
// <header class="header header--scrolled">
//   <div class="container-fluid">
//     <div class="row">
//       <div class="flex align-center">
//         <div class="col-xs-4">
//           <button class="js-nav-btn | nav__button">
//             <h5 class="header__nav-toggle">Menu</h5>
//           </button>
//           <nav class="flex align-center justify-center | nav nav--primary">
//             <button class="js-nav-btn | nav__close">X</button>
//             <?php
//           if (has_nav_menu('primary_navigation')) :
//             wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
//           endif;
//           ?>
//           </nav>
//         </div>
//         <div class="col-xs-4">
//           <a class="flex align-center justify-center | logo logo--primary" href="<?= esc_url(home_url('/')); ?>">
//             <img style="max-width: 54px;" src="<?php bloginfo('template_directory'); ?>/assets/images/logo-dark.png" alt="<?php bloginfo('name'); ?>">
//             <h1 class="hidden-xs | logo__text">
//               <?php bloginfo('name'); ?>
//             </h1>
//           </a>
//         </div>
//         <div class="col-xs-4">
//           <div class="search search--primary">
//             <?php get_search_form(); ?>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>

injectGlobal`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, picture {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
* {
  box-sizing: border-box;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, picture {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html {
  font-family: ${theme.fontPrimary};
  font-weight:${theme.fontLight};
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  @include font-size(14, 18);
  font-size: 14px;
  line-height: 18px;
  font-weight: 300;
  color: ${theme.fontColorPrimary};
}
a {
  color: ${theme.fontColorPrimary};
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: ${theme.fontColorPrimary};
  }
}

`;
