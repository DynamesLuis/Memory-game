function isValidHighScores(data) {
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    return false;
  }

  const keys = Object.keys(data);

  if (
    keys.length !== 3 ||
    !["1", "2", "3"].every((key) => keys.includes(key))
  ) {
    return false;
  }

  return Object.values(data).every(
    (value) => Number.isInteger(value) && value >= 0,
  );
}

export { isValidHighScores };
