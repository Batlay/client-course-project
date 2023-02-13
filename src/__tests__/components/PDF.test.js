import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import axios from 'axios';
import Report from '../../components/Report/Report';


jest.mock('axios');
 
describe('Отчет', () => {
  window.URL.createObjectURL = jest.fn();

  afterEach(() => {
    window.URL.createObjectURL.mockReset();
  });

  test("Проверка запросов", async () => {
        const mockedAxiosGet = (axios.get = jest
        .fn()
        .mockResolvedValue({ data: [] }));

      render(<Report />);
      const button = screen.getByTestId('pdf_button');
      const next_button = screen.getByTestId('next');
      const prev_button = screen.getByTestId('prev');
      expect(button).toBeInTheDocument();
      expect(next_button).toBeInTheDocument();
      expect(prev_button).toBeInTheDocument();
      expect(mockedAxiosGet).toHaveBeenCalledTimes(1);
      await userEvent.click(next_button);
      await userEvent.click(prev_button);
      await userEvent.click(button);
      expect(mockedAxiosGet).toHaveBeenCalledTimes(2);
      });
  })
