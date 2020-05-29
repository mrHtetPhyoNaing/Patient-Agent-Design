const domStrings = {
  state: "#state",
  township: "#township",
};

const inputState = document.querySelector(domStrings.state);
const inputTownship = document.querySelector(domStrings.township);

state.addEventListener("change", function () {
  const state = parseInt(inputState.value);

  fetch("/assets/nrc-data.json")
    .then((res) => {
      if (!res.ok) throw new Error("Error getting NRC data");

      res.json().then((data) => {
        if (data.error) throw new Error(data.error);

        inputTownship.innerHTML = data[state].map(
          (township) => `<option value="${township}">${township}</option>`
        );
      });
    })
    .catch((err) => console.log(err));
});
