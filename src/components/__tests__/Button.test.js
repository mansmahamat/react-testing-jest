import React from "react";
import renderer from 'react-test-renderer';
import {render, screen, cleanup} from '@testing-library/react';
import Button from '../Button'


describe('Button components', () => {
  test('Should Button', () => {
    const label = "Click me"

    render(<Button label={label} />)

    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click me');
  })

  test("Should have class button-style", () => {
    const label = "Click me"

    const { queryByTestId } = render(
      <Button  label={label} />
    )
    expect(queryByTestId("button")).toHaveClass("button-style")

  })

  test("Should render the right backgound color", () => {
    const label = "Click me"

    const { queryByTestId } = render(
      <Button  label={label} />
    )
    expect(queryByTestId("button")).toHaveStyle("background-color: lightseagreen;")
  })

  test("Should render a link button if href is defined", () => {
    const { queryByTestId } = render(
      <Button  innerText="Button" href="https://brocc.se" />
    )

    expect(queryByTestId("button")).toBeTruthy()
  })

});