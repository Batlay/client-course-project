import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import Pupils from '../../pages/Pupils';
import userEvent from '@testing-library/user-event'
import axios from 'axios';

jest.mock('axios');
 
describe('Проверка запросов', () => {
  
  test("Создать ученика", async () => {
      const mockedAxiosPost = (axios.post = jest.fn().mockResolvedValue({}));
      render(<Pupils />);
      
      const button = screen.getByTestId('add_button');
      expect(button).toBeInTheDocument();
      expect(mockedAxiosPost).toHaveBeenCalledTimes(1);
      userEvent.click(button);
      await waitFor(() => { 
          expect(mockedAxiosPost).toHaveBeenCalledTimes(1)
      });

      });
  })



