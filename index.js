// First Labour : Heracles vs Nemean Lion
// use your Figher class here
import { Fighter } from "./src/Fighter.js";

const heracles = new Fighter("🧔 Heracles", 20, 6, 100);
const lion = new Fighter("🦁 Nemean Lion", 11, 13, 100);

let round = 1;

while (heracles.life > 0 && lion.life > 0) {
  console.log(`🕐Round #${round}`);
  heracles.fight(lion);
  if (lion.life > 0) lion.fight(heracles);
  round++;
}
heracles.life == 0
  ? console.log("🧔Heracles Wins 🏆 ")
  : console.log("🦁Nemean Lion Wins 🏆 ");

lion.life > 0
  ? console.log("🧔Heracles is dead 💀")
  : console.log("🦁Nemean Lion is dead 💀");
