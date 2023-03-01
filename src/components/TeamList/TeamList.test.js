import { render, screen } from '@testing-library/react';

// Component
import TeamList from './TeamList';

// Mock

const teams = []

test('Render teamList component', () => {
    render(<TeamList teams={teams} />);
    const element = screen.getByTestId('teamList');
    expect(element).toBeInTheDocument();
});