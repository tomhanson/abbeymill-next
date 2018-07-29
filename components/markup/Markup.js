// @flow strict

import * as React from 'react';

const renderHTML = content => ({ __html: content });

type Props = {
  data: string,
};

const Markup = ({ data }: Props) => (
  <article className="constrained-to-500" dangerouslySetInnerHTML={renderHTML(data)} />
);

export default Markup;
