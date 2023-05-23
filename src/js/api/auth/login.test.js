import { login } from './login';
import { logout } from './logout.js';
import { localStorageMock } from './__mocks__/localStorageMock';
import expect from 'expect';
require('isomorphic-fetch');

test('check login', async () => {
  Object.defineProperty(global, 'localStorage', { value: localStorageMock });

  const accountLogin = await login('tester28808@stud.noroff.no', 'O31njm0p67');
  expect(localStorage.getItem('token'));
  console.log(localStorage.getItem('token'));
});

test('check logout', async () => {
  Object.defineProperty(global, 'localStorage', { value: localStorageMock });

  const onLogout = await logout();
});

/*test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await login('tester28808@stud.noroff.no', 'O31njm0p67');
  } catch (e) {
    expect(e).toMatch('error');
  }
});*/
