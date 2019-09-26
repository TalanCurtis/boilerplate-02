// Types
export const UPDATE_ATESTFORM = "UPDATE_ATESTFORM";

// Actions
export function updateATestForm( key, value ) {
  const payload = { key, value };
  const type = UPDATE_ATESTFORM;
  return {type, payload};
}



