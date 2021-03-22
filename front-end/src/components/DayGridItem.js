import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Popover from "@material-ui/core/Popover";

const radius = "20px";

const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    width: "100%",
    height: "40vh",
    "&:hover": {
      zIndex: 1,
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15,
    },
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: radius,
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
    borderRadius: radius,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    color: "white",
  },
  popoverOuterBox: {
    backgroundColor: "Grey",
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

export default function DayGridItem({ image }) {
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
      <ButtonBase key={image.title} className={classes.imageWrapper} onClick={handleClick}>
        <Link underline="none">
          <div
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography variant="h1" className={classes.imageTitle}>
              {image.title}
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
            <Link key={i} underline="none" component={RouterLink} to={route.to}>
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
