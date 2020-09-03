import React from "react";
import Episodes from "./Episodes";
import { render } from "@testing-library/react";
import { episodes } from "./episodeData";

test("Episodes list shows list of episodes when rendered with episode data", () => {
  // Arrange

  const { getAllByTestId, queryAllByTestId, rerender } = render(
    <Episodes episodes={[]} />
  );
  const initialEpisodes = queryAllByTestId(/episode/i);
  expect(initialEpisodes).toHaveLength(0);

  // Act
  rerender(<Episodes episodes={episodes} />);
  const loadedEpisodes = getAllByTestId(/episode/i);
  expect(loadedEpisodes).toHaveLength(5);

  // Assert
});
