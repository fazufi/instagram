export const IsJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const mode = (STATE) => {
  return { mode: STATE.mode };
};

export const gantiMode = (dispatch) => {
  return {
    gantiMode: (data) => dispatch({ type: "gantiMode", mode: data }),
  };
};