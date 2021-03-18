import { useState, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const styles = {
  text: {
    fontWeight: 600,
    fontSize: "18px",
  },
  textArea: {
    height: "45px",
    background: "yellow",
    borderRadius: "20px",
    display: "block",
    marginTop: "10px",
    flexGrow: 1,
  },
  clear: {
    width: "92px",
    height: "92px",
  },
};

const availableFigures = [
  { type: 1, src: "openmoji_man-student-medium-skin-tone.png" },
  {
    type: 2,
    src: "openmoji_woman-student-medium-dark-skin-tone.png",
  },
  { type: 3, src: "openmoji_student.png" },
  { type: 4, src: "openmoji_woman-student.png" },
];

export default function DragAndDrop({ labelA, labelB, labelC }) {
  const borderSize = 3;
  const borderColor = "error.main";
  const textColor = "black";
  const [aFigures, setAFigures] = useState([]);
  const [bFigures, setBFigures] = useState([]);
  const [c1Figures, setC1Figures] = useState([]);
  const [c2Figures, setC2Figures] = useState([]);
  const [c3Figures, setC3Figures] = useState([]);
  const [c4Figures, setC4Figures] = useState([]);
  const [c5Figures, setC5Figures] = useState([]);
  const [c6Figures, setC6Figures] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  function clearAll() {
    setAFigures([]);
    setBFigures([]);
    setC1Figures([]);
    setC2Figures([]);
    setC3Figures([]);
    setC4Figures([]);
    setC5Figures([]);
    setC6Figures([]);
  }

  return (
    <Container maxWidth="md">
      <DndProvider backend={HTML5Backend}>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Box
              display="flex"
              flexDirection={isDesktop ? "column" : "row"}
              flexWrap="wrap"
              alignItems="center"
            >
              <IconButton onClick={() => clearAll()} style={styles.clear}>
                <img alt="vector" src="vector.svg" />
              </IconButton>
              {availableFigures.map((figure) => (
                <DraggableFigure key={figure.type} figure={figure} setIsDragging={setIsDragging} />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={10}>
            <Grid container>
              <Grid item xs={6}>
                <Box
                  p={1}
                  border={borderSize}
                  borderLeft={0}
                  borderTop={0}
                  borderColor={borderColor}
                  color={textColor}
                >
                  <Typography style={styles.text} align="right">
                    {labelA}
                  </Typography>
                  <DropArea
                    limit={6}
                    figures={aFigures}
                    setFigures={setAFigures}
                    isDragging={isDragging}
                    height={280}
                  >
                    <Box display="flex" flexDirection="row" flexWrap="wrap">
                      {aFigures.map((figure, i) => (
                        <Figure key={i} figure={figure} />
                      ))}
                    </Box>
                  </DropArea>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  p={1}
                  border={borderSize}
                  borderRight={0}
                  borderTop={0}
                  borderColor={borderColor}
                  color={textColor}
                >
                  <Typography style={styles.text} align="left">
                    {labelB}
                  </Typography>
                  <DropArea
                    limit={6}
                    figures={bFigures}
                    setFigures={setBFigures}
                    isDragging={isDragging}
                    height={280}
                  >
                    <Box display="flex" flexDirection="row" flexWrap="wrap">
                      {bFigures.map((figure, i) => (
                        <Figure key={i} figure={figure} />
                      ))}
                    </Box>
                  </DropArea>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box p={1} borderTop={borderSize} borderColor={borderColor} color={textColor}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography style={styles.text} align="center">
                        {labelC}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <OtherDropArea
                        figures={c1Figures}
                        setFigures={setC1Figures}
                        isDragging={isDragging}
                        align="left"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <OtherDropArea
                        figures={c2Figures}
                        setFigures={setC2Figures}
                        isDragging={isDragging}
                        align="right"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <OtherDropArea
                        figures={c3Figures}
                        setFigures={setC3Figures}
                        isDragging={isDragging}
                        align="left"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <OtherDropArea
                        figures={c4Figures}
                        setFigures={setC4Figures}
                        isDragging={isDragging}
                        align="right"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <OtherDropArea
                        figures={c5Figures}
                        setFigures={setC5Figures}
                        isDragging={isDragging}
                        align="left"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <OtherDropArea
                        figures={c6Figures}
                        setFigures={setC6Figures}
                        isDragging={isDragging}
                        align="right"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DndProvider>
    </Container>
  );
}

function OtherDropArea({ figures, setFigures, isDragging, align }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent={align === "left" ? "flex-start" : "flex-end"}
    >
      {align === "right" && (
        <>
          <input type="text" style={styles.textArea} />
          &nbsp;&nbsp;
        </>
      )}
      <DropArea
        limit={1}
        figures={figures}
        setFigures={setFigures}
        isDragging={isDragging}
        height={100}
        width={100}
      >
        {figures.map((figure, i) => (
          <Figure key={i} figure={figure} />
        ))}
      </DropArea>
      {align === "left" && (
        <>
          &nbsp;&nbsp;
          <input type="text" style={styles.textArea} />
        </>
      )}
    </Box>
  );
}

function DropArea({ children, figures, setFigures, limit, isDragging, height, width }) {
  const figuresRef = useRef();
  figuresRef.current = figures;

  const canDrop = isDragging && figures.length < limit;

  const [, drop] = useDrop(() => ({
    accept: "student",
    drop: (figure) => {
      const figures = figuresRef.current;
      if (figures.length >= limit) return;
      setFigures([...figures, figure]);
    },
  }));

  return (
    <Box
      ref={drop}
      bgcolor="warning.main"
      borderRadius="10px"
      p={1}
      height={height}
      width={width}
      style={{ opacity: canDrop ? 0.5 : 1 }}
    >
      {children}
    </Box>
  );
}

const figureSize = "92px";
function figureStyle(figure) {
  return {
    backgroundImage: `url(${figure.src})`,
    backgroundSize: "110%",
    backgroundPosition: "center center",
    cursor: "pointer",
  };
}

function DraggableFigure({ figure, setIsDragging }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "student",
      item: () => {
        setIsDragging(true);
        return figure;
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
      end: () => setIsDragging(false),
    }),
    []
  );

  return (
    <Box
      ref={dragRef}
      width={figureSize}
      height={figureSize}
      style={{
        ...figureStyle(figure),
        opacity,
      }}
    />
  );
}

function Figure({ figure }) {
  return <Box width={figureSize} height={figureSize} style={figureStyle(figure)} />;
}
