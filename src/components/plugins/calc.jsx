const pattern = /^\/calc\s+(.+)/i;

const execute = async (match) => {
  const expression = match[1];
  const safeEval = Function(`"use strict"; return (${expression})`);
  const result = safeEval();
  return {
    expression,
    result,
  };
};

export default {
  name: 'calc',
  pattern,
  execute,
};
