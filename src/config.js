const layersOrder = [
  { name: "bgs", number: 10 },
  { name: "skins", number: 6 },
  { name: "shirts", number: 14 },
  { name: "pants", number: 5 },
  { name: "jacket", number: 25 },
  { name: "face", number: 17 },
  { name: "head", number: 20 },
  { name: "staff", number: 8 },
  { name: "extras", number: 10 },
  { name: "rare", number: 50 },
];
  
const format = {
    width: 1080,
    height: 1350
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 4000;

module.exports = { layersOrder, format, rarity, defaultEdition };