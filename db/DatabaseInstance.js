import * as SQLite from 'expo-sqlite';
//importação da biblioteca do sqlite para build/apk


let db = SQLite.openDatabase({name: 'ClienteDatabase.db'});

export default db;