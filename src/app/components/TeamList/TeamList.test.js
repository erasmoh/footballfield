import { render, screen } from '@testing-library/react';

// Component
import TeamList from './TeamList';

// Mock

const teams = [["first player", "second player"], ["first player", "second player"]];
const specialPlayers = ["first player", "second player"];


test('Render teamList component', () => {
    render(<TeamList teams={teams} specialPlayers={specialPlayers} />);
    const element = screen.getAllByTestId('teamList');
    expect(element.length).toBe(2);
});

test('Render only one teamList component', () => {
    render(<TeamList teams={[["first player", "second player"]]} />);
    const element = screen.queryByTestId('teamList');
    expect(element).toBeNull();
});