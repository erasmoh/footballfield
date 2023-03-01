import { render, screen, fireEvent, queryByTestId } from '@testing-library/react';

// Component
import PlayersForm from './PlayersForm';

test('Render playersForm component', () => {
    render(<PlayersForm />);
    const element = screen.getByTestId('playersForm');
    expect(element).toBeInTheDocument();
});

test('should change between single and multiline', () => {
    const { getByTestId } = render(<PlayersForm />);
    const singleLineRadio = getByTestId('singleLineRadio')
    const multiLineRadio = getByTestId('multiLineRadio')

    expect(singleLineRadio.checked).toBeTruthy();
    expect(multiLineRadio.checked).toBeFalsy();
    fireEvent.click(multiLineRadio)

    expect(singleLineRadio.checked).toBeFalsy();
    expect(multiLineRadio.checked).toBeTruthy();
})

test('should change number of players', () => {
    const { getByTestId } = render(<PlayersForm />)
    const nopInput = getByTestId('playersNumberInput')

    fireEvent.change(nopInput, { target: { value: 3 } })
    expect(nopInput.value).toBe("3")
})

test('should change single new player name', () => {
    const { getByTestId } = render(<PlayersForm />)
    const newPlayerInput = getByTestId('playerInput')

    fireEvent.change(newPlayerInput, { target: { value: "John Doe" } })
    expect(newPlayerInput.value).toBe("John Doe")
})

test('should change multiple new player name', () => {
    const { getByTestId } = render(<PlayersForm />);
    const multiLineRadio = getByTestId('multiLineRadio')

    fireEvent.click(multiLineRadio)
    // Players Textarea is only available after changing the multiline
    const newPlayerTextArea = getByTestId('playersTextArea')

    fireEvent.change(newPlayerTextArea, { target: { value: "John Doe" } })
    expect(newPlayerTextArea.value).toBe("John Doe")
})

test('should save single new player after submit', () => {
    const { getByTestId, getByText } = render(<PlayersForm />)
    const newPlayerInput = getByTestId('playerInput')
    const submitButton = getByTestId('submitButton')


    fireEvent.change(newPlayerInput, { target: { value: "John Doe" } })
    fireEvent.click(submitButton)

    const newPlayer = getByText("John Doe")
    expect(newPlayer).toBeInTheDocument()
})

test('should reset list when click on reset button', () => {
    const { getByTestId, queryByText, queryByTestId } = render(<PlayersForm />)
    const newPlayerInput = getByTestId('playerInput')
    const submitButton = getByTestId('submitButton')


    fireEvent.change(newPlayerInput, { target: { value: "John Doe" } })
    fireEvent.click(submitButton)

    const resetButton = queryByTestId('resetButton')
    const newPlayer = queryByText("John Doe")
    expect(newPlayer).toBeInTheDocument()
    
    fireEvent.click(resetButton)
    expect(newPlayer).not.toBeInTheDocument()
})