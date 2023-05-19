import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'
import PupilCard from '../UI/Card/PupilCard'

const PupilNotes = ({pupils}) => {
    const rootUrl = process.env.NODE_ENV === 'production' ? 'https://newway.herokuapp.com' : 'http://127.0.0.1:8000'
    if (!pupils.length) {
        return (
        <h1 style={{textAlign: 'center'}}>
            Список пуст
        </h1>
        )
      }

    return (
    <div className='container py-4 px-4 justify-content-center w-100 ' 
        style={{ boxShadow: '-8px -3px 8px 0px rgba(34, 60, 80, 0.2)', 
        backgroundImage: `url("${rootUrl}/static/images/note_pupil_form.jpg")` , 
        backgroundSize: 'cover'}}>
        <Swiper
            freeMode={true}
            grabCursor={true}
            modules={FreeMode}
            className='mySwiper'
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
            }}
        >
            {pupils.map((pupil, index) => (
            <SwiperSlide key={index}>
                <PupilCard key={index} data={{imgSrc: `${rootUrl}/static${pupil.profile_pic}`, title: pupil.fio, id: pupil.id}}/>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
    )
}

export default PupilNotes
