import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

test('test case',()=>{
  const {getByText} = render(<App/>);
  const linkElement = getByText(/Good Bye/i);
  expect(linkElement).toBeInTheDocument();
})

test('test case 1',()=>{
  const {getByText} = render(<App/>);
  const linkElement = getByText(/Hello sir/i);
  expect(linkElement).toBeInTheDocument();
})

