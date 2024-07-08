import HomeHeader from '../components/home/navbar';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
// jest.mock('@/assets/images/car.png', () => 'mocked-car-image');

describe('Hero Section Component', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <HomeHeader />
      </Router>
    );

    expect(
      screen.getByText(/BCR/)
    ).toBeInTheDocument();


  });

  it('has all the navbar navigation texts', () => {
    render(
      <Router>
        <HomeHeader />
      </Router>
    );


    const nav1 = screen.getAllByText(/Our Service/);
    nav1.forEach(nav1 => {
        expect(nav1).toBeInTheDocument();
    });
    
    const nav2 = screen.getAllByText(/Why Us/);
    nav2.forEach(nav2 => {
        expect(nav2).toBeInTheDocument();
    }); 
    
    const nav3 = screen.getAllByText(/Testimonials/);
    nav3.forEach(nav3 => {
        expect(nav3).toBeInTheDocument();
    }); 

    const nav4 = screen.getAllByText(/Our Service/);
    nav4.forEach(nav4 => {
        expect(nav4).toBeInTheDocument();
    }); 


  });

  it('renders a link to Login page', () => {
    render(
      <Router>
        <HomeHeader />
      </Router>
    );

    const link = screen.getByText(/Register/);
    expect(link).toBeInTheDocument();
  });

});
