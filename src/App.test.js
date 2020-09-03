import React from "react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { render, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

test("Application will get episode data from the API and display it", async () => {
  // Arrange
  mockFetchShow.mockResolvedValueOnce(episodes);
  const { getByText } = render(<App />);

  await waitFor(() => {
    getByText(/select a season/i);
  });

  // Act
  userEvent.click(getByText(/select a season/i));

  await waitFor(() => {
    getByText(/season 1/i);
  });

  userEvent.click(getByText(/season 1/i));

  await waitFor(() => {
    getByText(/chapter one: the vanishing of will byers/i);
  });

  // Assert
  expect(getByText(/chapter one: the vanishing of will byers/i)).toBeTruthy();
  expect(mockFetchShow).toHaveBeenCalledTimes(1);
});

const episodes = {
  data: {
    id: 2993,
    url: "http://www.tvmaze.com/shows/2993/stranger-things",
    name: "Stranger Things",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Fantasy", "Science-Fiction"],
    status: "Running",
    runtime: 60,
    premiered: "2016-07-15",
    officialSite: "https://www.netflix.com/title/80057281",
    schedule: {
      time: "",
      days: ["Thursday"],
    },
    rating: {
      average: 8.7,
    },
    weight: 98,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null,
    },
    externals: {
      tvrage: 48493,
      thetvdb: 305288,
      imdb: "tt4574334",
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
    summary:
      "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    updated: 1597745578,
    _links: {
      self: {
        href: "http://api.tvmaze.com/shows/2993",
      },
      previousepisode: {
        href: "http://api.tvmaze.com/episodes/1576476",
      },
    },
    _embedded: {
      episodes: [
        {
          id: 553946,
          url:
            "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
          name: "Chapter One: The Vanishing of Will Byers",
          season: 1,
          number: 1,
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
          },
          summary:
            "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/553946",
            },
          },
        },
        {
          id: 1752754,
          url:
            "http://www.tvmaze.com/episodes/1752754/stranger-things-4x01-chapter-one-the-hellfire-club",
          name: "Chapter One: The Hellfire Club",
          season: 4,
          number: 1,
          airdate: "",
          airtime: "",
          airstamp: null,
          runtime: 60,
          image: null,
          summary: null,
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/1752754",
            },
          },
        },
      ],
    },
  },
};
