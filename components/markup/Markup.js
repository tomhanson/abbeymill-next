// @flow strict

import * as React from 'react';

const renderHTML = content => ({ __html: content });

type Props = {
  data: string,
};

const Markup = ({ data }: Props) => <article dangerouslySetInnerHTML={renderHTML(data)} />;

export default Markup;
