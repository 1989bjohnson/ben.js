export const getYearsOfExperience = () => {
  const start = new Date("2017-06-26");
  const now = new Date();
  const diff = now - start;
  const years = Math.floor(diff / 31536000000);
  return years;
};

export const randomizeArray = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};
