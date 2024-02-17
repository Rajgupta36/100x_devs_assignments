import { client } from '../..';
import { createUser, getUser } from '../user';
import { createTables, dropTables } from '../setup';
import { createTodo, updateTodo, getTodos } from '../todo';

beforeAll(async () => {
    await client.connect();
    await dropTables();
    await createTables();
});

afterAll(async () => {
    await client.end();
});

describe('User Database Operations', () => {
    test('createUser inserts a new user into the database', async () => {
        const username = 'testuser';
        const password = 'testpass';
        const name = 'Test User';

        await createUser(username, password, name);
        const user = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        expect(user.rows[0]).toHaveProperty('username', username);
        expect(user.rows[0]).toHaveProperty('name', name);
        expect(user.rows[0].password).toBe(password);
    });

    test('getUser retrieves a user by ID', async () => {
        // Assuming an existing user with ID 1 for this test
        const userId = 1;
        const user = await getUser(userId);

        expect(user).toHaveProperty('id', userId);
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('name');
    });
});


describe('Todo Operations', () => {
    let userId: number;
  
    beforeAll(async () => {
      // Assuming you have a function to get a user by username for test setup
      const res = await client.query('SELECT id FROM users WHERE username = $1', ['testuser']);
      userId = res.rows[0].id;
    });
  
    test('createTodo inserts a new todo for a user', async () => {
      const title = 'Test Todo';
      const description = 'Test Description';
      const todo = await createTodo(userId, title, description);
  
      expect(todo?.id).toBeDefined();
    expect(todo?.title).toEqual(title);
    expect(todo?.description).toEqual(description);
    expect(todo?.done).toEqual(false);
    });
  
  test('updateTodo marks a todo as done', async () => {
    // First, create a todo to update
    const createdTodo = await createTodo(userId, 'Update Test', 'To be updated');

    // Ensure createdTodo is defined before extracting its id
    expect(createdTodo).toBeDefined();

    // Extract id using optional chaining
    const todoId = createdTodo?.id;

    // Ensure todoId is not undefined
    expect(todoId).toBeDefined();

    if (todoId !== undefined) {
        const updatedTodo = await updateTodo(todoId);

        // Ensure updatedTodo is defined
        expect(updatedTodo).toBeDefined();

        // Use optional chaining for safer property access
        expect(updatedTodo?.done).toEqual(true);
    } else {
        // Handle the case where todoId is undefined
        fail('Failed to create todo for update');
    }
});

  
    test('getTodos retrieves all todos for a user', async () => {
      // Assuming there are already todos created in previous tests
      const todos = await getTodos(userId);
   expect(todos?.length).toBeGreaterThan(0);
      todos?.forEach(todo => {
        expect(todo).toHaveProperty('id');
        expect(todo.user_id).toEqual(userId);
      });
    });
  });
  