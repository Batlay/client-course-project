import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import Pupils from '../../pages/Pupils';


describe('Главная страница учителя', () => {
  test('Форма добавления ученика', () => {
    render(<Pupils />);
    const empty_check = screen.getByText(/список пуст/i)
    const addBtn = screen.getByRole('button', { name: /добавить нового ученика/i })
    const fio_input = screen.getByPlaceholderText(/ФИО ученика/i)
    const phone_input = screen.getByPlaceholderText(/Email: /i)
    const email_input = screen.getByPlaceholderText(/Телефон:/i)
    const photo_input = screen.getByPlaceholderText(/Фото/i)
    expect(empty_check).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
    expect(fio_input).toBeInTheDocument();
    expect(phone_input).toBeInTheDocument();
    expect(email_input).toBeInTheDocument();
    expect(photo_input).toBeInTheDocument();
  });


  test("Проверка нажатия кнопки", () => {
    render(<Pupils />);
    // screen.debug()
    const btn = screen.getByTestId('1');
    expect(screen.getByTestId('active_form')).not.toHaveClass('active')
    fireEvent.click(btn)
    expect(screen.getByTestId('active_form')).toHaveClass('active')
    // expect(btn.not.toHaveStyle({color: 'red'});
    // screen.debug()
  })
  
  
  })



