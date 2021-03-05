import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Underline from "./Underline";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover": {
      zIndex: 1,
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15,
    },
    "&:hover $imageMarked": {
      opacity: 0,
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor",
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function ProductCategories() {
  const classes = useStyles();

  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80",
      title: "DAY 1",
      width: "40%",
      route: "/day1",
    },
    {
      url:
        "https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80",
      title: "DAY 2",
      width: "20%",
      route: "/day2",
    },
    {
      url:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80",
      title: "DAY 3",
      width: "40%",
      route: "/day3",
    },
    {
      url:
        "https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80",
      title: "DAY 4",
      width: "40%",
      route: "/day4",
    },
    {
      url:
        "https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80",
      title: "DAY 5",
      width: "60%",
      route: "/day5",
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography align="center" variant="h3">
        TELL US MORE
      </Typography>
      <Underline />
      <br/>
      <Typography align="center" variant="h6">
        In the upcoming 5 days, 5 cards will be presented to you with numerous tasks. These tasks
        all relate to our EIPSI project which revolves around encouraging teachers to use
        research-informed resources related to inclusivity in the classrooms. We ask you, the
        teacher, to complete the daily tasks and document this on our website. For every day, there
        will be a different page to record your findings, answers, and reactions. This data will be
        used and analyzed during our continuous progress of the project. Please do not include any
        personal information that may harm the privacy of yourself and others. We hope you enjoy the
        upcoming days. Thank you for your participation and feel free to contact us for any
        additional information. Team EIPSI "contact information"
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <Link component={RouterLink} to={image.route}>
              <div
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <div className={classes.imageBackdrop} />
              <div className={classes.imageButton}>
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <div className={classes.imageMarked} />
                </Typography>
              </div>
            </Link>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}
