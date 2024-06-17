import type { BlockHeightStr } from "../../types";
import dog from "./assets/dog.svg";
import dragon from "./assets/dragon.svg";
import goat from "./assets/goat.svg";
import horse from "./assets/horse.svg";
import monkey from "./assets/monkey.svg";
import ox from "./assets/ox.svg";
import rabbit from "./assets/rabbit.svg";
import rat from "./assets/rat.svg";
import rooster from "./assets/rooster.svg";
import snake from "./assets/snake.svg";
import pig from "./assets/pig.svg";
import tiger from "./assets/tiger.svg";

/**
 * renders the imported svg based on the block height
 * returns a div element with the svg element inside rather than a string
 * this allows for DOM based testing
 *
 * @param blockHeightStr - the block height as a string
 * @returns - the markup to render
 */
export let render = (blockHeightStr: BlockHeightStr): HTMLElement => {
  let blockHeightLength = blockHeightStr.length;
  let lastDigit = Number(blockHeightStr.charAt(blockHeightLength - 1));
  let lastTwoDigits = Number(blockHeightStr.slice(blockHeightLength - 2));
  let lastThreeDigits = Number(blockHeightStr.slice(blockHeightLength - 3));

  let animal = rooster;

  if (lastDigit === 1) {
    animal = rat;
  }

  if (lastDigit === 2) {
    animal = ox;
  }

  if (lastDigit === 3) {
    animal = tiger;
  }

  if (lastDigit === 4) {
    animal = rabbit;
  }

  if (lastDigit === 5) {
    animal = dragon;
  }

  if (lastDigit === 6) {
    animal = snake;
  }

  if (lastDigit === 7) {
    animal = horse;
  }

  if (lastDigit === 8) {
    animal = goat;
  }

  if (lastDigit === 9) {
    animal = monkey;
  }

  if (lastTwoDigits === 69) {
    animal = dog;
  }

  if (lastThreeDigits === 420) {
    animal = pig;
  }

  // create a div element to wrap the svg element
  let wrapper = document.createElement("div");

  // insert the svg string into the div element
  wrapper.innerHTML = animal;

  return wrapper;
};
