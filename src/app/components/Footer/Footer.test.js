import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

// Component
import Footer from "./Footer";

test('Render Footer', () => {
    render(<Footer />);
    const element = screen.getByTestId('footer');
    expect(element).toBeInTheDocument();
});