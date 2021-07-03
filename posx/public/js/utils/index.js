export * from './make-extension';

export function uuid4() {
  // https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

/**
 * @param {string} field watch for change on this
 * @param {object} dict object on which to watch changes
 * @param {number} millis until this lapses
 */
export async function waitToChange(field, dict, millis) {
  const prev = dict[field];
  const limit = millis / 60;
  let count = 0;
  while (prev === dict[field] && count < limit) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    count++;
  }
}
