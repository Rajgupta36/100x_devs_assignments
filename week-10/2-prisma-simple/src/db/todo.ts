import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface todotype {
    
          title: string,
          description: string,
          done: boolean,
          id: number
         
}
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const result = await prisma.todo.create({ data:{ userId:userId,title:title,description:description
    }})

    return result as todotype;
 
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
      const result= await prisma.todo.update({
        where:{
            id:todoId
        },
            data:{
               done:true    
        }
      })

      return result as todotype;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const result = await prisma.todo.findMany({
        where:{
            userId:userId
        }
    })
    return result ;
}