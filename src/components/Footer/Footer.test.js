import { render, screen } from '@testing-library/react';

// Component
import Footer from "./Footer";

test('Render Footer', () => {
    render(<Footer />);
    const element = screen.getByTestId('footer');
    expect(element).toBeInTheDocument();
});