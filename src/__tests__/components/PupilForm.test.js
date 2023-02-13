import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import Pupils from '../../pages/Pupils';
import PupilForm from '../../components/Pupils/PupilForm';


describe('Форма', () => {
  let file;

  beforeEach(() => {
    file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
  });

  test('Форма добавления ученика', () => {
    render(<PupilForm />);

    const addBtn = screen.getByRole('button', { name: /добавить ученика/i })
    const fio_input = screen.getByPlaceholderText(/ФИО ученика/i)
    const phone_input = screen.getByPlaceholderText(/Email: /i)
    const email_input = screen.getByPlaceholderText(/Телефон:/i)
    const photo_input = screen.getByPlaceholderText(/Фото/i)
    expect(addBtn).toBeInTheDocument();

    fireEvent.change(fio_input, {target: {value: 'Батян'}})
    fireEvent.change(phone_input, {target: {value: '1234'}})
    fireEvent.change(email_input, {target: {value: 'batyan@gmail.com'}})
    fireEvent.change(photo_input, {
      target: { files: [file] },
    })

    expect(fio_input.value).toBe('Батян');
    expect(phone_input.value).toBe('1234');
    expect(email_input.value).toBe('batyan@gmail.com');
    expect(photo_input.value).toBe('');

    fireEvent.click(addBtn)
    expect(fio_input).toBeInTheDocument();
    expect(phone_input).toBeInTheDocument();
    expect(email_input).toBeInTheDocument();
    expect(photo_input).toBeInTheDocument();
  });
})