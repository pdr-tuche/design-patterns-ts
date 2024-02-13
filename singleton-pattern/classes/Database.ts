export default class Database {
    private static instance: Database;
    private data: object[] = []
    private constructor() { }

    public static getInstance(): Database {
        if (!Database.instance) {
            return this.instance = new Database();
        }
        return this.instance;
    }

    public insertData(data: object) {
        console.log(`inserting database...`);
        this.data.push(data);
    }

    public showData() {
        console.log("DATA:");
        this.data.forEach(elem => console.log(elem))
    }
}
