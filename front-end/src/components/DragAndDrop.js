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
  { type: "man-student-medium-skin-tone", src: "openmoji_man-student-medium-skin-tone.png" },
  {
    type: "woman-student-medium-dark-skin-tone",
    src: "openmoji_woman-student-medium-dark-skin-tone.png",
  },
  { type: "student", src: "openmoji_student.png" },
  { type: "woman-student", src: "openmoji_woman-student.png" },
];

function defaultState(labelA, labelB) {
  return {
    a: {
      label: labelA,
      figures: [],
    },
    b: {
      label: labelB,
      figures: [],
    },
    c1: {
      label: "",
      figures: [],
    },
    c2: {
      label: "",
      figures: [],
    },
    c3: {
      label: "",
      figures: [],
    },
    c4: {
      label: "",
      figures: [],
    },
    c5: {
      label: "",
      figures: [],
    },
    c6: {
      label: "",
      figures: [],
    },
  };
}

export default function DragAndDrop({ labelA, labelB, labelC, state, setState }) {
  const borderSize = 3;
  const borderColor = "error.main";
  const textColor = "black";

  state = state || defaultState(labelA, labelB);

  const stateRef = useRef();
  stateRef.current = state;
  const [isDragging, setIsDragging] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  function clearAll() {
    setState(defaultState(labelA, labelB));
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
                    figures={state.a.figures}
                    setFigures={(figures) =>
                      setState({
                        ...stateRef.current,
                        a: {
                          label: labelA,
                          figures,
                        },
                      })
                    }
                    isDragging={isDragging}
                    height={280}
                  >
                    <Box display="flex" flexDirection="row" flexWrap="wrap">
                      {state.a.figures.map((figure, i) => (
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
                    figures={state.b.figures}
                    setFigures={(figures) =>
                      setState({
                        ...stateRef.current,
                        b: {
                          label: labelB,
                          figures,
                        },
                      })
                    }
                    isDragging={isDragging}
                    height={280}
                  >
                    <Box display="flex" flexDirection="row" flexWrap="wrap">
                      {state.b.figures.map((figure, i) => (
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
                        state={state.c1}
                        setState={(areaState) =>
                          setState({
                            ...stateRef.current,
                            c1: areaState,
                          })
                        }
                        isDragging={isDragging}
                        align="left"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <OtherDropArea
                        state={state.c2}
                        setState={(areaState) =>
                          setState({
                            ...stateRef.current,
                            c2: areaState,
                          })
                        }
                        isDragging={isDragging}
                        align="right"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <OtherDropArea
                        state={state.c3}
                        setState={(areaState) =>
                          setState({
                            ...stateRef.current,
                            c3: areaState,
                          })
                        }
                        isDragging={isDragging}
                        align="left"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <OtherDropArea
                        state={state.c4}
                        setState={(areaState) =>
                          setState({
                            ...stateRef.current,
                            c4: areaState,
                          })
                        }
                        isDragging={isDragging}
                        align="right"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <OtherDropArea
                        state={state.c5}
                        setState={(areaState) =>
                          setState({
                            ...stateRef.current,
                            c5: areaState,
                          })
                        }
                        isDragging={isDragging}
                        align="left"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <OtherDropArea
                        state={state.c6}
                        setState={(areaState) =>
                          setState({
                            ...stateRef.current,
                            c6: areaState,
                          })
                        }
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

function OtherDropArea({ state, setState, isDragging, align }) {
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
        figures={state.figures}
        setFigures={(figures) => setState({
          ...state,
          figures,
        })}
        isDragging={isDragging}
        height={100}
        width={100}
      >
        {state.figures.map((figure, i) => (
          <Figure key={i} figure={figure} />
        ))}
      </DropArea>
      {align === "left" && (
        <>
          &nbsp;&nbsp;
          <input
            type="text"
            style={styles.textArea}
            value={state.label}
            onChange={(event) => setState({
              ...state,
              label: event.target.value,
            })}
          />
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
