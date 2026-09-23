import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListMockData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search resList for Andhra text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );

  const resCards = screen.getAllByTestId("resCard");

  expect(resCards.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  //   const searchInput = screen.getByPlaceholderText("Search for restaurants");

  const searchInput = screen.getByTestId("searchInput");
  //   expect(searchInput).toBeInTheDocument();

  //onChange event in input element takes a function where we get data inside target.value of the param, So we just mocked it here
  fireEvent.change(searchInput, { target: { value: "Andhra" } });

  fireEvent.click(searchBtn);

  //screen should load 2 cards as I see 2 restaurants which includes name "Andhra"
  const filteredResCards = screen.getAllByTestId("resCard");

  expect(filteredResCards.length).toBe(2);
});

it("Should filter Top Rated Restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
  });

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const filteredResCards = screen.getAllByTestId("resCard");

  expect(filteredResCards.length).toBe(6);
});
