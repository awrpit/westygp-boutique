import React from 'react';
import { blouseData, bottomData, kurtaData } from '../data/catalog';
import Header from '../components/Header';
import HomeBannerCaraousel, {
  MobileCarousel,
} from '../components/HomeBannerCarousel';
import NewHeader from '../components/HomePage/NewHeader';
import CategorySection from '../components/HomePage/CategorySection';
import ProductDisplaySection from '../components/HomePage/ProductDisplaySection';
import ProductCard from '../components/HomePage/ProductDisplaySection/ProductCard';
import BlogSection from '../components/HomePage/BlogSection';
import NewFooter from '../components/HomePage/NewFooter';
import TrySection from '../components/HomePage/TrySection';
import Carousel from '../components/Utility/Carousel';
import PriceSection from '../components/HomePage/PriceSection';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewHeader />

        <HomeBannerCaraousel />
        <MobileCarousel />

        <CategorySection />
        {/* <CategorySection isMobile={false} /> */}

        {/* <HomeGhaghraSection /> */}

        {/* <hr className="style-eight" /> */}

        <TrySection />

        <hr className="style-eight" />

        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
          <ProductDisplaySection title="Kurta">
            {kurtaData.map((item, index) => (
              <ProductCard
                key={index}
                image={item.imgSrc1}
                title={item.title}
                link={`/catalog/kurta`}
              />
            ))}
          </ProductDisplaySection>

          <hr className="style-eight" />

          <ProductDisplaySection title="Blouse">
            {blouseData.map((item, index) => (
              <ProductCard
                key={index}
                image={item.imgSrc1}
                title={item.title}
                link={`/catalog/blouse`}
              />
            ))}
          </ProductDisplaySection>

          <hr className="style-eight" />

          <ProductDisplaySection title="Bottom">
            {bottomData.map((item, index) => (
              <ProductCard
                key={index}
                image={item.imgSrc1}
                title={item.title}
                link={`/catalog/bottom`}
              />
            ))}
          </ProductDisplaySection>
        </div>

        <hr className="style-eight" />

        {/* <!-- Wear as your wish section --> */}
        <section className="section-padding">
          <div className="heading">
            <h1
              style={{
                fontWeight: 600,
                marginTop: '-40px',
                paddingBottom: '-20px',
              }}
            >
              Wear as you wish with 4 steps
            </h1>
          </div>
          <img src="./images/dashed-line.png" alt="" className="dashed-line" />
          <div className="fix-center">
            <div className="steps-wrapper d-flex justify-content-between">
              <div className="steps-item">
                <img src="./images/4-steps-1.png" alt="" />
                <h4>
                  Select <span>Item</span>
                  <br /> to stitch
                </h4>
              </div>
              <div className="steps-item">
                <img src="./images/4-steps-2.png" alt="" />
                <h4>
                  Customize <br />
                  <span>Options</span>
                </h4>
              </div>
              <div className="steps-item">
                <img src="./images/4-steps-3.png" alt="" />
                <h4>
                  <span>
                    Provide <br />
                  </span>
                  Measurement{' '}
                  <span>
                    <br /> garment
                  </span>
                </h4>
              </div>
              <div className="steps-item">
                <img src="./images/4-steps-4.png" alt="" />
                <h4>
                  <span>Select</span> Delivery time <br />
                  Pay Us <span>on Delivery</span>
                </h4>
              </div>
            </div>
          </div>
        </section>
        {/* Wear as your wish section */}

        <hr className="style-eight" />

        <PriceSection />

        <hr className="style-eight" />

        <section
          style={{ marginTop: '150px' }}
          className="section-padding carousel grey-bg-testi"
        >
          <div className="heading">
            <h1 style={{ color: 'rgb(229, 54, 55)' }}>Testimonials</h1>
          </div>
          <div className="fix-center">
            <Carousel
              id="testimonials-carousel"
              className="owl-carousel owl-theme"
            >
              <div
                style={{
                  textAlign: 'center',
                }}
                className="item"
              >
                {/* <div className="testi-img">
                  <img src="./images/testimonial-img.png" alt="" />
                </div> */}
                <br />
                <p>
                  I am really happy with my dress. The whole process was very
                  smooth and I enjoyed it a lot. <br /> Shreya and the team
                  helped me to come up with a dress that is exactly what I was
                  looking for (and within my budget)!
                </p>
                <h4>-- Sunita Jagdish</h4>
              </div>
              <div
                style={{
                  textAlign: 'center',
                }}
                className="item"
              >
                {/* <div className="testi-img">
                  <img src="./images/testimonial-img.png" alt="" />
                </div> */}
                <br />
                <p>
                  So quick and the dress is lovely. Unfortunately, I didn’t end
                  up wearing it as intended <br />
                  (total wash out weather wise) so I am going to have it as a
                  reception dress when we get to do that!
                </p>
                <h4>-- Priya Gowda</h4>
              </div>
              <div
                style={{
                  textAlign: 'center',
                }}
                className="item"
              >
                {/* <div className="testi-img">
                  <img src="./images/testimonial-img.png" alt="" />
                </div> */}
                <br />
                <p>
                  The team was phenomenal to work with. Lots of different ideas
                  and quick to make adjustments, even working on opposite time
                  zones.
                  <br /> My pieces are absolutely perfect and I can’t wait to
                  wear them. As a plus size, I was worried because not everyone
                  knows <br /> how to fit/dress a bigger body. The team did an
                  exquisite job. Would recommend it for fashion lovers of all
                  shapes and sizes.
                </p>
                <h4>-- Pallavi Hegde</h4>
              </div>
            </Carousel>
          </div>
        </section>
        {/* <div style={{ width: '100%' }}>
          <video id="homepage-video" width="100%" height="100%" controls>
            <source
              src="https://www.youtube.com/watch?v=f02mOEt11OQ&t=727s"
              type="video/mp4"
            />
          </video>
        </div> */}

        {/* <hr className="style-eight" /> */}

        {/* <BlogSection /> */}
        <NewFooter />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default MainPage;
