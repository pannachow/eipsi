import Grid from "@material-ui/core/Grid";
import DayGridItem from "./DayGridItem";

export default function DayGrid() {
  const images = [
    {
      url: "card_background.png",
      size: 3,
      dayNr: 1,
      routes: [
        { name: "Card 1", to: "/day1-1" },
        { name: "Card 2", to: "/day1-2" },
        // { name: "Card 3", to: "/day1-3" },
      ],
    },
    {
      url: "card_background.png",
      size: 6,
      dayNr: 2,
      routes: [
        { name: "Card 1", to: "/day2-1" },
        { name: "Card 2", to: "/day2-2" },
        // { name: "Card 3", to: "/day2-3" },
      ],
    },
    {
      url: "card_background.png",
      size: 3,
      dayNr: 3,
      routes: [
        { name: "Card 1", to: "/day3-1" },
        { name: "Card 2", to: "/day3-2" },
        // { name: "Card 3", to: "/day3-3" },
      ],
    },
    {
      url: "card_background.png",
      size: 5,
      dayNr: 4,
      routes: [
        { name: "Card 1", to: "/day4-1" },
        { name: "Card 2", to: "/day4-2" },
        // { name: "Card 3", to: "/day4-3" },
      ],
    },
    {
      url: "card_background.png",
      dayNr: 5,
      size: 7,
      routes: [
        { name: "Card 1", to: "/day5-1" },
        { name: "Card 2", to: "/day5-2" },
      ],
    },
  ];

  return (
    <Grid container spacing={1}>
      {images.map((image, i) => (
        <Grid key={i} item xs={12} md={image.size}>
          <DayGridItem image={image} color="white"/>
        </Grid>
      ))}
    </Grid>
  );
}
