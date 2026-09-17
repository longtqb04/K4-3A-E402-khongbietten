import {DatabaseSync} from 'node:sqlite';
import {mkdirSync} from 'node:fs';
import {randomUUID} from 'node:crypto';
export function createStore(path='runtime/kute.sqlite'){
 if(path!==':memory:')mkdirSync('runtime',{recursive:true});
 const db=new DatabaseSync(path);
 db.exec(`CREATE TABLE IF NOT EXISTS answers(id TEXT PRIMARY KEY, owner TEXT, question TEXT, result TEXT, created TEXT); CREATE TABLE IF NOT EXISTS tickets(id TEXT PRIMARY KEY, answer_id TEXT UNIQUE, state TEXT, created TEXT); CREATE TABLE IF NOT EXISTS feedback(answer_id TEXT PRIMARY KEY, value TEXT);`);
 return {save(owner,question,result){const id=randomUUID();db.prepare('INSERT INTO answers VALUES(?,?,?,?,?)').run(id,owner,question,JSON.stringify(result),new Date().toISOString());return id;},get(id,owner){const row=db.prepare('SELECT * FROM answers WHERE id=? AND owner=?').get(id,owner);return row?{...row,result:JSON.parse(row.result)}:null;},ticket(answerId){const old=db.prepare('SELECT * FROM tickets WHERE answer_id=?').get(answerId);if(old)return old;const row={id:randomUUID(),answer_id:answerId,state:'local',created:new Date().toISOString()};db.prepare('INSERT INTO tickets VALUES(?,?,?,?)').run(row.id,row.answer_id,row.state,row.created);return row;},state(id,state){db.prepare('UPDATE tickets SET state=? WHERE id=?').run(state,id);},feedback(id,value){db.prepare('INSERT OR REPLACE INTO feedback VALUES(?,?)').run(id,value);},close(){db.close();}};
}
