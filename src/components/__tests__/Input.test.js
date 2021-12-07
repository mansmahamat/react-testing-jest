import React from "react";
import renderer from 'react-test-renderer';
import {render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input'

describe("<Input />", () => {
    test("Should have placeholder Name and input", () => {
      const { queryByTestId } = render(<Input placeholder="Name" />)
      
    expect(screen.getByPlaceholderText('Name@email.fr')).toBeInTheDocument();  
    expect(queryByTestId("input")).toBeInTheDocument();
    })


    test('render email input', () => {
        const { queryByTestId } = render(<Input placeholder="Name" />)

        expect(queryByTestId("input")).toHaveAttribute("type", "text");
      });

  })