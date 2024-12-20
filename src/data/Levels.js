import {colorsMatch} from "../utils/Colors";

const seconds10 = 10;
const seconds30 = 30;
const seconds60 = 60;

const options2 = 60;
const generateLevel = (id, index, seconds, target, lives, options) => ({
  id,
  seconds,
  target,
  lives,
  options,
  nextLevel: index + 1,
  colors: colorsMatch.slice(0, 7)
});

const levels = [
  // Levels with a time limit of 10 secondss
  generateLevel(2030, 0, seconds10, 10, options2),
  generateLevel(2031, 1, seconds10, 20, options2),
  generateLevel(2032, 2, seconds10, 30, options2),

  generateLevel(2033, 3, seconds30, 30, options2),
  generateLevel(2034, 4, seconds30, 60, options2),
  generateLevel(2035, 5, seconds30, 90, options2),

  generateLevel(2036, 6, seconds60, 60, options2),
  generateLevel(2037, 7, seconds60, 120, options2),
  generateLevel(2038, 8, seconds60, 180, options2)



  // generateLevel(1030, 1, seconds100, 15, lives3, options2),
  // generateLevel(1011, 2, seconds10, 5, lives1, options2),
  // generateLevel(1012, 3, seconds10, 5, lives3, options2),
  // generateLevel(1013, 4, seconds10, 10, lives1, options2),
  // generateLevel(1014, 5, seconds10, 10, lives3, options2),
  // generateLevel(1015, 6, seconds10, 15, lives1, options2),
  // generateLevel(1016, 7, seconds10, 15, lives3, options2),

  // // Levels with a time limit of 30 seconds
  // generateLevel(2011, 8, seconds30, 15, lives1, options2),
  // generateLevel(2012, 9, seconds30, 15, lives3, options2),
  // generateLevel(2013, 10, seconds30, 30, lives1, options2),
  // generateLevel(2014, 11, seconds30, 30, lives3, options2),
  // generateLevel(2015, 12, seconds30, 45, lives1, options2),
  // generateLevel(2016, 13, seconds30, 45, lives3, options2),

  // // Levels with a time limit of 60 seconds
  // generateLevel(3011, 14, seconds60, 30, lives1, options2),
  // generateLevel(3012, 15, seconds60, 30, lives3, options2),
  // generateLevel(3013, 16, seconds60, 60, lives1, options2),
  // generateLevel(3014, 17, seconds60, 60, lives3, options2),
  // generateLevel(3015, 18, seconds60, 90, lives1, options2),
  // generateLevel(3016, 19, seconds60, 90, lives3, options2),

  // // Levels with a time limit of 100 seconds
  // generateLevel(4001, 20, seconds100, 50, lives1, options2),
  // generateLevel(4002, 21, seconds100, 50, lives3, options2),
  // generateLevel(4003, 22, seconds100, 100, lives1, options2),
  // generateLevel(4004, 23, seconds100, 100, lives3, options2),
  // generateLevel(4005, 24, seconds100, 150, lives1, options2),
  // generateLevel(4006, 25, seconds100, 150, lives3, options2),

];

export default levels;