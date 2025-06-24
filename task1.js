fetch("affirmation.json");
then((response) => response.json);
then((data) => {
  const affirmations = data.affirmations;
  console.log(data);

  const today = new Date();
  const day = today.getDate();

  const index = Math.floor(Math.random() * affirmations.length);
  const dailyAffirmation = affirmations[index];

  document.getElementById("affirmation").textContent = dailyAffirmation;
});
