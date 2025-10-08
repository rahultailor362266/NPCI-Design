import React, { useEffect, useState } from "react";
import logoIc from '../assets/logo-ic.svg'
import Avtar from '../assets/avtar.png'

const header = () => {
   const [theme, setTheme] = useState<"light" | "dark">("light");
   useEffect(() => {
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      if (savedTheme) {
         setTheme(savedTheme);
         document.body.classList.add(savedTheme);
      }
   }, []);

   useEffect(() => {
      document.body.classList.remove("light", "dark");
      document.body.classList.add(theme);
      localStorage.setItem("theme", theme);
   }, [theme]);

   const toggleTheme = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
   };
   return (
      <>
         <header className='header'>
            <div className="header-wrapper">
               <div className="header-left">
                  <div className="logo">
                     <img src={logoIc} alt="logo icon" />
                  </div>
               </div>
               <div className="header-middle">
                  <div className="user-name">
                     <h4>Good morning, <span>John</span></h4>
                  </div>
                  <div className="quoted-text">
                     <p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.34467 1.87581C7.37324 1.72287 7.45439 1.58475 7.57407 1.48535C7.69375 1.38595 7.84443 1.33154 8 1.33154C8.15558 1.33154 8.30626 1.38595 8.42594 1.48535C8.54562 1.58475 8.62677 1.72287 8.65534 1.87581L9.356 5.58114C9.40577 5.84457 9.53379 6.08688 9.72336 6.27645C9.91293 6.46602 10.1552 6.59404 10.4187 6.64381L14.124 7.34447C14.2769 7.37304 14.4151 7.45419 14.5145 7.57387C14.6139 7.69355 14.6683 7.84423 14.6683 7.99981C14.6683 8.15538 14.6139 8.30606 14.5145 8.42574C14.4151 8.54542 14.2769 8.62657 14.124 8.65514L10.4187 9.35581C10.1552 9.40557 9.91293 9.53359 9.72336 9.72316C9.53379 9.91273 9.40577 10.155 9.356 10.4185L8.65534 14.1238C8.62677 14.2767 8.54562 14.4149 8.42594 14.5143C8.30626 14.6137 8.15558 14.6681 8 14.6681C7.84443 14.6681 7.69375 14.6137 7.57407 14.5143C7.45439 14.4149 7.37324 14.2767 7.34467 14.1238L6.644 10.4185C6.59424 10.155 6.46622 9.91273 6.27665 9.72316C6.08708 9.53359 5.84477 9.40557 5.58134 9.35581L1.876 8.65514C1.72307 8.62657 1.58495 8.54542 1.48555 8.42574C1.38615 8.30606 1.33174 8.15538 1.33174 7.99981C1.33174 7.84423 1.38615 7.69355 1.48555 7.57387C1.58495 7.45419 1.72307 7.37304 1.876 7.34447L5.58134 6.64381C5.84477 6.59404 6.08708 6.46602 6.27665 6.27645C6.46622 6.08688 6.59424 5.84457 6.644 5.58114L7.34467 1.87581Z" stroke="url(#paint0_linear_203_15764)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                           <path d="M13.3333 1.3335V4.00016" stroke="url(#paint1_linear_203_15764)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                           <path d="M14.6667 2.6665H12" stroke="url(#paint2_linear_203_15764)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                           <path d="M2.66666 14.6667C3.40304 14.6667 3.99999 14.0697 3.99999 13.3333C3.99999 12.597 3.40304 12 2.66666 12C1.93028 12 1.33333 12.597 1.33333 13.3333C1.33333 14.0697 1.93028 14.6667 2.66666 14.6667Z" stroke="url(#paint3_linear_203_15764)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                           <defs>
                              <linearGradient id="paint0_linear_203_15764" x1="1.33174" y1="7.99981" x2="14.6683" y2="7.99981" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#36D1DC" />
                                 <stop offset="1" stop-color="#5B86E5" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_203_15764" x1="13.3333" y1="2.66683" x2="14.3333" y2="2.66683" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#36D1DC" />
                                 <stop offset="1" stop-color="#5B86E5" />
                              </linearGradient>
                              <linearGradient id="paint2_linear_203_15764" x1="12" y1="3.1665" x2="14.6667" y2="3.1665" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#36D1DC" />
                                 <stop offset="1" stop-color="#5B86E5" />
                              </linearGradient>
                              <linearGradient id="paint3_linear_203_15764" x1="1.33333" y1="13.3333" x2="3.99999" y2="13.3333" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#36D1DC" />
                                 <stop offset="1" stop-color="#5B86E5" />
                              </linearGradient>
                           </defs>
                        </svg>
                        Complete 3 challenges today to unlock a new badge!
                     </p>
                  </div>
               </div>
               <div className="header-right">
                  <div className="theme-toggle">
                     <button onClick={toggleTheme}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M16.5 9.65833C16.369 11.0768 15.8366 12.4287 14.9652 13.5557C14.0939 14.6826 12.9196 15.5382 11.5798 16.0221C10.24 16.5061 8.79003 16.5984 7.39962 16.2884C6.00922 15.9784 4.73587 15.2788 3.72856 14.2715C2.72125 13.2642 2.02166 11.9908 1.71163 10.6004C1.4016 9.21001 1.49397 7.76007 1.97792 6.42025C2.46188 5.08042 3.3174 3.90614 4.44438 3.03479C5.57137 2.16345 6.9232 1.63109 8.34171 1.5C7.51122 2.62356 7.11158 4.00787 7.21548 5.40118C7.31939 6.79448 7.91992 8.10422 8.90788 9.09217C9.89583 10.0801 11.2056 10.6807 12.5989 10.7846C13.9922 10.8885 15.3765 10.4888 16.5 9.65833Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     </button>
                  </div>
                  <div className="info">
                     <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.57496 7.49984C7.77088 6.94289 8.15759 6.47326 8.66659 6.17411C9.17559 5.87497 9.77404 5.76562 10.3559 5.86543C10.9378 5.96524 11.4656 6.26777 11.8459 6.71944C12.2261 7.17111 12.4342 7.74277 12.4333 8.33317C12.4333 9.99984 9.93329 10.8332 9.93329 10.8332M9.99996 14.1665H10.0083M18.3333 9.99984C18.3333 14.6022 14.6023 18.3332 9.99996 18.3332C5.39759 18.3332 1.66663 14.6022 1.66663 9.99984C1.66663 5.39746 5.39759 1.6665 9.99996 1.6665C14.6023 1.6665 18.3333 5.39746 18.3333 9.99984Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     </span>
                  </div>
                  <div className="notification">
                     <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4417 17.4998C10.2952 17.7524 10.0849 17.962 9.83185 18.1078C9.57884 18.2535 9.29198 18.3302 9 18.3302C8.70802 18.3302 8.42116 18.2535 8.16814 18.1078C7.91513 17.962 7.70484 17.7524 7.55833 17.4998M14 6.6665C14 5.34042 13.4732 4.06865 12.5355 3.13097C11.5979 2.19329 10.3261 1.6665 9 1.6665C7.67392 1.6665 6.40215 2.19329 5.46447 3.13097C4.52678 4.06865 4 5.34042 4 6.6665C4 12.4998 1.5 14.1665 1.5 14.1665H16.5C16.5 14.1665 14 12.4998 14 6.6665Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                     <span className="counter">
                        2
                     </span>
                  </div>
                  <div className="avtar-upload">
                     <span>
                        <img src={Avtar} alt="avtar imgage" />
                     </span>
                  </div>

               </div>

            </div>
         </header>
      </>
   )
}

export default header