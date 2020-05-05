import React from 'react';
import { mount  } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { SignInComponent }  from './SignInComponent';

const buttonText = 'Sign In';
let wrapped = mount (<SignInComponent />);

describe('Signin', () => {
    it('should render Component correctly', () => {   
      expect(wrapped).toMatchSnapshot();
    });

    it('renders the signin button', () => { 
      expect(wrapped.find('button').text()).toEqual(buttonText);
    });
  });