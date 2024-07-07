import HeroSection from '../components/home/hero';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
// jest.mock('@/assets/images/car.png', () => 'mocked-car-image');

describe('Hero Section Component', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );

    expect(
      screen.getByText(/Sewa dan Rental Mobil/)
    ).toBeInTheDocument();


    // expect(carImage).toHaveAttribute('src', 'mocked-car-image');
  });

  it('has correct paragraph text', () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );

    const paragraph = screen.getByText(/Selamat datang di Binar Car Rental/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders a link to cars page', () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );

    const link = screen.getByText(/Mulai Sewa Mobil/);
    expect(link).toBeInTheDocument();
  });

});
