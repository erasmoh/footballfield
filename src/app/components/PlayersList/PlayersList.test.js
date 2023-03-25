import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

// Component
import PlayersList from './PlayersList';

// Mock
const players = ["first", "second", "third", "fourth"]

test('Render teamList component', () => {
    render(<PlayersList players={players} />);
    const element = screen.getByTestId('playersList');
    expect(element).toBeInTheDocument();
});

test('Render DeleteButton', () => {
    render(<PlayersList players={players} />)
    const element = screen.getAllByTestId('deleteButton');
    expect(element.length).toBe(4);
})

test('Click DeleteButton to remove one player', () => {
    const onDelete = jest.fn();
    render(<PlayersList players={players} onDelete={onDelete} />)
    const element = screen.getAllByTestId('deleteButton');
    expect(element.length).toBe(4);
    
    fireEvent.click(element[0]);
    expect(onDelete).toHaveBeenCalled();
})