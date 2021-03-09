import React from "react";
import DayGridItem from "./DayGridItem";

const styles = {
  images: {
    display: "flex",
    flexWrap: "wrap",
  },
};

export default function ProductCategories() {
  const images = [
    {
      url:
        "day-1-card-enabled.png",
      width: "25%",
      routes: [
        { name: "Card 1", to: "/day1-1" },
        { name: "Card 2", to: "/day1-2" },
        { name: "Card 3",to: "/day1-3" },
      ],
    },
    {
      url:
        "day-2-card-enabled.png",
      width: "50%",
      routes: [
        { name: "Card 1", to: "/day2-1" },
        { name: "Card 2", to: "/day2-2" },
        { name: "Card 3", to: "/day2-3" },
      ],
    },
    {
      url:
        "day-3-card-enabled.png",
      width: "25%",
      routes: [
        { name: "Card 1", to: "/day3-1" },
        { name: "Card 2", to: "/day3-2" },
        { name: "Card 3", to: "/day3-3" },
      ],
    },
    {
      url:
        "day-4-card-enabled.png",
      width: "45%",
      routes: [
        { name: "Card 1", to: "/day4-1" },
        { name: "Card 2", to: "/day4-2" },
        { name: "Card 3", to: "/day4-3" },
      ],
    },
    {
      url:
        "day-5-card-enabled.png",
      width: "55%",
      routes: [
        { name: "Card 1", to: "/day5-1" },
        { name: "Card 2", to: "/day5-2" },
        { name: "Card 3", to: "/day5-3" },
      ],
    },
  ];

  return (
    <div style={styles.images}>
      {images.map((image) => (
        <DayGridItem image={image} />
      ))}
    </div>
  );
}
