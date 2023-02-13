import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Login from '../../pages/Login';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('axios');

beforeEach(()=>{
    render(<Login />, {wrapper: MemoryRouter})
})

test("Авторизация", async () => {
    const mockedAxiosPost = (axios.post = jest.fn().mockResolvedValue({}));
    const btn = screen.getByTestId('login-button-element');
    const username_input = screen.getByPlaceholderText(/логин/i)
    const password_input = screen.getByPlaceholderText(/пароль/i)
    expect(username_input).toBeInTheDocument();
    expect(password_input).toBeInTheDocument();
    expect(screen.getByText(/забыли пароль/i)).toBeInTheDocument();
    screen.debug()
    fireEvent.change(username_input, {target: {value: 'student'}})
    fireEvent.change(password_input, {target: {value: '1234'}})
    fireEvent.click(btn)
    await waitFor(() => { 
        expect(mockedAxiosPost).toHaveBeenCalledTimes(1)
    });
    expect(username_input.value).toBe('student');
    expect(password_input.value).toBe('1234');
    const forgot = screen.getByTestId('forgot');
    fireEvent.click(forgot)
});