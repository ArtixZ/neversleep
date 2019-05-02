var robot = require("robotjs");
robot.setMouseDelay(2);

setInterval(() => {
  robot.moveMouseSmooth(Math.random() * 1000, Math.random() * 1000);
}, Math.random() * 10000);
