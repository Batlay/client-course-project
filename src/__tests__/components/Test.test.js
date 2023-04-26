import { render, screen, waitFor, userEvent, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from "axios";
import Tests from '../../pages/Tests';
import TestList from '../../components/Tests/TestList';
import Test1 from '../../components/Tests/Test1';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));


const tests = 
[
    {
        "id": 1,
        "name": "Тестирование самооценки и уровня притязаний",
        "time": 10,
        "url": "test1"
    },
    {
        "id": 2,
        "name": "Личностный опросник",
        "time": 15,
        "url": "test2"
    },
    {
        "id": 3,
        "name": "Ориентировочная анкета  (направленность личности)",
        "time": 15,
        "url": "test3"
    },
    {
        "id": 4,
        "name": "Потребность в достижении цели. Шкала оценки потребности в достижении успеха.",
        "time": 15,
        "url": "test4"
    }
]

jest.mock("axios");

describe('Главная страница ученика', () => {

    test("Тесты", async () => {
        axios.post.mockResolvedValue({ data: tests });
        render(<Tests />);
        const testsList = await waitFor(() => screen.findAllByTestId("test"));
        await expect(axios.post).toHaveBeenCalledTimes(1);
        expect(testsList).toHaveLength(4);
        expect(screen.getByText(/тестирование самооценки/i)).toBeInTheDocument()
        screen.debug()
    });


    test("Список тестов", async () => {

        axios.get.mockResolvedValue({ data: tests});
        render(<TestList tests={tests} />);
        
        const testsList = await waitFor(() => screen.findAllByTestId("test"));
        expect(testsList).toHaveLength(4);
        
        })
        
        test("Тест", async () => {
            const mockedAxiosPost = (axios.post = jest.fn().mockResolvedValue({}));
            render(<Test1 />);
            
            const button = screen.getByTestId('save_button');
            expect(button).toBeInTheDocument();
            fireEvent.click(button)
            await waitFor(() => { 
                expect(mockedAxiosPost).toHaveBeenCalledTimes(0)
            });
        })
})