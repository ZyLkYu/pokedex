const colorByType = {
  normal: "#BCBCA1",
  fighting: "#BC5442",
  flying: "#669AFF",
  poison: "#AB549A",
  ground: "#DEBC54",
  rock: "#BCAC66",
  bug: "#ABBC1C",
  ghost: "#6666BC",
  steel: "#ABABCC",
  fire: "#F03030",
  water: "#2F9AFF",
  grass: "#78CD54",
  electric: "#FFCD30",
  psychic: "#FF549A",
  ice: "#7866EF",
  dragon: "#7866EF",
  dark: "#785442",
  fairy: "#FFACEF",
  unknown: "",
  shadow: "",
};

const colorByStat = {
  HP: "[&>div]:bg-red-500 bg-slate-100",
  ATK: "[&>div]:bg-orange-500 bg-slate-100",
  DEF: "[&>div]:bg-yellow-500 bg-slate-100",
  SpA: "[&>div]:bg-blue-300 bg-slate-100",
  SpD: "[&>div]:bg-green-500 bg-slate-100",
  SPD: "[&>div]:bg-pink-500 bg-slate-100",
  TOT: "[&>div]:bg-blue-500 bg-blue-300",
};

export { colorByType, colorByStat };
