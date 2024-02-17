import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
interface User {
    id: number;
    username: string;
    password: string;
    name: string;
}



export async function createUser(username: string, password: string, name: string){
    try {
        const result = await client.query('INSERT INTO users(username, password, name) VALUES($1, $2, $3) ', [username, password, name]);
        return result.rows[0];
    } catch (err) {
        console.error(err);
    }
}

export async function getUser(userId: number){
    try {
        const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
        return result.rows[0] as User;
    } catch (err) {
        console.error(err);
    }
}