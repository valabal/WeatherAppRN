import { AsyncStorage } from 'react-native';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { createBlacklistFilter } from 'redux-persist-transform-filter';

const encryptor = encryptTransform({
  secretKey: 'shioping-super-secret-key',
  onError(error) {
    console.error(`createEncryptor error ${error}`);
  },
});

const saveAuthSubsetBlacklistFilter = createBlacklistFilter([]);

const PERSIST = {
  active: false,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['activity', 'cart', 'session'],
    transforms: [saveAuthSubsetBlacklistFilter, encryptor],
  },
};

export default PERSIST;
