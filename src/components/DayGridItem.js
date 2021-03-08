import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles((theme) => ({
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
  popoverOuterBox: {
    backgroundColor: "darkGrey",
  },
  popoverInnerBox: {
    backgroundColor: "white",
  },
  popoverButton: {
    width: "100%",
    height: "100%",
    padding: `${theme.spacing(3)}px`,
  },
}));

export default function ProductCategories({ image }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <ButtonBase
        key={image.title}
        className={classes.imageWrapper}
        style={{
          width: image.width,
        }}
        onClick={handleClick}
      >
        <Link>
          <div
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography component="h3" variant="h6" color="inherit" className={classes.imageTitle}>
              {image.title}
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </Link>
      </ButtonBase>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <Box className={classes.popoverOuterBox} boxShadow={1} borderRadius={4} p={2}>
          {image.routes.map((route, i) => (
            <Link underline="none" component={RouterLink} to={route.to}>
              <Box className={classes.popoverInnerBox} boxShadow={1} borderRadius={4} my={2}>
                <Button className={classes.popoverButton}>
                  <Typography className={classes.typography}>{route.name}</Typography>
                </Button>
              </Box>
            </Link>
          ))}
        </Box>
      </Popover>
    </>
  );
}
