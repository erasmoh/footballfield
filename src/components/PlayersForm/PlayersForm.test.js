import { render, screen, fireEvent } from '@testing-library/react';

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
