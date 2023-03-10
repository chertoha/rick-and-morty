export const sortObjectsWithKey = (arr, key) => {
  try {
    return [...arr].sort((a, b) =>
      a[key].toLowerCase().localeCompare(b[key].toLowerCase())
    );
  } catch (err) {
    return arr;
  }
};
