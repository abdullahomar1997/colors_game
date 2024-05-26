import { colorsList } from "../utils/Colors";

const unlimited = 100;
const easyTime = 60;

const generateLevel = (id, evaluationLimit, timeLimit, colorSliceLength) => ({
  id,
  evaluationLimit,
  timeLimit,
  colors: colorsList.slice(0, colorSliceLength)
});

const levels = [
  // Levels with a time limit of 60 seconds
  generateLevel(303, unlimited , easyTime, 2),
  generateLevel(304, unlimited , easyTime, 3),
  generateLevel(305, unlimited , easyTime, 4),
  generateLevel(306, unlimited , easyTime, 5),
  generateLevel(307, unlimited , easyTime, 6),

  // Levels with a time limit of 30 seconds
  generateLevel(903, unlimited , 30, 2),
  generateLevel(904, unlimited , 30, 3),
  generateLevel(905, unlimited , 30, 4),
  generateLevel(906, unlimited , 30, 5),
  generateLevel(907, unlimited , 30, 6),

  // Levels with a time limit of 15 seconds
  generateLevel(403, unlimited , 15, 2),
  generateLevel(404, unlimited , 15, 3),
  generateLevel(405, unlimited , 15, 4),
  generateLevel(406, unlimited , 15, 5),
  generateLevel(407, unlimited , 15, 6),

  // Levels with a time limit of 60 seconds
  generateLevel(203, 6, 60, 2),
  generateLevel(204, 8, 60, 3),
  generateLevel(205, 10, 60, 4),
  generateLevel(206, 12, 60, 5),
  generateLevel(207, 14, 60, 6),

  // Levels with a time limit of 30 seconds
  generateLevel(103, 5, 60, 2),
  generateLevel(104, 6, 60, 3),
  generateLevel(105, 8, 60, 4),
  generateLevel(106, 9, 60, 5),
  generateLevel(107, 11, 60, 6),

  // Levels with a time limit of 60 seconds
  generateLevel(503, 3, 60, 2),
  generateLevel(504, 4, 60, 3),
  generateLevel(505, 5, 60, 4),
  generateLevel(506, 6, 60, 5),
  generateLevel(507, 7, 60, 6),

  // Add more levels as needed...
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