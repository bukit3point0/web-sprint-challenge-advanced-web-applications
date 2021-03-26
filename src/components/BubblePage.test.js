import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

import {handlers as mockHandlers} from '../mocks/handlers'
jest.mock('../mocks/handlers')

const mockColors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  }
]

test("Renders BubblePage without errors", () => {
  render(<BubblePage/>)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  render(<BubblePage/>)
  mockHandlers.mockResolvedValueOnce(mockColors)

  // const color = await screen.findAllByTestId('color-test')
  // console.log(color)

  // expect(color).toBeInTheDocument()

  await waitFor(() => {
    const color = screen.findAllByTestId('color-test')
    expect(color).toBeInTheDocument()
  })
});

//Task List  
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading