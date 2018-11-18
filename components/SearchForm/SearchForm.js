// @flow strict

import * as React from 'react';

import {
  SearchForm as StyledSearchForm,
  SearchFormWrapper,
  SearchInput,
  SearchButton,
} from './SearchForm.styles';

import { ScreenReaderOnlyText } from '../utils/ScreenReaderOnly.styles';

type Props = {
  primary: boolean,
  alt: boolean,
};

const SearchForm = ({ alt, primary = false }: Props) => (
  <SearchFormWrapper primary={primary}>
    <StyledSearchForm primary={primary}>
      <label>
        <ScreenReaderOnlyText>Search For</ScreenReaderOnlyText>
        <SearchInput alt={alt} primary={primary} type="text" placeholder="Search..." />
      </label>
      <SearchButton primary={primary} type="submit" value="Search" />
    </StyledSearchForm>
  </SearchFormWrapper>
);

export default SearchForm;
