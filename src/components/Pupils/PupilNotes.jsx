import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'
import PupilCard from '../UI/Card/PupilCard'

const PupilNotes = ({pupils}) => {

    if (!pupils.length) {
        return (
          <h1 style={{textAlign: 'center'}}>
                Список пуст
              </h1>
        )
      }

      console.log(pupils)

    return (
        // <div>
        //     {pupils.map((pupil) => (
        //         <h1>{pupil.fio}</h1>
        //     ))}       
        // </div>
        <div className='container py-4 px-4 justify-content-center w-100' 
        style={{ backgroundImage: `url("https://thumbs.dreamstime.com/b/abstract-background-waves-white-green-mint-business-card-wallpaper-170337829.jpg")` , backgroundSize: 'cover'}}>
        {/* <div className='container py-4 px-4 justify-content-center w-100 bg-dark'> */}
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
                {pupils.map(pupil => 
                <SwiperSlide>
                    <PupilCard data={{imgSrc: `http://localhost:8000/static${pupil.profile_pic}`, title: pupil.fio, id: pupil.id
                }}/>
                </SwiperSlide>
      )}

            </Swiper>
        </div>
    )
    }

export default PupilNotes
