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
        "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80",
      title: "DAY 1",
      width: "40%",
      routes: [
        { to: "/day1-1" },
        { to: "/day1-2" },
        { to: "/day1-3" },
      ],
    },
    {
      url:
        "https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80",
      title: "DAY 2",
      width: "20%",
      routes: [
        { to: "/day2-1" },
        { to: "/day2-2" },
        { to: "/day2-3" },
      ],
    },
    {
      url:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80",
      title: "DAY 3",
      width: "40%",
      routes: [
        { to: "/day3-1" },
        { to: "/day3-2" },
        { to: "/day3-3" },
      ],
    },
    {
      url:
        "https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80",
      title: "DAY 4",
      width: "40%",
      routes: [
        { to: "/day4-1" },
        { to: "/day4-2" },
        { to: "/day4-3" },
      ],
    },
    {
      url:
        "https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80",
      title: "DAY 5",
      width: "60%",
      routes: [
        { to: "/day5-1" },
        { to: "/day5-2" },
        { to: "/day5-3" },
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
