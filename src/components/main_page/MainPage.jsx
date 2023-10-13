import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { fetchMainPage, selectMainPage } from '../../app/features/main_page/mainPageSlice';
// import Sidebar from './Sidebar';
import Arrow from './Arrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainPage.css';
import LoadingModal from '../../shared/loading';

const MainPage = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector(selectMainPage);

  useEffect(() => {
    dispatch(fetchMainPage());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: courses.length < 3 ? courses.length : 3,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <main>
          <div className="text-center mb-5 pt-5">
            <h1 className="fw-bold">New Courses</h1>
            <h6 className="text-secondary">Please select your favorit class</h6>
          </div>
          {loading && <LoadingModal />}
          {error && (
            <p className="alert alert-danger">
              Error:
              {' '}
              {error}
            </p>
          )}
          {courses.length > 0 && (
            <div className="slider-container">
              {/* eslint-disable react/jsx-props-no-spreading */}
              <Slider {...settings}>
                {courses.map((course) => (
                  <div key={course.id} className="col">
                    <div className="row position-relative">
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="circular-frame" />
                        <div
                          className="img-fluid m-3"
                          style={{ height: '180px', width: '180px' }}
                        >
                          <a href={`/courses/${course.id}`}>
                            <img
                              src={course.image_url}
                              alt={course.name}
                              className="img-fluid h-100 w-100"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="text-center">
                          <h5 className="m-4">{course.name}</h5>
                          <p className="text-secondary">{course.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              {/* eslint-enable react/jsx-props-no-spreading */}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MainPage;
