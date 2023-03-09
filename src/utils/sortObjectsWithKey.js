export const sortObjectsWithKey = (arr, key) => {
  try {
    return [...arr].sort((a, b) => a[key].localeCompare(b[key]));
  } catch (err) {
    return arr;
  }
};
