const form = document.querySelector("#speed-form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = Number(form.elements.altitude.value);
  const startSpeed = Number(form.elements.startingSpeed.value);
  const mass = Number(form.elements.mass.value);
  const area = Number(form.elements.area.value);

  const gravity = 9.81;
  const airDensity = 1.225;
  const terminalSpeedSquared = (2 * mass * gravity) / (airDensity * area);
  const exponent = (-2 * gravity * height) / terminalSpeedSquared;
  const finalSpeed = Math.sqrt(
    terminalSpeedSquared +
      (startSpeed ** 2 - terminalSpeedSquared) * Math.exp(exponent),
  );

  result.textContent = finalSpeed.toFixed(2);
});