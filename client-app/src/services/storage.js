import { AsyncStorage } from 'react-native';

export default {
  set: (key, data) => {
    if (typeof data === 'object') {
      AsyncStorage.setItem(key, JSON.stringify(data));
    } else {
      AsyncStorage.setItem(key, data);
    }
  },
  get: async (key) => {
    let item = await AsyncStorage.getItem(key);
    let data = '';
    try {
      data = JSON.parse(item);
    } catch (e) {
      data = item;
    }
    return data;
  },
  removeAll: async () => {
    const keys = await AsyncStorage.getAllKeys();
    const deleted = await AsyncStorage.multiRemove(keys);
    return deleted;
  },
}
