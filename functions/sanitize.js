import filterXSS from 'xss';

function sanitize(input) {
  return filterXSS(input);
}

export default sanitize;
