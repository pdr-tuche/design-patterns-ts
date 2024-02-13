import Database from "./classes/Database";

export function indexSingletonPattern() {
    const data = {
        name: "John",
        age: 30
    }

    const db = Database.getInstance()
    const db2 = Database.getInstance()
    console.log(db2 === db) //true = mesma instancia

    db.insertData(data)
    db.insertData(data)
    db.showData()
}