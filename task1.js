fetch("affirmation.json")
  .then((response) => response.json())
  .then((data) => {
    affirmations = data.affirmations;
    showRandomAffirmation();
    setInterval(showRandomAffirmation, 10000);
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });

function showRandomAffirmation() {
  const index = Math.floor(Math.random() * affirmations.length);
  document.getElementById("affirmation").textContent = affirmations[index];
}
