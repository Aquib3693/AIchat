import axios from 'axios';

const pattern = /^\/define\s+(\w+)/i;

const execute = async (match) => {
  const word = match[1];

  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = response.data;

    const definitions = data[0].meanings.flatMap(m => m.definitions.map(d => d.definition));

    return {
      word,
      definitions,
    };
  } catch (error) {
    console.error('Define plugin error:', error.message);
    return {
      word,
      definitions: ['No definition found or API error.'],
    };
  }
};

export default {
  name: 'define',
  pattern,
  execute,
};
