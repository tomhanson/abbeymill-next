import { render } from 'react-testing-library';
import CallToAction from './CallToAction';

const props = {
  image: {
    url: 'testurl',
    width: 20,
    height: 20,
  },
  headline: 'test headline',
  subHeadline: 'test subheadline',
};

describe('CallToAction component', () => {
  test('the component loads correctly', () => {
    const component = render(<CallToAction {...props} />);
    expect(component).toMatchSnapshot();
  });
});
