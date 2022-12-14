export const createAvatar = (str = '') => {
  str = str.split(' ');
  let avatar = str[0][0] + str[1][0];
  return avatar;
}