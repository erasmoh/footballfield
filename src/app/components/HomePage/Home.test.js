import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'

// Component
import FootballField from "./Home";

test('Render footbalfield', async () => {
    render(<FootballField />);
    const element = screen.getByTestId('footbalfield');
    await waitFor(() => expect(element).toBeInTheDocument());
});