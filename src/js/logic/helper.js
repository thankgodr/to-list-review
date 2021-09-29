export default class Helper {
  stringLength(str) {
    return str.length;
  }

  reverseString(str) {
    return str.split('').reverse().join('');
  }
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
