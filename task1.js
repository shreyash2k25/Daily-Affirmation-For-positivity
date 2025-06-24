fetch("affirmation.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const affirmations = data.affirmations;

    const index = Math.floor(Math.random() * affirmations.length);

    document.getElementById("affirmation").textContent = affirmations[index];
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });
