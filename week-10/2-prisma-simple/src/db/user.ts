import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
interface usertype {
    
    username: string,
      password: string,
       name: string,
       id:number
   
}
export async function createUser(username: string, password: string, name: string) {
    const res= await prisma.user.create({data:{username:username,password:password,name:name}});
    return res as usertype;
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const result=  await prisma.user.findFirst({ where:{id:userId}});
    return result as usertype;
}
