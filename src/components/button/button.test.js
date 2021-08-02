import React from "react";
import Button from "./button";

import {render, screen, fireEvent, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom"
import { shallow, configure, mount } from "enzyme"
import renderer from "react-test-renderer"
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

afterEach(() => cleanup())

it("renders button successfully", () => {
    const { getByTestId } = render(<Button label="Click me" />)
    expect(getByTestId('button')).toHaveTextContent("Click me")
    expect(getByTestId('button')).toBeInTheDocument();
})

// above test  basically checks that the component is rendered in DOM or not. If rendered it gives varities of functions
//we have used getTestById to basically fetch the data by its test-id we passed in button.js component. Then we used to check if button rendered have the expected label we passed oe not

it("renders button successfully", () => {
    const { getByTestId } = render(<Button label="Click" />)
    expect(getByTestId('button')).toHaveTextContent("Click")
    // it will fail bcoz we passed label in button as "Click" but we are expecting "Click " , 
    // so it should match exactly
})

it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save" />).toJSON() // create() creates a new snapshot in the __snapshots__ folder
    expect(tree).toMatchSnapshot();
    // snapshot here means that it will create a copy of dom object in a file of the component we passed, BUTTON in our case
    // once snapshot is created for the passed component and if we change the component, we need to run command
    // `npm test -- -u`
})

test('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Submit</Button>)
    let event = fireEvent.click(screen.getByText(/submit/i))
    expect(event).toEqual(true)
  })

  // above test siulates click on a button 