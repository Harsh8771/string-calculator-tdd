/**
 * Adds numbers provided in a string with custom delimiters.
 * 
 * @param {string} numbers - String containing numbers separated by delimiters (default: comma or newline).
 *                           Can specify custom delimiter using format: "//[delimiter]\n[numbers...]".
 * @returns {number} Sum of the provided numbers.
 * @throws {Error} If input is not a string, contains negative numbers, or has invalid format.
 */
function add(numbers) {
    if (numbers === "") return 0;
    if (typeof numbers !== "string") {
      throw new Error("Input must be a string");
    }
  
    let delimiter = /,|\n/;
    let numbersToProcess = numbers;
  
    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      if (delimiterEnd === -1) {
        throw new Error("Invalid custom delimiter format");
      }
      delimiter = numbers.substring(2, delimiterEnd);
      numbersToProcess = numbers.substring(delimiterEnd + 1);
    }
  
    const nums = numbersToProcess.split(delimiter).map((num) => parseInt(num, 10));
  
    // Check for NaN values (invalid numbers)
    if (nums.some(isNaN)) {
      throw new Error("Invalid number in input");
    }
  
    // Check for negative numbers
    const negatives = nums.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
  
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };