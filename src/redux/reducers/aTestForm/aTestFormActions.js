// Types
export const UPDATE_ATESTFORM = "UPDATE_ATESTFORM";

// Actions
export function updateATestForm( e ) {
  let value = e.target.value;
  let key = e.target.dataset.key;
  const payload = { key, value };
  const type = UPDATE_ATESTFORM;
  return {type, payload};
}



