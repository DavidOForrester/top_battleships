const Ship = (length, hits) => {
  const hit = () => {
    hits++;
  };
  const isSunk = () => {
    if (length == hits) {
      return true;
    } else {
      return false;
    }
  };

  return { length, hits, hit, isSunk };
};

module.exports = Ship;
