export const routes: any = {
  "/user-info": {
    name: "Junior",
    portifolio: {
      value: "1,457.53",
      coin: "dolar",
      symbol: "$",
      rentability: 31.82,
      profitability: "up",
    },
  },
  "/funds": [
    {
      id: 1,
      name: "Wind Fund",
      icon: "wind",
      base: "Feather",
      color_theme: "4A88D0",
      current_value: 1047.53,
      rentability: 3.82,
      profitability: "up",
    },
    {
      id: 2,
      name: "Sun Fund",
      icon: "sun",
      color_theme: "F0A719",
      base: "Feather",
      current_value: 987.19,
      rentability: 0.7,
      profitability: "down",
    },
    {
      id: 3,
      name: "Nature Fund",
      icon: "md-leaf-outline",
      color_theme: "0FDF8F",
      base: "Ionicons",
      current_value: 1657.89,
      rentability: 10.32,
      profitability: "up",
    },
    {
      id: 4,
      name: "Oil Fund",
      icon: "water-outline",
      color_theme: "000000",
      base: "Ionicons",
      current_value: 657.89,
      rentability: 20.32,
      profitability: "down",
    },
  ],

  "/news": [
    {
      owner: "Barrrons",
      title: "Bitcoin Falls Below $29,000",
      banner: require("../assets/images/AA1aB1ZK.jpeg"),
    },
    {
      owner: "The Montley",
      title: "ant Growing Dividend Income?",
      banner: require("../assets/images/JHGHHTYU.png"),
    },
    {
      owner: "Reuters",
      title: "3 Stocks to Avoid This Week",
      banner: require("../assets/images/GHTYRUI.png"),
    },
    {
      owner: "MediaFeed",
      title: "Is It Time to Sell Netflix Stock?",
      banner: require("../assets/images/LKJARTYU.png"),
    },
    {
      owner: "Barrrons",
      title: "Tesla Inc. stock rises Friday",
      banner: require("../assets/images/YUIXVL.png"),
    },
  ],
};
