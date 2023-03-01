import { render, screen } from '@testing-library/react';

// Component
import PlayersForm from './PlayersForm';

test('Render playersForm component', () => {
    render(<PlayersForm />);
    const element = screen.getByTestId('playersForm');
    expect(element).toBeInTheDocument();
});