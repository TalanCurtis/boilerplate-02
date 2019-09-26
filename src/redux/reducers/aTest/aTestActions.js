// Types
export const UPDATE_ATEST = "UPDATE_ATEST";

// Actions
export function updateATest( value) {
  const payload = {value:  value };
  const type = UPDATE_ATEST;
  return {type, payload};
}



