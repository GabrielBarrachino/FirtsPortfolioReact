import React from "react";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section className="testimonial container section">
            <h2 className="sectionTitle">My clients say</h2>
            <span className="sectionSubtitle">Testimonials</span>

            <Swiper className="testimonialContainer mySwiper"
            slidesPerView={2}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    paceBetween: 48,
                },
            }}
            modules={[Pagination]}
            >
                {Data.map(({id, image, title, description}) => {
                    return (
                        <SwiperSlide className="testimonialCard" key={id}>
                            <img src={image} className="testimonialImg" />

                            <h3 className="testimonialName">{title}</h3>
                            <p className="testimonialDescription">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials;