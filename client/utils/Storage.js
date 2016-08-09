
/**
 * Web Storage Adapter
 */

export default {
    get,
    set,
};
import {
    AsyncStorage,
} from 'react-native';

function get(key, defaultValue = null) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key).then((value) => {
            if (value === null) {
                resolve(defaultValue);
            } else {
                console.log('value', value);
                resolve(JSON.parse(value));
            }
        }).catch((e) => {
            console.log('e', e)
            reject(e);
        });
    });
}

function set(key, value) {
    const valueStringify = JSON.stringify(value);
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(key, valueStringify).then(() => {
            resolve();
        }).catch((e) => {
            reject(e);
        });
    });
}
