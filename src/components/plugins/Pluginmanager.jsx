import { v4 as uuidv4 } from 'uuid';
import weather from './weather';
import calc from './calc';
import define from './define';

const plugins = [weather, calc, define];

const handleMessage = async (input) => {
  for (const plugin of plugins) {
    const match = input.match(plugin.pattern);
    if (match) {
      const data = await plugin.execute(match);
      return {
        id: uuidv4(),
        sender: 'assistant',
        content: '',
        type: 'plugin',
        pluginName: plugin.name,
        pluginData: data,
        timestamp: new Date().toISOString(),
      };
    }
  }
  return null;
};

export default {
  handleMessage,
};