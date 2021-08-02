// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import CheckboxWithLabel from './checkboxwithlabel';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  const {queryByLabelText, getByLabelText} = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();
  // this will be pass bcoz bcoz at start checkbox will have label as off 

  fireEvent.click(getByLabelText(/off/i));
  // by this we are mocking the click on checkbox thus changing its value to true

  expect(queryByLabelText(/on/i)).toBeTruthy();

  // this will pass as click on above line will change the label, thus label will be on 
  
});