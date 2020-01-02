import Dexie from 'dexie';
var db = new Dexie('noncerpro');
db.version(1).stores({
    totalHashRate: '++id,date,hash_rate'
});

// This is your plugin object. It can be exported to be used anywhere.
const DexiePlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue) {
    
    Vue.prototype.$Dexie = db

  }
};

export default DexiePlugin;