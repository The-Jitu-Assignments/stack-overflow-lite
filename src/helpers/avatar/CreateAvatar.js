export const createAvatar = str => {
  str = str.split(' ');
  if (str.length === 1) {
    return str[0][0]
  } else {
    for (let i = 0; i < str.length; i++) {
      return str[i][0] + str[str.length - 1][0]
    }
  }
};