import {Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation,EffectFade } from 'swiper';
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './home.css'
import Image1 from '../../assets/x1.webp'
import Image2 from '../../assets/x2.webp'
import Image3 from '../../assets/x3.webp'
import Image4 from '../../assets/x4.webp'

const Home = () => {
    return (
        <>
        <div className='container'> 
        <Swiper
        modules={[Navigation,EffectFade]}
        navigation
        effect={'fade'}
        speed={800}
        slidesPerView={1}
        loop
        className='mySwiper'

        >
            <SwiperSlide className='swiper-slide'>
                <img src={Image1} alt="imagen1" />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <img src={Image2} alt="imagen2" />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <img src={Image3} alt="imagen3" />
            </SwiperSlide >
            <SwiperSlide className='swiper-slide'>
                <img src={Image4} alt="imagen4" />
            </SwiperSlide>
        </Swiper> 
        </div>
        <section className='productos-Destacados'>
          <h3>Productos Destacados</h3>
          <div className="productos">
            <div className="cart-product">
                <img src={Image4} alt="Image 4" />
               <h4>Computer1</h4>
            </div>
            <div className="cart-product">
                <img src={Image4} alt="Image 4" />
               <h4>Computer1</h4>
            </div>
            <div className="cart-product">
                <img src={Image4} alt="Image 4" />
               <h4>Computer1</h4>
            </div>
            <div className="cart-product">
                <img src={Image4} alt="Image 4" />
               <h4>Computer1</h4>
            </div>

          </div>
        </section>
        </>
    );
}

export default Home;
