import React from 'react'
import { render } from '@testing-library/react';
import About from './About';

test('About Test Case ', ()=>{
    const { getByText } = render(<About />);
    const linkElement = getByText(/Hello About/i);
    expect(linkElement).toBeInTheDocument();
})

