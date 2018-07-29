import { render } from 'react-testing-library';
import Banner from './Banner';

describe('Banner at the top of the page', () => {
  test('the component loads correctly', () => {
    const component = render(<Banner />);
    expect(component).toMatchSnapshot();
  });
});
