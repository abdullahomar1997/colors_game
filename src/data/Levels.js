import { colorsMatch } from "../utils/Colors";

// level 1 - 10 seconds , 5 target , 3 lives, 2 options
// level 2 - 10 seconds , 5 target , 1 lives, 2 options
// level 3 - 10 seconds , 10 target , 3 lives, 2 options
// level 4 - 10 seconds , 10 target , 1 lives, 2 options
// level 5 - 10 seconds , 15 target , 3 lives, 2 options
// level 5 - 10 seconds , 15 target , 1 lives, 2 options

const seconds10 = 10;
const seconds30 = 30;
const seconds60 = 60;
const seconds100 = 100;

const targetLow = 1;
const targetMid = 2;
const targetHigh = 3;

const lives1 = 1;
const lives3 = 3;

const options2 = 2;
const options3 = 3;

const unlimited = 100;
const easyTime = 60;

const generateLevel = (id, seconds,target,lives,options) => ({
  id,
  seconds,
  target,
  lives,
  options,
  colors: colorsMatch.slice(0, 7)
});

const levels = [
  // Levels with a time limit of 10 seconds
  generateLevel(1030,seconds100,15,lives3,options2),
  generateLevel(1011,seconds10,5,lives1,options2),
  generateLevel(1012,seconds10,5,lives3,options2),
  generateLevel(1013,seconds10,10,lives1,options2),
  generateLevel(1014,seconds10,10,lives3,options2),
  generateLevel(1015,seconds10,15,lives1,options2),
  generateLevel(1016,seconds10,15,lives3,options2),

  // Levels with a time limit of 30 seconds
  generateLevel(2011,seconds30,15,lives1,options2),
  generateLevel(2012,seconds30,15,lives3,options2),
  generateLevel(2013,seconds30,30,lives1,options2),
  generateLevel(2014,seconds30,30,lives3,options2),
  generateLevel(2015,seconds30,45,lives1,options2),
  generateLevel(2016,seconds30,45,lives3,options2),

  // Levels with a time limit of 60 seconds
  generateLevel(3011,seconds60,30,lives1,options2),
  generateLevel(3012,seconds60,30,lives3,options2),
  generateLevel(3013,seconds60,60,lives1,options2),
  generateLevel(3014,seconds60,60,lives3,options2),
  generateLevel(3015,seconds60,90,lives1,options2),
  generateLevel(3016,seconds60,90,lives3,options2),

  // Levels with a time limit of 100 seconds
  generateLevel(4001,seconds100,50,lives1,options2),
  generateLevel(4002,seconds100,50,lives3,options2),
  generateLevel(4003,seconds100,100,lives1,options2),
  generateLevel(4004,seconds100,100,lives3,options2),
  generateLevel(4005,seconds100,150,lives1,options2),
  generateLevel(4006,seconds100,150,lives3,options2),
 
];

export default levels;


  // {
  //   id: 1,
  //   evaluationLimit: 100,
  //   timeLimit: 60,
  //   colors: colorsList.slice(0,3)
    
  // },
  // {
  //   id: 11,
  //   evaluationLimit: 10,
  //   timeLimit: 60,
  //   colors: colorsList.slice(0,3)
  // },
  // {
  //   id: 12,
  //   evaluationLimit: 100,
  //   timeLimit: 30, // in seconds
  //   colors: colorsList.slice(0,3)
  // },
  // {
  //   id: 13,
  //   evaluationLimit: 100,
  //   timeLimit: 30, // in seconds
  //   colors: sameColorsList.slice(0,3)
  // },
  // {
  //   id: 2,
  //   evaluationLimit: 100,
  //   timeLimit: 60,
  //   colors: colorsList.slice(0,4)
  // },
  // {
  //   id: 21,
  //   evaluationLimit: 15,
  //   timeLimit: 60,
  //   colors: colorsList.slice(0,4)
  // },
  // {
  //   id: 22,
  //   evaluationLimit: 100,
  //   timeLimit: 30,
  //   colors: colorsList.slice(0,4)
  // },
  // {
  //   id: 23,
  //   evaluationLimit: 100,
  //   timeLimit: 30, // in seconds
  //   colors: sameColorsList.slice(0,4)
  // },
  // {
  //   id: 3,
  //   evaluationLimit: 100,
  //   timeLimit: 60,
  //   colors: colorsList.slice(0,5)
  // },
  // {
  //   id: 31,
  //   evaluationLimit: 15,
  //   timeLimit: 60,
  //   colors: colorsList.slice(0,5)
  // },
  // {
  //   id: 32,
  //   evaluationLimit: 100,
  //   timeLimit: 30,
  //   colors: colorsList.slice(0,5)
  // },
  // {
  //   id: 33,
  //   evaluationLimit: 100,
  //   timeLimit: 30, // in seconds
  //   colors: sameColorsList.slice(0,5)
  // },
  // {
  //   id: 4,
  //   evaluationLimit: 100,
  //   timeLimit: 60,
  //   colors: colorsList.slice(0,6)
  // },
  // {
  //   id: 41,
  //   evaluationLimit: 15,
  //   timeLimit: 60,
  //   colors: colorsList.slice(0,6)
  // },
  // {
  //   id: 42,
  //   evaluationLimit: 100,
  //   timeLimit: 30,
  //   colors: colorsList.slice(0,6)
  // },
  // {
  //   id: 43,
  //   evaluationLimit: 100,
  //   timeLimit: 30, // in seconds
  //   colors: sameColorsList.slice(0,6)
  // },
  
    // {
    //   id: 2,
    //   evaluationLimit: 15,
    //   timeLimit: 40, // in seconds
    //   colors: ['#FF3366', '#66FF33', '#3366FF', '#FFFF33']
    // },
    // {
    //   id: 3,
    //   evaluationLimit: 20,
    //   timeLimit: 50, // in seconds
    //   colors: ['#FF9933', '#33FF99', '#9933FF', '#FFFF33', '#33FFFF']
    // },
    // {
    //   id: 4,
    //   evaluationLimit: 25,
    //   timeLimit: 60, // in seconds
    //   colors: ['#FF3366', '#66FF33', '#3366FF', '#FFFF33']
    // },
    // {
    //   id: 5,
    //   evaluationLimit: 30,
    //   timeLimit: 70, // in seconds
    //   colors: ['#FF9933', '#33FF99', '#9933FF', '#FFFF33', '#33FFFF']
    // },
    // {
    //   id: 6,
    //   evaluationLimit: 35,
    //   timeLimit: 80, // in seconds
    //   colors: ['#FF3366', '#66FF33', '#3366FF', '#FFFF33']
    // },
    // {
    //   id: 7,
    //   evaluationLimit: 40,
    //   timeLimit: 90, // in seconds
    //   colors: ['#FF9933', '#33FF99', '#9933FF', '#FFFF33', '#33FFFF']
    // },
    // {
    //   id: 8,
    //   evaluationLimit: 45,
    //   timeLimit: 100, // in seconds
    //   colors: ['#FF3366', '#66FF33', '#3366FF', '#FFFF33']
    // },
    // {
    //   id: 9,
    //   evaluationLimit: 50,
    //   timeLimit: 110, // in seconds
    //   colors: ['#FF9933', '#33FF99', '#9933FF', '#FFFF33', '#33FFFF']
    // },
    // {
    //   id: 10,
    //   evaluationLimit: 55,
    //   timeLimit: 120, // in seconds
    //   colors: ['#FF3366', '#66FF33', '#3366FF', '#FFFF33']
    // }