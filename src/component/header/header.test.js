import { render, screen } from '@testing-library/react';
import React from "react";
import "@testing-library/jest-dom";
import Header from "./Header"
import { BrowserRouter as Router } from 'react-router-dom';

 test('render learn link', () => {
     render(<Router><Header /></Router> )
     const linkElement = screen.getByText(/View Current Employees/i)
     expect(linkElement).toBeInTheDocument()
   }) 

   
   test('render learn title HRnet', () => {
    render(<Router><Header /></Router> )
    const heading = screen.getByRole("heading", {level : 1})
    expect(heading).toBeInTheDocument()
   })