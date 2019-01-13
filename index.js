window.reduxDebugger = {
  select: name => {
    const selector = window.reduxDebugger.selectors[name];
    if (!selector) {
      console.error("no selector registered", name);
    }
    const result = selector(window.reduxDebugger.state);
    console.log(result);
  }
};

export const reduxDebugMiddleware = store => next => action => {
  let result = next(action);
  window.reduxDebugger.state = store.getState();
  return result;
};

export const registerSelectors = selectors => {
  window.reduxDebugger.selectors = selectors;
};
