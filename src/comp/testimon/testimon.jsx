import React from 'react'
import './testimon.css'
import Avatar1 from '../../aseet/avatar1.jpg'
import Avatar2 from '../../aseet/avatar2.jpg'
import Avatar3 from '../../aseet/avatar3.jpg'
import Avatar4 from '../../aseet/avatar4.jpg'

import { Pagination} from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data=[
  {
    avatar: Avatar1,
    tname:'tansinya mataser',
    review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente alias quos eum nemo adipisci repellat corrupti corporis tenetur! Aperiam optio quaerat nihil molestiae expedita quod hic ratione debitis labore."
  },
  {
    avatar: Avatar2,
    tname:'nada osman',
    review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente alias quos eum nemo adipisci repellat corrupti corporis tenetur! Aperiam optio quaerat nihil molestiae expedita quod hic ratione debitis labore."
  },
  {
    avatar: Avatar3,
    tname:'rotak halo',
    review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente alias quos eum nemo adipisci repellat corrupti corporis tenetur! Aperiam optio quaerat nihil molestiae expedita quod hic ratione debitis labore."
  },
  {
    avatar: Avatar4,
    tname:'mataser kamal',
    review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente alias quos eum nemo adipisci repellat corrupti corporis tenetur! Aperiam optio quaerat nihil molestiae expedita quod hic ratione debitis labore."
  }
]
const testimon = () => {
  return (
    <section>
      <h5>Review from clints</h5>
      <h2>Testimonials</h2>
      <Swiper className="cont test-cont"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
       >
       {
        data.map(({avatar,tname,review},index)=>{
          return(
            <SwiperSlide key={index} className='test'>
                <div className="client-avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client-name'>{tname}</h5>
                  <small className="client-review">{review} </small>
        </SwiperSlide>
          )
        })
       }

      
      </Swiper>
    </section>
  )
}

export default testimon