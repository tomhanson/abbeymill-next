import { render } from 'react-testing-library';
import Button from './Button';

const defaultProps = {
  url: '/test/test',
};

describe('Button component', () => {
  test('the component loads correctly with only default props', () => {
    const component = render(<Button {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
  test('the component loads correctly with primary set to true', () => {
    const component = render(<Button {...defaultProps} primary />);
    expect(component).toMatchSnapshot();
  });
  test('the component loads correctly with secondary set to true', () => {
    const component = render(<Button {...defaultProps} secondary />);
    expect(component).toMatchSnapshot();
  });
});
