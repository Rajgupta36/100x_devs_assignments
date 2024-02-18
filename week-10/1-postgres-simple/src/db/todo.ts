// todo.ts

import { client } from "..";

interface Todo {
  id: number;
  user_id: number;
  title: string;
  description: string;
  done: boolean;
}



export async function createTodo(userId: number, title: string, description: string){
  try {
   
    const result = await client.query('INSERT INTO todos(user_id, title, description, done) VALUES ($1, $2, $3, $4) RETURNING *', [userId, title, description, false]);

    if (result.rows.length > 0) {
      return result.rows[0] as Todo;
    } else {
      console.error("Failed to create todo");
      return undefined;
    }
  } catch (err) {
    console.error(err);
    
  } 
}



export async function updateTodo(todoId: any){
  try {
 const result = await client.query('UPDATE todos SET done = $1 WHERE id = $2 RETURNING *', [true, todoId]);

    if (result.rows.length > 0) {
      return result.rows[0] as Todo;
    } else {
      console.error("Failed to update todo");
      return undefined;
    }
  } catch (err) {
    console.error(err);
  }
}

export async function getTodos(userId: number){
    const query = 'SELECT * FROM todos WHERE user_id = $1';
    const values = [userId];
    const result = await client.query(query, values);
    return result.rows ;
    
}