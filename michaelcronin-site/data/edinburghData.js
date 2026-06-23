export const tripInfo = {
  title: "EDINBURGH",
  dates: "",
  description: "",
  heroColor: "#2a2c38",
  heroArtwork: "/edinburgh/EdinburghHero.jpg",        // add e.g. "/edinburgh/hero.jpg" when you find a painting
  heroArtworkCredit: "Edinburgh From Calton Hill - Myles Birket Foster (English, 1825-1899)",
};

// Sections — add artwork + artworkCredit when you find paintings
// artwork: "/edinburgh/oldtown.jpg"
// artworkCredit: "Title — Artist (Year)"
export const sections = [
  { location: "Old Town",  color: "#252830", artwork: null, artworkCredit: null },
  { location: "New Town",  color: "#1e2838", artwork: null, artworkCredit: null },
  { location: "Leith",     color: "#152030", artwork: null, artworkCredit: null },
];

// To add photos:
// 1. Drop image into /public/edinburgh/
// 2. Add an entry below — location must match one of the section names above
export const photos = [];
