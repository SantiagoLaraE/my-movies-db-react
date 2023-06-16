/*
 * This function return an int number between two number
 * @params {min, max} min: minimun number to return, max: maximum number to return 
 * @return {number} Random number between given min & max numbers
 */

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
