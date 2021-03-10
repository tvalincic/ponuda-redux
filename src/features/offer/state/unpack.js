import unpack from "./unpack_gen";

function index(d) {
  unpack({ S: d });
  return d;
}

function sportPanel(d) {
  unpack({ S: { x: d } });
  return d;
}

function dogadjaj(d) {
  unpack({ S: { x: { do: { x: d } } } });
  return d;
}

function builder(d) {
  unpack({ S: { x: { do: d } } });
  return d;
}

function builderPonuda(d) {
  unpack({ S: { x: { do: d } } });
  return d;
}

export { index, sportPanel, dogadjaj, builder, builderPonuda };
