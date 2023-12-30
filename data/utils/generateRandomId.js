const generateRandomId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  let randomID = "";

  // Generate random numbers
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    randomID += numbers[randomIndex];
  }

  // Generate random characters
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters[randomIndex];
  }

  // Shuffle the characters in the randomID
  randomID = randomID
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return randomID;
};

export default generateRandomId;
