import type { BlockHeightStr } from "../../types";

/**
 * renders the content for the given block height
 *
 * @param blockHeightStr - the block height as a string
 * @returns - the markup to render
 */
export let render = (blockHeightStr: BlockHeightStr): string => {
  return `<h1>${blockHeightStr}</h1>`;
};
