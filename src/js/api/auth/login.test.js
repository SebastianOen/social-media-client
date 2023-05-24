import { login } from './login';
import { logout } from './logout.js';
import { localStorageMock } from './__mocks__/localStorageMock';
import expect from 'expect';
require('isomorphic-fetch');

test('check login', async () => {
  Object.defineProperty(global, 'localStorage', { value: localStorageMock });

  const accountLogin = await login('tester28808@stud.noroff.no', 'O31njm0p67');
  expect(localStorage.getItem('token'));

  const token = localStorage.getItem('token');

  expect(typeof token).toBe('string');
  expect(token.length).toBeGreaterThan(1);
  localStorage.removeItem('token');
});

test('check logout', async () => {
  Object.defineProperty(global, 'localStorage', { value: localStorageMock });

  localStorage.setItem('token', 'testToken');
  expect(localStorage.getItem('token')).toBe('testToken');
  const onLogout = await logout();
  const token = localStorage.getItem('token');
  expect(token).toBe(undefined);
});

/*test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await login('tester28808@stud.noroff.no', 'O31njm0p67');
  } catch (e) {
    expect(e).toMatch('error');
  }
});*/
