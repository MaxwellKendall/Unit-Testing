// what would another dev do to break this component? IT would be chaning the text in the following example

import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use describe to group together similar tests
describe('Test for the App Component', () => {

  //use it to test a signle attribute of a target
  it('shows the correct text', () => {

    // create an instance of App
    const component = renderComponent(App);

    // Use 'expect' to make an 'assertion' about a target
    // (here the target is the componenet 'App')

    expect(component).to.contain('React simple starter');

  });

})
