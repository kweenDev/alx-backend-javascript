/**
 * Executes a math function and appends the result or error message to a queue.
 * @param {Function} mathFunction - A function that performs a mathematical
 * operation.
 * @returns {Array} An array containing the result of the math function and
 * the string 'Guardrail was processed'.
 */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
