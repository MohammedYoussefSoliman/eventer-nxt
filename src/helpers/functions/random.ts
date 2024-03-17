export const random = (randomLength?: number) => {
  const allCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(
    ""
  );
  if (!randomLength) {
    randomLength = Math.floor(Math.random() * allCharacters.length);
  }
  let randomString = "";
  for (var i = 0; i < randomLength; i++) {
    randomString +=
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  return randomString;
};
