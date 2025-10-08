
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Avtar from '../../assets/avtar.png';
import Member from '../../assets/member1.png';
import Course from '../../assets/course.png';
import Author from '../../assets/author.png';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import CourseCard from '../../components/CourseCard';
import Dropdown from 'react-bootstrap/Dropdown';

import { FreeMode , Navigation } from "swiper/modules";

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main-wrapper">
          <Sidebar />
          <div className="main-content-wrapper">
            <div className="container">
              <div className="top-banner">
                <div className="banner-close">
                  <button>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 1L1 11M1 1L11 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className="banner-text">
                  <h4>Upcoming Training: Cloud Security Best Practices - <span> 25th Sep, 11 AM IST</span></h4>
                </div>
              </div>
              <div className="dashboard-main">
                <div className="inner-grid">
                  <div className="left-wrapper">
                    <div className="user-card card-global-24">
                      <div className="user-info">
                        <div className="user-img">
                          <img src={Avtar} alt="Avtar image" />
                        </div>
                        <div className="user-name">
                          <div className="edit-name-wrapper">
                            <h6>John Doe</h6>
                            <div className="edit-avtar">
                              <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12.3332H13M10 1.33316C10.2652 1.06794 10.6249 0.918945 11 0.918945C11.1857 0.918945 11.3696 0.955525 11.5412 1.0266C11.7128 1.09767 11.8687 1.20184 12 1.33316C12.1313 1.46448 12.2355 1.62038 12.3066 1.79196C12.3776 1.96354 12.4142 2.14744 12.4142 2.33316C12.4142 2.51888 12.3776 2.70277 12.3066 2.87436C12.2355 3.04594 12.1313 3.20184 12 3.33316L3.66667 11.6665L1 12.3332L1.66667 9.66649L10 1.33316Z" stroke="var(--Gray-700)" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>
                          <p>Full Stack Developer</p>
                          <div className="user-level">
                            <div className="level">
                              <span className='badge-blue text-small badge-new'>Rank: 2390</span>
                            </div>
                            <span className='text-small'>Expert Learner</span>
                          </div>
                        </div>

                      </div>
                      <div className='follow-count'>
                          <div className="followers">
                              <h6>1.2k</h6>
                              <span className='text-small'>Followers</span>
                          </div>
                          <div className="followers following">
                              <h6>320</h6>
                              <span className='text-small'>Following</span>
                          </div>
                          <div className="followers badges">
                              <h6>16</h6>
                              <span className='text-small'>Badges</span>
                          </div>
                      </div>
                    </div>
                    <div className="user-collab card-global-24">
                        <h6>Collab Corner</h6>
                        <div className="collab-list">
                          <Link to={''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.16667 3.33344H3.33333C2.89131 3.33344 2.46738 3.50904 2.15482 3.8216C1.84226 4.13416 1.66667 4.55808 1.66667 5.00011V16.6668C1.66667 17.1088 1.84226 17.5327 2.15482 17.8453C2.46738 18.1578 2.89131 18.3334 3.33333 18.3334H15C15.442 18.3334 15.8659 18.1578 16.1785 17.8453C16.4911 17.5327 16.6667 17.1088 16.6667 16.6668V10.8334M15.4167 2.08344C15.7482 1.75192 16.1978 1.56567 16.6667 1.56567C17.1355 1.56567 17.5851 1.75192 17.9167 2.08344C18.2482 2.41496 18.4344 2.8646 18.4344 3.33344C18.4344 3.80228 18.2482 4.25192 17.9167 4.58344L10 12.5001L6.66667 13.3334L7.5 10.0001L15.4167 2.08344Z" stroke="var(--Gray-800)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Spark a blog
                          </Link>
                           < Link to={''}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.5 11.5C16.5 11.942 16.3244 12.366 16.0118 12.6785C15.6993 12.9911 15.2754 13.1667 14.8333 13.1667H4.83333L1.5 16.5V3.16667C1.5 2.72464 1.67559 2.30072 1.98816 1.98816C2.30072 1.67559 2.72464 1.5 3.16667 1.5H14.8333C15.2754 1.5 15.6993 1.67559 16.0118 1.98816C16.3244 2.30072 16.5 2.72464 16.5 3.16667V11.5Z" stroke="var(--Gray-800)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Community Talk
                          </Link>
                          <Link to={''}>
                              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.66667 1.66675H3C2.55797 1.66675 2.13405 1.84234 1.82149 2.1549C1.50893 2.46746 1.33333 2.89139 1.33333 3.33341V16.6667C1.33333 17.1088 1.50893 17.5327 1.82149 17.8453C2.13405 18.1578 2.55797 18.3334 3 18.3334H13C13.442 18.3334 13.8659 18.1578 14.1785 17.8453C14.4911 17.5327 14.6667 17.1088 14.6667 16.6667V6.66675M9.66667 1.66675L14.6667 6.66675M9.66667 1.66675V6.66675H14.6667M11.3333 10.8334H4.66667M11.3333 14.1667H4.66667M6.33333 7.50008H4.66667" stroke="var(--Gray-800)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            Upload your content
                          </Link>
                          <Link to={''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 7.49992H3.75C3.19747 7.49992 2.66756 7.28043 2.27686 6.88972C1.88616 6.49902 1.66667 5.96912 1.66667 5.41659C1.66667 4.86405 1.88616 4.33415 2.27686 3.94345C2.66756 3.55275 3.19747 3.33325 3.75 3.33325H5" stroke="var(--Gray-800)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M15 7.49992H16.25C16.8025 7.49992 17.3324 7.28043 17.7231 6.88972C18.1138 6.49902 18.3333 5.96912 18.3333 5.41659C18.3333 4.86405 18.1138 4.33415 17.7231 3.94345C17.3324 3.55275 16.8025 3.33325 16.25 3.33325H15" stroke="var(--Gray-800)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M3.33333 18.3333H16.6667" stroke="var(--Gray-800)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M8.33333 12.2166V14.1666C8.33333 14.6249 7.94167 14.9832 7.525 15.1749C6.54167 15.6249 5.83333 16.8666 5.83333 18.3332" stroke="var(--Gray-800)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M11.6667 12.2166V14.1666C11.6667 14.6249 12.0583 14.9832 12.475 15.1749C13.4583 15.6249 14.1667 16.8666 14.1667 18.3332" stroke="var(--Gray-800)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M15 1.66675H5V7.50008C5 8.82616 5.52678 10.0979 6.46447 11.0356C7.40215 11.9733 8.67392 12.5001 10 12.5001C11.3261 12.5001 12.5979 11.9733 13.5355 11.0356C14.4732 10.0979 15 8.82616 15 7.50008V1.66675Z" stroke="var(--Gray-800)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Knowledge expositing
                          </Link>
                          <Link to={''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.575 7.50008C7.77092 6.94314 8.15763 6.4735 8.66663 6.17436C9.17563 5.87521 9.77408 5.76586 10.356 5.86567C10.9379 5.96549 11.4657 6.26802 11.8459 6.71969C12.2261 7.17136 12.4342 7.74302 12.4333 8.33342C12.4333 10.0001 9.93333 10.8334 9.93333 10.8334M10 14.1667H10.0083M18.3333 10.0001C18.3333 14.6025 14.6024 18.3334 10 18.3334C5.39763 18.3334 1.66667 14.6025 1.66667 10.0001C1.66667 5.39771 5.39763 1.66675 10 1.66675C14.6024 1.66675 18.3333 5.39771 18.3333 10.0001Z" stroke="var(--Gray-800)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Ask your peer
                          </Link>
                           <Link to={''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.675 13.2417C17.1449 14.4955 16.3157 15.6003 15.2599 16.4595C14.2041 17.3187 12.954 17.9063 11.6187 18.1707C10.2834 18.4352 8.90369 18.3685 7.60012 17.9766C6.29656 17.5846 5.10885 16.8793 4.14085 15.9223C3.17284 14.9653 2.45401 13.7857 2.0472 12.4867C1.64038 11.1877 1.55797 9.80882 1.80716 8.47061C2.05636 7.1324 2.62958 5.8756 3.4767 4.81011C4.32383 3.74461 5.41907 2.90285 6.66667 2.35841M18.3333 10.0001C18.3333 8.90573 18.1178 7.8221 17.699 6.81105C17.2802 5.80001 16.6664 4.88135 15.8926 4.10752C15.1187 3.3337 14.2001 2.71987 13.189 2.30109C12.178 1.8823 11.0943 1.66675 10 1.66675V10.0001H18.3333Z" stroke="var(--Gray-800)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            My Growth Plan IDP
                          </Link>
                        </div>
                    </div>
                  </div>
                  <div className="middle-wrapper">
                      <div className="search-box card-global-24">
                          <div className="box-title">
                            <div className="title-img">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5202 8.35013L8.96456 7.0383L7.65324 3.47511C7.57128 3.26069 7.43266 3.08405 7.24984 2.95161C7.06701 2.82548 6.84637 2.75607 6.61942 2.75607C6.39877 2.75607 6.17813 2.82548 5.99531 2.95161C5.81248 3.08405 5.66755 3.26069 5.5919 3.47511L4.28058 7.03183L0.718612 8.34366C0.510573 8.41934 0.327856 8.56448 0.195467 8.74737C0.0693832 8.93026 0 9.15114 0 9.37188C0 9.59892 0.0693832 9.81965 0.195467 10.0025C0.327856 10.1854 0.510573 10.324 0.718612 10.4059L4.27427 11.7242L5.58559 15.281C5.66124 15.4954 5.80617 15.6783 5.989 15.8045C6.17182 15.9369 6.39246 16 6.61311 16C6.84006 16 7.0607 15.9369 7.24353 15.8045C7.42635 15.6783 7.56497 15.4954 7.64693 15.281L8.95825 11.7242L12.5139 10.4124C12.7283 10.3367 12.911 10.1979 13.0371 10.0087C13.1694 9.82581 13.2325 9.60493 13.2325 9.38419C13.2325 9.15716 13.1694 8.93642 13.0371 8.75353C12.911 8.57064 12.7283 8.43211 12.5139 8.35013H12.5202ZM8.58009 10.6899C8.42879 10.7403 8.29002 10.8285 8.18285 10.9421C8.06937 11.0556 7.98117 11.188 7.92443 11.3393L6.61942 14.8902L5.30809 11.3393C5.25766 11.188 5.16946 11.0556 5.05599 10.9421C4.94251 10.8285 4.81004 10.7403 4.65874 10.6899L1.11586 9.37804L4.65874 8.06621C4.81004 8.01575 4.94251 7.92752 5.05599 7.814C5.16946 7.70048 5.25766 7.56812 5.30809 7.41676L6.61942 3.87236L7.93074 7.41676C7.98117 7.56812 8.06937 7.70679 8.18285 7.814C8.29632 7.92752 8.42879 8.01591 8.58009 8.07267L12.1293 9.37804L8.58009 10.6899ZM8.82589 2.20732C8.82589 2.05596 8.88263 1.91714 8.9898 1.81624C9.09067 1.70902 9.22928 1.65241 9.38058 1.65241H10.4838V0.548751C10.4838 0.403698 10.5406 0.264879 10.6414 0.157666C10.7486 0.0567597 10.8874 0 11.0324 0C11.1774 0 11.3161 0.0567597 11.4233 0.157666C11.5242 0.264879 11.5871 0.403698 11.5871 0.548751V1.65241H12.6903C12.8353 1.65241 12.974 1.70902 13.0749 1.81624C13.1821 1.91714 13.2388 2.05596 13.2388 2.20732C13.2388 2.35237 13.1821 2.49134 13.0749 2.59225C12.974 2.69946 12.8353 2.75607 12.6903 2.75607H11.5871V3.85973C11.5871 4.00479 11.5242 4.1436 11.4233 4.25082C11.3161 4.35172 11.1774 4.41464 11.0324 4.41464C10.8874 4.41464 10.7486 4.35172 10.6414 4.25082C10.5406 4.1436 10.4838 4.00479 10.4838 3.85973V2.75607H9.38058C9.22928 2.75607 9.09067 2.69946 8.9898 2.59225C8.88263 2.49134 8.82589 2.35237 8.82589 2.20732ZM16 5.51214C16 5.6635 15.9371 5.80232 15.8362 5.90323C15.7291 6.01044 15.5903 6.06705 15.4453 6.06705H14.8968V6.62196C14.8968 6.76702 14.8339 6.90598 14.733 7.00689C14.6258 7.1141 14.4871 7.17071 14.3421 7.17071C14.1971 7.17071 14.0583 7.1141 13.9511 7.00689C13.8503 6.90598 13.7935 6.76702 13.7935 6.62196V6.06705H13.2388C13.0938 6.06705 12.9551 6.01044 12.8479 5.90323C12.747 5.80232 12.6903 5.6635 12.6903 5.51214C12.6903 5.36709 12.747 5.22812 12.8479 5.12722C12.9551 5.02 13.0938 4.96339 13.2388 4.96339H13.7935V4.41464C13.7935 4.26328 13.8503 4.12446 13.9511 4.02356C14.0583 3.91634 14.1971 3.85973 14.3421 3.85973C14.4871 3.85973 14.6258 3.91634 14.733 4.02356C14.8339 4.12446 14.8968 4.26328 14.8968 4.41464V4.96339H15.4453C15.5903 4.96339 15.7291 5.02 15.8362 5.12722C15.9371 5.22812 16 5.36709 16 5.51214Z" fill="white" />
                              </svg>
                            </div>
                            <div className="title-name">
                               <h6>SmartLearn AI</h6>
                              <p>Your intelligent learning companion</p>
                            </div>
                             
                          </div>
                          <div className="serach-ai-input">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.75 14.7501L11.495 11.4951" stroke="var(--Gray-800)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M7.25 13.25C10.5637 13.25 13.25 10.5637 13.25 7.25C13.25 3.93629 10.5637 1.25 7.25 1.25C3.93629 1.25 1.25 3.93629 1.25 7.25C1.25 10.5637 3.93629 13.25 7.25 13.25Z" stroke="var(--Gray-800)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <input id='search' placeholder='Search courses, challenges, or ask AI...' type="text" />
                            <button className='btn btn-primary btn-h44 btn-global'>Ask AI</button>
                          </div>
                      </div>
                      <div className='my-learning'>
                        <div className='learning-tabs'>
                          <div className="tabs-scroll">
                            <ul>
                              <li>
                                <div className="learning-tab-list learning-tab-list-active">
                                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00001 3.66667C8.00001 2.95942 7.71906 2.28115 7.21896 1.78105C6.71886 1.28095 6.04059 1 5.33334 1H1.33334V11H6.00001C6.53044 11 7.03915 11.2107 7.41422 11.5858C7.7893 11.9609 8.00001 12.4696 8.00001 13M8.00001 3.66667V13M8.00001 3.66667C8.00001 2.95942 8.28096 2.28115 8.78106 1.78105C9.28116 1.28095 9.95943 1 10.6667 1H14.6667V11H10C9.46958 11 8.96087 11.2107 8.5858 11.5858C8.21072 11.9609 8.00001 12.4696 8.00001 13" stroke="#98A2B3" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                                  <p>My Hub</p>
                                </div>
                              </li>
                              <li>
                                <div className="learning-tab-list">
                                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 14.6665C4.10457 14.6665 5 13.7711 5 12.6665C5 11.5619 4.10457 10.6665 3 10.6665C1.89543 10.6665 1 11.5619 1 12.6665C1 13.7711 1.89543 14.6665 3 14.6665Z" stroke="#98A2B3" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 12.6668H10.6667C11.2855 12.6668 11.879 12.421 12.3166 11.9834C12.7542 11.5458 13 10.9523 13 10.3335C13 9.71466 12.7542 9.12116 12.3166 8.68358C11.879 8.24599 11.2855 8.00016 10.6667 8.00016H3.33333C2.71449 8.00016 2.121 7.75433 1.68342 7.31674C1.24583 6.87916 1 6.28567 1 5.66683C1 5.04799 1.24583 4.4545 1.68342 4.01691C2.121 3.57933 2.71449 3.3335 3.33333 3.3335H9" stroke="#98A2B3" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 5.3335C12.1046 5.3335 13 4.43807 13 3.3335C13 2.22893 12.1046 1.3335 11 1.3335C9.89543 1.3335 9 2.22893 9 3.3335C9 4.43807 9.89543 5.3335 11 5.3335Z" stroke="#98A2B3" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>

                                  <p>Career Compass</p>
                                </div>
                              </li>
                              <li>
                                <div className="learning-tab-list">
                                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6666 9L14.6666 5L10.6666 1M5.33331 1L1.33331 5L5.33331 9" stroke="#98A2B3" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                                  <p>Code & Quest</p>
                                </div>
                              </li>
                               <li>
                                <div className="learning-tab-list">
                                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33331 1L10.6666 7L1.33331 13V1Z" stroke="#98A2B3" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                                  <p>Playground</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='tabs-content user-collab  card-global-24'>
                            <div className="trainning-course">
                              <div className="event-hub-title">
                                <h6>Assigned Training</h6>
                                <div className="view-all-event">
                                  <Link to={''} className="text-small btn-outline btn-global status-h24">View All</Link>
                                </div>
                              </div>
                              <div className='training-slider'>
                                <Swiper
                                  slidesPerView={1.6}
                                  spaceBetween={16}
                                  pagination={{
                                    clickable: true,
                                  }}
                                  className="myswiper"
                                    breakpoints={{
                                    1366:{
                                      slidesPerView: 1.6,
                                    },
                                    1200:{
                                      slidesPerView: 1.3,
                                    },
                                    1024:{
                                      slidesPerView: 1.5,
                                    },
                                  
                                    0: {
                                      slidesPerView: 1.1, // for tablets/mobiles
                                    },
                                  }}
                                >
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>

                                </Swiper>
                              </div>
                            </div>
                             <div className="trainning-course">
                              <div className="event-hub-title">
                                <h6>My Courses</h6>
                                <div className="view-all-event">
                                  <Link to={''} className="text-small btn-outline btn-global status-h24">View All</Link>
                                </div>
                              </div>
                              <div className='training-slider'>
                                <Swiper
                                  slidesPerView={1.3}
                                  spaceBetween={16}
                                  pagination={{
                                    clickable: true,
                                  }}
                                  className="myswiper"
                                    breakpoints={{
                                    1366:{
                                      slidesPerView: 1.3,
                                    },
                                    1200:{
                                      slidesPerView: 1.1,
                                    },
                                     1024:{
                                      slidesPerView: 1.3,
                                    },
                                  
                                    0: {
                                      slidesPerView: 1.1, // for tablets/mobiles
                                    },
                                  }}
                                >
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>

                                </Swiper>
                              
                              </div>
                            </div>
                            <div className="trainning-course">
                              <div className="event-hub-title">
                                <h6>My Learning Path</h6>
                              </div>
                              <div className='training-slider'>
                                <Swiper
                                  slidesPerView={1.3}
                                  spaceBetween={16}
                                  pagination={{
                                    clickable: true,
                                  }}
                                  className="myswiper"
                                    breakpoints={{
                                    1366:{
                                      slidesPerView: 1.3,
                                    },
                                    1200:{
                                      slidesPerView: 1.1,
                                    },
                                    1024:{
                                      slidesPerView: 1.3,
                                    },
                                    0: {
                                      slidesPerView: 1.1, // for tablets/mobiles
                                    },
                                  }}
                                >
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>

                                </Swiper>
                              </div>
                            </div>
                             <div className="trainning-course">
                              <div className="event-hub-title">
                                <h6>Recommendation for you</h6>
                              </div>
                              <div className='training-slider'>
                                <Swiper
                                  slidesPerView={1.3}
                                  spaceBetween={16}
                                  pagination={{
                                    clickable: true,
                                  }}
                                  className="myswiper"
                                  breakpoints={{
                                     1366:{
                                      slidesPerView: 1.3,
                                    },
                                    1200:{
                                      slidesPerView: 1.1,
                                    },
                                    1024:{
                                      slidesPerView: 1.3,
                                    },
                                    0: {
                                      slidesPerView: 1.1, // for tablets/mobiles
                                    },
                                  }}
                                >
                                  
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>

                                </Swiper>
                              </div>
                            </div>
                              <div className="trainning-course">
                              <div className="event-hub-title">
                                <h6>My Playlist</h6>
                                <div className="view-all-event">
                                  <Link to={''} className="text-small btn-outline btn-global status-h24">View All</Link>
                                </div>
                              </div>
                              <div className='training-slider'>
                                <Swiper
                                  slidesPerView={1.8}
                                  spaceBetween={16}
                                  pagination={{
                                    clickable: true,
                                  }}
                                  className="myswiper"
                                  breakpoints={{
                                     1366:{
                                      slidesPerView: 1.8,
                                    }, 
                                    1200:{
                                      slidesPerView: 1.3,
                                    },
                                     1024:{
                                      slidesPerView: 1.5,
                                    },
                                    0: {
                                      slidesPerView: 1.1, // for tablets/mobiles
                                    },
                                  }}
                                >
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <CourseCard />
                                  </SwiperSlide>

                                </Swiper>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="right-wrapper">
                      <div className="user-collab  card-global-24">
                          <div className="event-hub-title">
                              <h6>Event Hub</h6>
                              <div className="view-all-event">
                                  <Link to={''} className='text-small btn-outline btn-global status-h24'>View All</Link>
                              </div>
                          </div>
                          <div className='event-card-calendar'>
                            <div className="month-dropdown">
                              <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                  January 2025
                                  <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 3.5L0.5 0.5H7.5L4 3.5Z" fill="var(--Gray-600)" />
                                  </svg>

                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">Feb</Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">March</Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">April</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                                  
                              <Swiper
                                slidesPerView={5.7}
                                spaceBetween={6}
                                freeMode={true}
                                 navigation={{
                                    nextEl: ".custom-next",
                                    prevEl: ".custom-prev",
                                  }}
                                pagination={{
                                  clickable: true,
                                }}
                                modules={[FreeMode , Navigation]}
                                className="calandar-slider"
                                  breakpoints={{
                                    1200:{
                                      slidesPerView:5.2
                                    },
                                     1024:{
                                      slidesPerView: 12.5,
                                    },
                                    
                                  }}
                              >
                                <SwiperSlide>
                                  <div className='calendar-body'>
                                      <h6>1</h6>
                                      <p className='text-small'>tue</p>
                                      <span className='dot'></span>
                                  </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='calendar-body calendar-body-active'>
                                      <h6>2</h6>
                                      <p className='text-small'>tue</p>
                                      <span className='dot'></span>
                                  </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                  <div className='calendar-body'>
                                      <h6>3</h6>
                                      <p className='text-small'>tue</p>
                                      <span className='dot'></span>
                                  </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                  <div className='calendar-body'>
                                      <h6>4</h6>
                                      <p className='text-small'>tue</p>
                                      <span className='dot'></span>
                                  </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                  <div className='calendar-body'>
                                      <h6>5</h6>
                                      <p className='text-small'>tue</p>
                                      <span className='dot'></span>
                                  </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                  <div className='calendar-body'>
                                      <h6>6</h6>
                                      <p className='text-small'>tue</p>
                                      <span className='dot'></span>
                                  </div>
                                </SwiperSlide>
                                 <SwiperSlide>
                                  <div className='calendar-body'>
                                      <h6>7</h6>
                                      <p className='text-small'>tue</p>
                                      <span className='dot'></span>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='calendar-body'>
                                      <h6>8</h6>
                                      <p className='text-small'>tue</p>
                                      <span className='dot'></span>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='calendar-body'>
                                      <h6>9</h6>
                                      <p className='text-small'>tue</p>
                                      <span className='dot'></span>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='calendar-body'>
                                      <h6>10</h6>
                                      <p className='text-small'>tue</p>
                                      <span className='dot'></span>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='calendar-body'>
                                      <h6>11</h6>
                                      <p className='text-small'>tue</p>
                                      <span className='dot'></span>
                                  </div>
                                </SwiperSlide>
                             
                              </Swiper>
                            <div className='calander-slider-btn'>
                              <div className="custom-prev">
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.5 11L1.5 6L6.5 1" stroke="var(--Gray-800)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                              </div>
                              <div className="custom-next">
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.5 11L6.5 6L1.5 1" stroke="var(--Gray-800)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="event-card">
                            <div className="event-card-list card-blue card-global-16">
                              <div className="event-time">
                                <div className="dot"></div>
                                <span className='text-small'>10:00 - 10:30</span>
                              </div>
                              <div className="event-title">
                                <h4>Training</h4>
                                <span className='text-small '>Advanced Leadership Strategies</span>
                              </div>
                            </div>
                            <div className="event-card-list card-green card-global-16">
                              <div className="event-time">
                                <div className="dot"></div>
                                <span className='text-small'>10:00 - 10:30</span>
                              </div>
                              <div className="event-title">
                                <h4>Works review</h4>
                                <span className='text-small '>Figma fundamentals : first step into UI/UX Design</span>
                              </div>
                            </div>
                              
                          </div>
                      </div>
                      <div className="user-collab  card-global-24">
                          <div className="event-hub-title">
                              <h6>Leaderboard</h6>
                              <div className="view-all-event">
                                  <Link to={''} className='text-small btn-outline btn-global status-h24' >View All</Link>
                              </div>
                          </div>
                          <div className="leader-board-card">
                            <div className="board-list">
                              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.63501 1.72156C9.67098 1.65623 9.72382 1.60176 9.78802 1.56382C9.85222 1.52587 9.92543 1.50586 10 1.50586C10.0746 1.50586 10.1478 1.52587 10.212 1.56382C10.2762 1.60176 10.329 1.65623 10.365 1.72156L12.825 6.39156C12.8837 6.4997 12.9656 6.5935 13.0648 6.66625C13.164 6.73899 13.2781 6.78886 13.3988 6.81228C13.5196 6.8357 13.6441 6.83209 13.7633 6.80171C13.8825 6.77133 13.9935 6.71493 14.0883 6.63656L17.6525 3.58323C17.7209 3.52758 17.8052 3.49508 17.8933 3.4904C17.9814 3.48572 18.0687 3.5091 18.1426 3.55718C18.2165 3.60527 18.2733 3.67557 18.3047 3.75797C18.3362 3.84037 18.3406 3.93062 18.3175 4.01573L15.9558 12.5541C15.9076 12.7288 15.8038 12.883 15.66 12.9934C15.5163 13.1038 15.3404 13.1643 15.1592 13.1657H4.84167C4.66029 13.1645 4.48427 13.104 4.34033 12.9937C4.1964 12.8833 4.09242 12.7289 4.04417 12.5541L1.68334 4.01656C1.66022 3.93146 1.66469 3.84121 1.69613 3.75881C1.72756 3.6764 1.78433 3.6061 1.85826 3.55802C1.93219 3.50993 2.01947 3.48655 2.10754 3.49123C2.19561 3.49591 2.27992 3.52841 2.34834 3.58406L5.91167 6.6374C6.00651 6.71576 6.11751 6.77216 6.23673 6.80254C6.35594 6.83293 6.4804 6.83653 6.60117 6.81311C6.72195 6.78969 6.83604 6.73982 6.93525 6.66708C7.03447 6.59434 7.11634 6.50053 7.17501 6.3924L9.63501 1.72156Z" stroke="#FDB022" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.16669 16.5H15.8334" stroke="#FDB022" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              <div className="board-detail">
                                  <div className="board-detail-left">
                                    <img src={Member} alt="Member" />
                                    <div className="member-detail">
                                        <p>Sarah Chen</p>
                                        <div className="trophy-wrapper">
                                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 7.33008V8.14308C4.99811 8.31439 4.95224 8.48234 4.86679 8.63083C4.78134 8.77932 4.65917 8.90337 4.512 8.99108C4.19957 9.22249 3.94542 9.52357 3.76974 9.87041C3.59407 10.2173 3.5017 10.6003 3.5 10.9891" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7 7.33008V8.14308C7.00189 8.31439 7.04776 8.48234 7.13321 8.63083C7.21866 8.77932 7.34083 8.90337 7.488 8.99108C7.80043 9.22249 8.05458 9.52357 8.23026 9.87041C8.40593 10.2173 8.4983 10.6003 8.5 10.9891" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9 4.5H9.75C10.0815 4.5 10.3995 4.3683 10.6339 4.13388C10.8683 3.89946 11 3.58152 11 3.25C11 2.91848 10.8683 2.60054 10.6339 2.36612C10.3995 2.1317 10.0815 2 9.75 2H9" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2 11H10" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 4.5C3 5.29565 3.31607 6.05871 3.87868 6.62132C4.44129 7.18393 5.20435 7.5 6 7.5C6.79565 7.5 7.55871 7.18393 8.12132 6.62132C8.68393 6.05871 9 5.29565 9 4.5V1.5C9 1.36739 8.94732 1.24021 8.85355 1.14645C8.75979 1.05268 8.63261 1 8.5 1H3.5C3.36739 1 3.24021 1.05268 3.14645 1.14645C3.05268 1.24021 3 1.36739 3 1.5V4.5Z" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 4.5H2.25C1.91848 4.5 1.60054 4.3683 1.36612 4.13388C1.1317 3.89946 1 3.58152 1 3.25C1 2.91848 1.1317 2.60054 1.36612 2.36612C1.60054 2.1317 1.91848 2 2.25 2H3" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                          <span className='text-small'>12,450</span>
                                          <span className='plus-trophy text-small'>+250</span>
                                        </div>
                                    </div>
                                  </div>
                                   <div className="board-detail-right">
                                      <span className='badge-purple text-small badge-new'>Pro</span>
                                   </div>
                              </div>
                            </div>
                            <div className="board-list">
                              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00832 12.5001L1.21665 5.95008C1.05315 5.66748 0.976258 5.34307 0.995518 5.01715C1.01478 4.69122 1.12934 4.37813 1.32498 4.11675L2.66665 2.33341C2.8219 2.12642 3.0232 1.95842 3.25463 1.8427C3.48605 1.72699 3.74124 1.66675 3.99998 1.66675H14C14.2587 1.66675 14.5139 1.72699 14.7453 1.8427C14.9768 1.95842 15.1781 2.12642 15.3333 2.33341L16.6667 4.11675C16.8636 4.37729 16.9796 4.68995 17.0004 5.01589C17.0211 5.34183 16.9456 5.66668 16.7833 5.95008L12.9917 12.5001" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.16666 9.99992L3.26666 1.83325" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.83331 9.99992L14.7333 1.83325" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.66669 5.83325H12.3334" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.99998 18.3333C11.3012 18.3333 13.1666 16.4679 13.1666 14.1667C13.1666 11.8655 11.3012 10 8.99998 10C6.69879 10 4.83331 11.8655 4.83331 14.1667C4.83331 16.4679 6.69879 18.3333 8.99998 18.3333Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.99998 14.9999V13.3333H8.58331" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              <div className="board-detail">
                                  <div className="board-detail-left">
                                    <img src={Member} alt="Member" />
                                    <div className="member-detail">
                                        <p>Alex Kim</p>
                                        <div className="trophy-wrapper">
                                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 7.33008V8.14308C4.99811 8.31439 4.95224 8.48234 4.86679 8.63083C4.78134 8.77932 4.65917 8.90337 4.512 8.99108C4.19957 9.22249 3.94542 9.52357 3.76974 9.87041C3.59407 10.2173 3.5017 10.6003 3.5 10.9891" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7 7.33008V8.14308C7.00189 8.31439 7.04776 8.48234 7.13321 8.63083C7.21866 8.77932 7.34083 8.90337 7.488 8.99108C7.80043 9.22249 8.05458 9.52357 8.23026 9.87041C8.40593 10.2173 8.4983 10.6003 8.5 10.9891" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9 4.5H9.75C10.0815 4.5 10.3995 4.3683 10.6339 4.13388C10.8683 3.89946 11 3.58152 11 3.25C11 2.91848 10.8683 2.60054 10.6339 2.36612C10.3995 2.1317 10.0815 2 9.75 2H9" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2 11H10" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 4.5C3 5.29565 3.31607 6.05871 3.87868 6.62132C4.44129 7.18393 5.20435 7.5 6 7.5C6.79565 7.5 7.55871 7.18393 8.12132 6.62132C8.68393 6.05871 9 5.29565 9 4.5V1.5C9 1.36739 8.94732 1.24021 8.85355 1.14645C8.75979 1.05268 8.63261 1 8.5 1H3.5C3.36739 1 3.24021 1.05268 3.14645 1.14645C3.05268 1.24021 3 1.36739 3 1.5V4.5Z" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 4.5H2.25C1.91848 4.5 1.60054 4.3683 1.36612 4.13388C1.1317 3.89946 1 3.58152 1 3.25C1 2.91848 1.1317 2.60054 1.36612 2.36612C1.60054 2.1317 1.91848 2 2.25 2H3" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                          <span className='text-small'>11,890</span>
                                          <span className='plus-trophy text-small'>+180</span>
                                        </div>
                                    </div>
                                  </div>
                                   <div className="board-detail-right">
                                      <span className='badge-blue text-small badge-new'>Expert</span>
                                   </div>
                              </div>
                            </div>
                            <div className="board-list">
                              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00832 12.5001L1.21665 5.95008C1.05315 5.66748 0.976258 5.34307 0.995518 5.01715C1.01478 4.69122 1.12934 4.37813 1.32498 4.11675L2.66665 2.33341C2.8219 2.12642 3.0232 1.95842 3.25463 1.8427C3.48605 1.72699 3.74124 1.66675 3.99998 1.66675H14C14.2587 1.66675 14.5139 1.72699 14.7453 1.8427C14.9768 1.95842 15.1781 2.12642 15.3333 2.33341L16.6667 4.11675C16.8636 4.37729 16.9796 4.68995 17.0004 5.01589C17.0211 5.34183 16.9456 5.66668 16.7833 5.95008L12.9917 12.5001" stroke="#CF8701" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.16666 9.99992L3.26666 1.83325" stroke="#CF8701" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.83331 9.99992L14.7333 1.83325" stroke="#CF8701" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.66669 5.83325H12.3334" stroke="#CF8701" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.99998 18.3333C11.3012 18.3333 13.1666 16.4679 13.1666 14.1667C13.1666 11.8655 11.3012 10 8.99998 10C6.69879 10 4.83331 11.8655 4.83331 14.1667C4.83331 16.4679 6.69879 18.3333 8.99998 18.3333Z" stroke="#CF8701" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.99998 14.9999V13.3333H8.58331" stroke="#CF8701" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              <div className="board-detail">
                                  <div className="board-detail-left">
                                    <img src={Member} alt="Member" />
                                    <div className="member-detail">
                                        <p>John Doe</p>
                                        <div className="trophy-wrapper">
                                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 7.33008V8.14308C4.99811 8.31439 4.95224 8.48234 4.86679 8.63083C4.78134 8.77932 4.65917 8.90337 4.512 8.99108C4.19957 9.22249 3.94542 9.52357 3.76974 9.87041C3.59407 10.2173 3.5017 10.6003 3.5 10.9891" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7 7.33008V8.14308C7.00189 8.31439 7.04776 8.48234 7.13321 8.63083C7.21866 8.77932 7.34083 8.90337 7.488 8.99108C7.80043 9.22249 8.05458 9.52357 8.23026 9.87041C8.40593 10.2173 8.4983 10.6003 8.5 10.9891" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9 4.5H9.75C10.0815 4.5 10.3995 4.3683 10.6339 4.13388C10.8683 3.89946 11 3.58152 11 3.25C11 2.91848 10.8683 2.60054 10.6339 2.36612C10.3995 2.1317 10.0815 2 9.75 2H9" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2 11H10" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 4.5C3 5.29565 3.31607 6.05871 3.87868 6.62132C4.44129 7.18393 5.20435 7.5 6 7.5C6.79565 7.5 7.55871 7.18393 8.12132 6.62132C8.68393 6.05871 9 5.29565 9 4.5V1.5C9 1.36739 8.94732 1.24021 8.85355 1.14645C8.75979 1.05268 8.63261 1 8.5 1H3.5C3.36739 1 3.24021 1.05268 3.14645 1.14645C3.05268 1.24021 3 1.36739 3 1.5V4.5Z" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 4.5H2.25C1.91848 4.5 1.60054 4.3683 1.36612 4.13388C1.1317 3.89946 1 3.58152 1 3.25C1 2.91848 1.1317 2.60054 1.36612 2.36612C1.60054 2.1317 1.91848 2 2.25 2H3" stroke="#FDB022" stroke-linecap="round" stroke-linejoin="round" />
                                          </svg>
                                          <span className='text-small'>10,320</span>
                                          <span className='plus-trophy text-small'>+95</span>
                                        </div>
                                    </div>
                                  </div>
                                   <div className="board-detail-right">
                                      <span className='badge-yellow text-small badge-new'>Rising Star</span>
                                   </div>
                              </div>
                            </div>
                         
                          </div>
                      </div>
                      <div className="user-collab  card-global-24">
                        <div className="event-hub-title">
                            <h6>Trending Courses</h6>
                            <div className="view-all-event">
                                <Link to={''} className='text-small btn-outline btn-global status-h24'>View All</Link>
                            </div>
                        </div>  
                        <div className="course-card">
                            <div className="course-card-list">
                                <div className="course-img">
                                  <img src={Course} alt="Course" />
                                  <span>
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6.66663 0.916748H9.16663V3.41675" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M9.16671 0.916748L5.62504 4.45841L3.54171 2.37508L0.833374 5.08341" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                  </span>
                                </div>
                                <div className="course-detail">
                                  <div className="course-name">
                                      <p>Advanced React</p>
                                  </div>
                                  <div className="course-author">
                                    <img src={Author} alt="Author" />
                                    <span className='text-small'>Alex Chen</span>
                                  </div>
                                  <div className="course-total-info">
                                    <div className="rating">
                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.76255 1.14745C5.78446 1.10318 5.81831 1.06591 5.86027 1.03986C5.90224 1.01381 5.95065 1 6.00005 1C6.04944 1 6.09785 1.01381 6.13982 1.03986C6.18179 1.06591 6.21563 1.10318 6.23755 1.14745L7.39255 3.48695C7.46863 3.64093 7.58095 3.77415 7.71986 3.87517C7.85876 3.9762 8.02011 4.042 8.19004 4.06695L10.773 4.44495C10.822 4.45204 10.868 4.47268 10.9058 4.50455C10.9436 4.53641 10.9718 4.57822 10.9871 4.62525C11.0023 4.67228 11.0042 4.72265 10.9923 4.77066C10.9805 4.81868 10.9555 4.86242 10.92 4.89695L9.05205 6.71595C8.92885 6.836 8.83668 6.98419 8.78346 7.14776C8.73025 7.31134 8.71758 7.48539 8.74655 7.65495L9.18755 10.2249C9.19619 10.2739 9.1909 10.3242 9.17229 10.3703C9.15369 10.4163 9.12251 10.4563 9.08232 10.4854C9.04212 10.5146 8.99453 10.5319 8.94498 10.5354C8.89542 10.5388 8.84589 10.5283 8.80205 10.5049L6.49305 9.29095C6.3409 9.21106 6.17164 9.16932 5.9998 9.16932C5.82796 9.16932 5.65869 9.21106 5.50655 9.29095L3.19805 10.5049C3.15421 10.5282 3.10474 10.5386 3.05527 10.5351C3.0058 10.5316 2.9583 10.5142 2.91819 10.4851C2.87808 10.4559 2.84696 10.416 2.82837 10.3701C2.80979 10.3241 2.80447 10.2738 2.81305 10.2249L3.25355 7.65545C3.28264 7.48581 3.27004 7.31165 3.21681 7.14797C3.16359 6.98429 3.07135 6.83602 2.94805 6.71595L1.08005 4.89745C1.04434 4.86296 1.01904 4.81914 1.00703 4.77098C0.995011 4.72282 0.996764 4.67226 1.01208 4.62504C1.02741 4.57783 1.05568 4.53587 1.09368 4.50394C1.13169 4.47201 1.1779 4.4514 1.22705 4.44445L3.80955 4.06695C3.97967 4.0422 4.14124 3.97648 4.28034 3.87544C4.41944 3.77441 4.5319 3.64108 4.60805 3.48695L5.76255 1.14745Z" fill="#EFB100" stroke="#EFB100" stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                      <span className='text-small'>4.8</span>
                                    </div>
                                    <div className="download-count">
                                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 9.5V8.5C8 7.96957 7.78929 7.46086 7.41421 7.08579C7.03914 6.71071 6.53043 6.5 6 6.5H3C2.46957 6.5 1.96086 6.71071 1.58579 7.08579C1.21071 7.46086 1 7.96957 1 8.5V9.5" stroke="var(--Gray-600)" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8 0.563965C8.42888 0.67515 8.8087 0.925597 9.07984 1.276C9.35098 1.6264 9.4981 2.05691 9.4981 2.49996C9.4981 2.94302 9.35098 3.37353 9.07984 3.72393C8.8087 4.07433 8.42888 4.32478 8 4.43596" stroke="var(--Gray-600)" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11 9.49994V8.49994C10.9997 8.05681 10.8522 7.62633 10.5807 7.2761C10.3092 6.92587 9.92906 6.67573 9.5 6.56494" stroke="var(--Gray-600)" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.5 4.5C5.60457 4.5 6.5 3.60457 6.5 2.5C6.5 1.39543 5.60457 0.5 4.5 0.5C3.39543 0.5 2.5 1.39543 2.5 2.5C2.5 3.60457 3.39543 4.5 4.5 4.5Z" stroke="var(--Gray-600)" stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                      <span className='text-small'>9,234</span>
                                    </div>
                                  </div>
                                </div>
                            </div>
                             <div className="course-card-list">
                                <div className="course-img">
                                  <img src={Course} alt="Course" />
                                  <span>
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6.66663 0.916748H9.16663V3.41675" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M9.16671 0.916748L5.62504 4.45841L3.54171 2.37508L0.833374 5.08341" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                  </span>
                                </div>
                                <div className="course-detail">
                                  <div className="course-name">
                                      <p>TypeScript Mastery</p>
                                  </div>
                                  <div className="course-author">
                                    <img src={Author} alt="Author" />
                                    <span className='text-small'>Alex Chen</span>
                                  </div>
                                  <div className="course-total-info">
                                    <div className="rating">
                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.76255 1.14745C5.78446 1.10318 5.81831 1.06591 5.86027 1.03986C5.90224 1.01381 5.95065 1 6.00005 1C6.04944 1 6.09785 1.01381 6.13982 1.03986C6.18179 1.06591 6.21563 1.10318 6.23755 1.14745L7.39255 3.48695C7.46863 3.64093 7.58095 3.77415 7.71986 3.87517C7.85876 3.9762 8.02011 4.042 8.19004 4.06695L10.773 4.44495C10.822 4.45204 10.868 4.47268 10.9058 4.50455C10.9436 4.53641 10.9718 4.57822 10.9871 4.62525C11.0023 4.67228 11.0042 4.72265 10.9923 4.77066C10.9805 4.81868 10.9555 4.86242 10.92 4.89695L9.05205 6.71595C8.92885 6.836 8.83668 6.98419 8.78346 7.14776C8.73025 7.31134 8.71758 7.48539 8.74655 7.65495L9.18755 10.2249C9.19619 10.2739 9.1909 10.3242 9.17229 10.3703C9.15369 10.4163 9.12251 10.4563 9.08232 10.4854C9.04212 10.5146 8.99453 10.5319 8.94498 10.5354C8.89542 10.5388 8.84589 10.5283 8.80205 10.5049L6.49305 9.29095C6.3409 9.21106 6.17164 9.16932 5.9998 9.16932C5.82796 9.16932 5.65869 9.21106 5.50655 9.29095L3.19805 10.5049C3.15421 10.5282 3.10474 10.5386 3.05527 10.5351C3.0058 10.5316 2.9583 10.5142 2.91819 10.4851C2.87808 10.4559 2.84696 10.416 2.82837 10.3701C2.80979 10.3241 2.80447 10.2738 2.81305 10.2249L3.25355 7.65545C3.28264 7.48581 3.27004 7.31165 3.21681 7.14797C3.16359 6.98429 3.07135 6.83602 2.94805 6.71595L1.08005 4.89745C1.04434 4.86296 1.01904 4.81914 1.00703 4.77098C0.995011 4.72282 0.996764 4.67226 1.01208 4.62504C1.02741 4.57783 1.05568 4.53587 1.09368 4.50394C1.13169 4.47201 1.1779 4.4514 1.22705 4.44445L3.80955 4.06695C3.97967 4.0422 4.14124 3.97648 4.28034 3.87544C4.41944 3.77441 4.5319 3.64108 4.60805 3.48695L5.76255 1.14745Z" fill="#EFB100" stroke="#EFB100" stroke-linecap="round" stroke-linejoin="round" />
                                      </svg>
                                      <span className='text-small'>4.8</span>
                                    </div>
                                    <div className="download-count">
                                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M8 9.5V8.5C8 7.96957 7.78929 7.46086 7.41421 7.08579C7.03914 6.71071 6.53043 6.5 6 6.5H3C2.46957 6.5 1.96086 6.71071 1.58579 7.08579C1.21071 7.46086 1 7.96957 1 8.5V9.5" stroke="var(--Gray-600)" stroke-linecap="round" stroke-linejoin="round" />
                                          <path d="M8 0.563965C8.42888 0.67515 8.8087 0.925597 9.07984 1.276C9.35098 1.6264 9.4981 2.05691 9.4981 2.49996C9.4981 2.94302 9.35098 3.37353 9.07984 3.72393C8.8087 4.07433 8.42888 4.32478 8 4.43596" stroke="var(--Gray-600)" stroke-linecap="round" stroke-linejoin="round" />
                                          <path d="M11 9.49994V8.49994C10.9997 8.05681 10.8522 7.62633 10.5807 7.2761C10.3092 6.92587 9.92906 6.67573 9.5 6.56494" stroke="var(--Gray-600)" stroke-linecap="round" stroke-linejoin="round" />
                                          <path d="M4.5 4.5C5.60457 4.5 6.5 3.60457 6.5 2.5C6.5 1.39543 5.60457 0.5 4.5 0.5C3.39543 0.5 2.5 1.39543 2.5 2.5C2.5 3.60457 3.39543 4.5 4.5 4.5Z" stroke="var(--Gray-600)" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                      <span className='text-small'>9,234</span>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

    </>
  )
}

export default Login