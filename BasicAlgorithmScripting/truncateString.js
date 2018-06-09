/*

Truncate a String

Truncate a string (first argument) if it is longer
than the given maximum string length (second argument).
Return the truncated string with a ... ending.

*/

function truncateString(str, num) {
  const ending = num < str.length ? '...' : '';

  return str.substring(0, num) + ending;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
truncateString('Absolutely Longer', 2);
truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length);
