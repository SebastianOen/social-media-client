import { login } from './login';

test('check login', async () => {
  const data = await login();
  expect(data).toBe('');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await login();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
