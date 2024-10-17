/**
* Demonstrates the use of rest parameter to handle an indefinite number of arguments.
*/
export default function returnHowManyArguments(...args) {
  return args.length;
}
