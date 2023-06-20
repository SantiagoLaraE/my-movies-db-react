/*
 * This function returns an int number between two number
 * @params {min, max} min: minimun number to return, max: maximum number to return 
 * @return {number} Random number between given min & max numbers
 */

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

/*
 * This function returns a formatted string in Kebab case 
 * @params {string} any string to convert
 * @return {string} formatted string in Kebab case. Just keep letters and numbers
 */

export function formatToURL(string) {
  const regex = /\W+/gi
  return string.toLowerCase().replaceAll(regex, '-');
}