import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

// Component
import FootballField from "./Home";

test('Render footbalfield', () => {
    render(<FootballField />);
    const element = screen.getByTestId('footbalfield');
    expect(element).toBeInTheDocument();
});