/**
 * Get a random element from an array
 * @param {Array} array - The array to pick from
 * @returns {*} A random element from the array
 */
const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Format user mention
 * @param {Object} user - Telegram user object
 * @returns {string} Formatted username or first name
 */
const formatUserMention = (user) => {
  return user.username ? `@${user.username}` : user.first_name;
};

module.exports = {
  getRandomElement,
  formatUserMention
};