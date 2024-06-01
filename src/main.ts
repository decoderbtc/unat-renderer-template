import { render } from "./renderer";

import type { BlockHeightStr, InscriptionID } from "./types";

let { VITE_BASE_URL } = import.meta.env;

let formContainer = document.querySelector("aside");
let input = document.querySelector("input") as HTMLInputElement;
let mintInscriptionId = document
  ?.getElementById("preview")
  ?.getAttribute("mint");

/**
 * call render() either with the manually inputted block height or
 * with the one fetched from the mint inscription
 *
 * @param block - the block height as a string
 */
let updateContent = (block: BlockHeightStr) => {
  let viewer = document.querySelector("section");
  if (viewer) {
    viewer.innerHTML = render(block);
  }
};

/**
 * fetch the mint inscription and passes the blk value to updateContent()
 *
 * @param mintInscriptionId - the mint inscription ID
 */
let fetchAndUpdateContent = async (mintInscriptionId: InscriptionID) => {
  let url = `${VITE_BASE_URL}/content/${mintInscriptionId}`;

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let result = await response.json();
    updateContent(result.blk);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

/**
 * use injected mint inscription ID or display the form to manually input the block height
 */
let main = () => {
  // if the MINT_INSCRIPTION_ID placeholder hasn't been replaced
  if (mintInscriptionId?.includes("MINT_INSCRIPTION_ID")) {
    if (formContainer) {
      // display the form to manually input the block height
      formContainer.classList.remove("visually-hidden");

      input.addEventListener("input", () => {
        let blockNumber = input.value;
        updateContent(blockNumber);
      });
    }
  } else {
    // otherwise use the mint inscription ID injected by the marketplace
    if (mintInscriptionId) {
      fetchAndUpdateContent(mintInscriptionId as InscriptionID);
    }
  }
};

main();
