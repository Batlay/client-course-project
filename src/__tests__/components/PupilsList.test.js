import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from "axios";
import PupilList from '../../components/Pupils/PupilList';
import PupilItem from '../../components/Pupils/PupilItem';
import ClassroomPupils from '../../components/Pupils/ClassroomPupils';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));


const pupils = 
  [
    {
        "id": 1,
        "fio": "Батян Глеб Павлович",
        "phone": "+375296805728",
        "email": "glembo322@gmail.com",
        "profile_pic": "/images/66956508.jfif",
        "date_created": "2023-01-19T16:03:17.497592Z",
        "user": 2,
        "classroom": 1
    },
    {
        "id": 5,
        "fio": "Богомаз Дмитрий",
        "phone": "1234",
        "email": "bogomaz@gmail.com",
        "profile_pic": "/images/VmmcxTVrSPM.jpg",
        "date_created": "2023-01-20T16:59:54.564036Z",
        "user": 7,
        "classroom": 1
    },
    {
        "id": 3,
        "fio": "Войтешонок Вячеслав Сергеевич",
        "phone": "1234",
        "email": "slava@gmail.com",
        "profile_pic": "/images/2.jpg",
        "date_created": "2023-01-19T17:32:30.433917Z",
        "user": 5,
        "classroom": 1
    },
    {
        "id": 4,
        "fio": "Радионов Давид",
        "phone": "1234",
        "email": "david@gmail.com",
        "profile_pic": "/images/photo_2020-08-04_21-34-26.jpg",
        "date_created": "2023-01-20T16:59:17.337244Z",
        "user": 6,
        "classroom": 1
    },
    {
        "id": 24,
        "fio": "Шаповалов Григорий Денисович",
        "phone": "1234",
        "email": "grisha@gmail.com",
        "profile_pic": "/images/%D0%A8%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2_%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%B8%D0%B9_%D0%94%D0%B5%D0%BD%D0%B8%D1%81%D0%BE%D0%B2%D0%B8%D1%87.png",
        "date_created": "2023-01-21T19:57:20.804463Z",
        "user": 27,
        "classroom": 1
    }
]

jest.mock("axios");
describe('Главная страница учителя', () => {
    test("Список", async () => {

        axios.get.mockResolvedValue({ data: pupils });
        render(<PupilList pupils={pupils} />);
        
        const pupilsList = await waitFor(() => screen.findAllByTestId("pupil"));
        expect(pupilsList).toHaveLength(5);
        expect(screen.getByText(/шаповалов/i)).toBeInTheDocument()
        // screen.debug()
        });

    test("Проверка элемента из списка учеников", () => {
        render(<PupilItem pupil={pupils[0]} />);
        // screen.debug()
        const btn = screen.getByTestId('see_btn');
        expect(btn).toBeInTheDocument()
        expect(screen.getByText(/батян/i)).toBeInTheDocument()
        fireEvent.click(btn)
        // screen.debug()
      })

    test("Список2", async () => {

    axios.get.mockResolvedValue({ data: pupils });
    render(<ClassroomPupils pupils={pupils} />);
    
    const pupilsList = await waitFor(() => screen.findAllByTestId("pupil"));
    expect(pupilsList).toHaveLength(5);
    expect(screen.getByText(/шаповалов/i)).toBeInTheDocument()
    // screen.debug()
    });
    })