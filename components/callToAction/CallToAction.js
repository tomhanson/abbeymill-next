// @flow strict

import * as React from 'react';
import { Container, Column, Row, Button } from '../index';
import { Cta, CtaContent, CtaGridOverride } from './CallToAction.styles';

import { H2, H5 } from '../global/Global.styles';

type Props = {
  image: {
    url: string,
    width: string,
    height: string,
  },
  headline: string,
  subHeadline: string,
};

function CallToAction({ image, headline, subHeadline }) {
  console.log(image);
  return (
    <Cta id="section:cta" className="primary-brand-bg | cta cta--primary">
      <div className="max-width-wrapper">
        <Container>
          <Row>
            {/* <?php $img = get_field('home_content_image'); ?> */}
            <Column md={6}>
              <CtaGridOverride image={image} />
            </Column>
            <Column
              md={6}
              mdOffset={6}
              lg={5}
              lgOffset={7}
              className="col-md-6 col-md-offset-6 col-lg-5 col-lg-offset-7 | cta__content"
            >
              <CtaContent>
                <H2 marginBottom={15}>{headline}</H2>
                <H5 marginBottom={15} secondary>
                  {subHeadline}
                </H5>
                <Button primary href="/about-us">
                  Read our story
                </Button>
              </CtaContent>
            </Column>
          </Row>
        </Container>
      </div>
    </Cta>
  );
}

export default CallToAction;
