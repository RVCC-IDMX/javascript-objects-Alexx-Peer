/**
 * @file movie-validation.js
 * @fileoverview Demonstrates movie object validation and property access techniques.
 * Provides functions to validate a movie object and retrieve its properties using both dot and bracket notations.
 * @module movie-validation
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

// Toggle examples on or off.
const SHOW_EXAMPLES = true;

function isObject(value) {
  // implement code here
  // Check if the value is an object and not null.
  if (value === null || typeof value !== 'object') return false;
  else
    return true;
}

/**
 * Checks whether an object has a property of the expected type.
 * @param {object} obj - The object to check.
 * @param {string} prop - The property name.
 * @param {string} expectedType - The expected type (e.g., "string", "number").
 * @returns {boolean} - True if the property exists and is of the expected type.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */
export function hasPropertyOfType(obj, prop, expectedType) {
  // implement code here
  if (!isObject(obj) || typeof obj[prop] !== expectedType) return false;
  else
    return true;

}

/**
 * Retrieves the movie title.
 * @param {object} movie - The movie object.
 * @returns {string} - The movie title, or an empty string if invalid.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
 */
export function getMovieTitle(movie) {
  // implement code here
  if (!isObject(movie) || !movie.title) {
    console.log("getMovieTitle: Invalid movie object or title missing.");
    return '';
  }
  else
    return movie.title;
}

/**
 * Retrieves the movie year.
 * @param {object} movie - The movie object.
 * @returns {number} - The movie year, or 0 if invalid.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
 */
export function getMovieYear(movie) {
  // Use bracket notation as an alternative approach to property access.
  // While dot notation is common for fixed property names, bracket notation is useful when property names are dynamic.
  // implement code here
  if (!movie['year']) {
    console.log("getMovieYear: Invalid movie object or year missing.");
    return 0;
  }
  else
    return movie['year'];
}

/**
 * Determines whether the movie is considered classic (released before 2000).
 * @param {object} movie - The movie object.
 * @returns {boolean} - True if the movie is classic, false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
 */
export function isMovieClassic(movie) {
  // implement code here
  if (!movie['year'] || movie['year'] > 2000) {
    console.log("isMovieClassic: Movie object invalid or missing year.");
    return false;
  }
  else
    return true;
}

/**
 * Returns an array of all property names of the movie object.
 * @param {object} movie - The movie object.
 * @returns {Array} - An array of property names.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
export function getMovieKeys(movie) {
  // implement code here
  if (!movie || typeof movie !== 'object') {
    console.log("getMovieKeys: Provided input is not a valid object.");
    return [];
  } else
    return Object.keys(movie);
}

/**
 * Returns the count of properties in the movie object.
 * @param {object} movie - The movie object.
 * @returns {number} - The number of properties.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
export function getMoviePropertiesCount(movie) {
  // implement code here
  if (!movie || typeof movie !== 'object') {
    console.log("getMoviePropertiesCount: Provided input is not a valid object.");
    return 0;
  }
  else
    return Object.keys(movie).length;
}

// --------------------
// Example Code Section
// --------------------
if (SHOW_EXAMPLES) {
  const sampleMovie = {
    id: 1,
    title: "Toy Story",
    director: "John Lasseter",
    year: 1995,
    genre: "Animation",
    rating: 8.3,
    cast: ["Tom Hanks", "Tim Allen", "Don Rickles"]
  };

  console.log("Movie Title:", getMovieTitle(sampleMovie));
  // Explanation: Displays the movie title.

  console.log("Movie Year:", getMovieYear(sampleMovie));
  // Explanation: Displays the release year of the movie.

  console.log("Is Classic:", isMovieClassic(sampleMovie));
  // Explanation: Indicates whether the movie is considered classic.

  console.log("Movie Keys:", getMovieKeys(sampleMovie));
  // Explanation: Lists all the property names of the movie object.

  console.log("Properties Count:", getMoviePropertiesCount(sampleMovie));
  // Explanation: Shows the total number of properties in the movie object.
}
