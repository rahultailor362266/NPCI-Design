import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from "react-router-dom";
const Sidebar = () => {

const [activeIndex, setActiveIndex] = useState<number | null>(null);
const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
   const handleItemClick = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

    const listItems = [
    { id: 0, label: "Dashboard", icon: <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21V11H13V21M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg> },
    { id: 1, label: "Profiles", icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.7916 13.2269C12.6494 15.2604 11.0009 16.9088 8.96748 21.051C6.93401 16.9088 5.28556 15.2604 1.14339 13.2269C5.28556 11.1934 6.93401 9.54499 8.96748 5.40283C11.0009 9.54499 12.6494 11.1934 16.7916 13.2269Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.7916 13.2269C12.6494 15.2604 11.0009 16.9088 8.96748 21.051C6.93401 16.9088 5.28556 15.2604 1.14339 13.2269C5.28556 11.1934 6.93401 9.54499 8.96748 5.40283C11.0009 9.54499 12.6494 11.1934 16.7916 13.2269Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.8506 0.949219V6.49807" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0761 3.72363H17.625" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.1774 6.26172V9.6202" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.4981 7.94141H20.8566" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg> },
    { id: 2, label: "Role Management", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H19" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 15V7" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 15V3" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 15V12" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg> },
    { id: 3, label: "Group Management", icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg> },
    { id: 4, label: "Group Management", icon: <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1V5M6 1V5M1 9H19M3 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg> },
    { id: 5, label: "Group Management", icon: <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 18.5C1 17.837 1.26339 17.2011 1.73223 16.7322C2.20107 16.2634 2.83696 16 3.5 16H17M1 18.5C1 19.163 1.26339 19.7989 1.73223 20.2678C2.20107 20.7366 2.83696 21 3.5 21H17V1H3.5C2.83696 1 2.20107 1.26339 1.73223 1.73223C1.26339 2.20107 1 2.83696 1 3.5V18.5Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg> },
    { id: 6, label: "Group Management", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28825 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg> },
    { id: 7, label: "Group Management", icon: <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 13L21 7L15 1M7 1L1 7L7 13" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg> },
    { id: 8, label: "Group Management", icon: <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8813 3.02646C13.4918 3.47083 14.8621 3.17662 15.3065 3.78721C15.7465 4.39175 15.0463 5.60195 15.2821 6.32824C15.5097 7.02902 16.795 7.59295 16.795 8.36958C16.795 9.14621 15.5097 9.71013 15.2821 10.4109C15.0463 11.1372 15.7465 12.3474 15.3065 12.952C14.8621 13.5626 13.4918 13.2683 12.8813 13.7127C12.2767 14.1527 12.1356 15.5491 11.4093 15.785C10.7085 16.0125 9.77663 14.9731 9 14.9731C8.22337 14.9731 7.29149 16.0125 6.59072 15.785C5.86442 15.5491 5.72329 14.1527 5.11874 13.7127C4.50815 13.2683 3.13786 13.5626 2.69349 12.952C2.25352 12.3474 2.95371 11.1372 2.71788 10.4109C2.49034 9.71015 1.20498 9.14622 1.20498 8.36958C1.20498 7.59296 2.49034 7.02904 2.71788 6.32827C2.9537 5.60197 2.25352 4.39175 2.69349 3.78721C3.13786 3.17661 4.50815 3.47083 5.11874 3.02646C5.72328 2.5865 5.8644 1.19003 6.59068 0.954206C7.29146 0.726664 8.22336 1.76607 9 1.76607C9.77662 1.76607 10.7085 0.726659 11.4093 0.954195C12.1356 1.19002 12.2767 2.58649 12.8813 3.02646Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.29197 17.8534L5.02656 20.3446L4.16255 17.7039L1.35119 18.4778L2.51921 16.1782" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.708 17.8534L12.9734 20.3446L13.8374 17.7039L16.6488 18.4778L15.4808 16.1782" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 11.7167C10.5935 11.7167 11.8852 10.4249 11.8852 8.83149C11.8852 7.23804 10.5935 5.94629 9 5.94629C7.40655 5.94629 6.1148 7.23804 6.1148 8.83149C6.1148 10.4249 7.40655 11.7167 9 11.7167Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg> },
    { id: 9, label: "Group Management", icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 8H3.5C2.83696 8 2.20107 7.73661 1.73223 7.26777C1.26339 6.79893 1 6.16304 1 5.5C1 4.83696 1.26339 4.20107 1.73223 3.73223C2.20107 3.26339 2.83696 3 3.5 3H5" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 8H18.5C19.163 8 19.7989 7.73661 20.2678 7.26777C20.7366 6.79893 21 6.16304 21 5.5C21 4.83696 20.7366 4.20107 20.2678 3.73223C19.7989 3.26339 19.163 3 18.5 3H17" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 21H19" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 13.6599V15.9999C9 16.5499 8.53 16.9799 8.03 17.2099C6.85 17.7499 6 19.2399 6 20.9999" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 13.6599V15.9999C13 16.5499 13.47 16.9799 13.97 17.2099C15.15 17.7499 16 19.2399 16 20.9999" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 1H5V8C5 9.5913 5.63214 11.1174 6.75736 12.2426C7.88258 13.3679 9.4087 14 11 14C12.5913 14 14.1174 13.3679 15.2426 12.2426C16.3679 11.1174 17 9.5913 17 8V1Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg> },
  ];

    const renderTooltip = (props: React.ComponentProps<typeof Tooltip>) => (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
    );
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-list">
                    <ul>
                        {/* {listItems.map((item, index) => (
                            <li key={item.id}>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 50, hide: 100 }}
                                    overlay={renderTooltip}
                                >
                                    <div
                                        className={`list-item ${activeIndex === index ? "list-item-active" : ""}`}
                                        onClick={() => handleItemClick(index)}
                                    >
                                        <Button variant="">
                                            {item.icon}
                                        </Button>
                                        <div className="sub-menu" style={{ pointerEvents: 'auto' }}>
                                            <div className="submenu-list">
                                                <Link to={''} className="submenu-list-active">
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.3334 16.5V14.8333C13.3334 13.9493 12.9822 13.1014 12.3571 12.4763C11.7319 11.8512 10.8841 11.5 10 11.5H4.16671C3.28265 11.5 2.43481 11.8512 1.80968 12.4763C1.18456 13.1014 0.833374 13.9493 0.833374 14.8333V16.5M16.6667 5.66667V10.6667M19.1667 8.16667H14.1667M10.4167 4.83333C10.4167 6.67428 8.92432 8.16667 7.08337 8.16667C5.24242 8.16667 3.75004 6.67428 3.75004 4.83333C3.75004 2.99238 5.24242 1.5 7.08337 1.5C8.92432 1.5 10.4167 2.99238 10.4167 4.83333Z" stroke="var(--Gray-500)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Profiles
                                                </Link>
                                                <Link to={''}>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.3334 16.5V14.8333C13.3334 13.9493 12.9822 13.1014 12.3571 12.4763C11.7319 11.8512 10.8841 11.5 10 11.5H4.16671C3.28265 11.5 2.43481 11.8512 1.80968 12.4763C1.18456 13.1014 0.833374 13.9493 0.833374 14.8333V16.5M14.1667 8.16667L15.8334 9.83333L19.1667 6.5M10.4167 4.83333C10.4167 6.67428 8.92432 8.16667 7.08337 8.16667C5.24242 8.16667 3.75004 6.67428 3.75004 4.83333C3.75004 2.99238 5.24242 1.5 7.08337 1.5C8.92432 1.5 10.4167 2.99238 10.4167 4.83333Z" stroke="var(--Gray-500)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Role Management
                                                </Link>
                                                <Link to={''}>
                                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.1667 16.5V14.8333C14.1667 13.9493 13.8155 13.1014 13.1904 12.4763C12.5653 11.8512 11.7174 11.5 10.8334 11.5H4.16671C3.28265 11.5 2.43481 11.8512 1.80968 12.4763C1.18456 13.1014 0.833374 13.9493 0.833374 14.8333V16.5M19.1667 16.5V14.8333C19.1662 14.0948 18.9203 13.3773 18.4678 12.7936C18.0154 12.2099 17.3818 11.793 16.6667 11.6083M13.3334 1.60833C14.0504 1.79192 14.6859 2.20892 15.1397 2.79359C15.5936 3.37827 15.8399 4.09736 15.8399 4.8375C15.8399 5.57764 15.5936 6.29673 15.1397 6.88141C14.6859 7.46608 14.0504 7.88308 13.3334 8.06667M10.8334 4.83333C10.8334 6.67428 9.34099 8.16667 7.50004 8.16667C5.65909 8.16667 4.16671 6.67428 4.16671 4.83333C4.16671 2.99238 5.65909 1.5 7.50004 1.5C9.34099 1.5 10.8334 2.99238 10.8334 4.83333Z" stroke="var(--Gray-500)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Group Management
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </OverlayTrigger>
                            </li>
                        ))} */}
                        {listItems.map((item, index) => (
                            <OverlayTrigger
                                key={item.id}
                                placement="right"
                                overlay={renderTooltip}
                                show={hoveredIndex === index} 
                                delay={{ show: 0, hide: 100 }}
                            >
                                <div
                                    className={`list-item ${activeIndex === index ? "list-item-active" : ""}`}
                                    onClick={() => handleItemClick(index)}
                                    onMouseEnter={(e) => {
                                        if (!(e.target as HTMLElement).closest(".sub-menu")) {
                                            setHoveredIndex(index);
                                        }
                                    }}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <Button variant="">{item.icon}</Button>

                                    <div className="sub-menu">
                                        <div className="submenu-list">
                                            <Link to={''} className="submenu-list-active">
                                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.3334 16.5V14.8333C13.3334 13.9493 12.9822 13.1014 12.3571 12.4763C11.7319 11.8512 10.8841 11.5 10 11.5H4.16671C3.28265 11.5 2.43481 11.8512 1.80968 12.4763C1.18456 13.1014 0.833374 13.9493 0.833374 14.8333V16.5M16.6667 5.66667V10.6667M19.1667 8.16667H14.1667M10.4167 4.83333C10.4167 6.67428 8.92432 8.16667 7.08337 8.16667C5.24242 8.16667 3.75004 6.67428 3.75004 4.83333C3.75004 2.99238 5.24242 1.5 7.08337 1.5C8.92432 1.5 10.4167 2.99238 10.4167 4.83333Z" stroke="var(--Gray-500)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                Profiles
                                            </Link>
                                            <Link to={''}>
                                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.3334 16.5V14.8333C13.3334 13.9493 12.9822 13.1014 12.3571 12.4763C11.7319 11.8512 10.8841 11.5 10 11.5H4.16671C3.28265 11.5 2.43481 11.8512 1.80968 12.4763C1.18456 13.1014 0.833374 13.9493 0.833374 14.8333V16.5M14.1667 8.16667L15.8334 9.83333L19.1667 6.5M10.4167 4.83333C10.4167 6.67428 8.92432 8.16667 7.08337 8.16667C5.24242 8.16667 3.75004 6.67428 3.75004 4.83333C3.75004 2.99238 5.24242 1.5 7.08337 1.5C8.92432 1.5 10.4167 2.99238 10.4167 4.83333Z" stroke="var(--Gray-500)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                Role Management
                                            </Link>
                                            <Link to={''}>
                                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.1667 16.5V14.8333C14.1667 13.9493 13.8155 13.1014 13.1904 12.4763C12.5653 11.8512 11.7174 11.5 10.8334 11.5H4.16671C3.28265 11.5 2.43481 11.8512 1.80968 12.4763C1.18456 13.1014 0.833374 13.9493 0.833374 14.8333V16.5M19.1667 16.5V14.8333C19.1662 14.0948 18.9203 13.3773 18.4678 12.7936C18.0154 12.2099 17.3818 11.793 16.6667 11.6083M13.3334 1.60833C14.0504 1.79192 14.6859 2.20892 15.1397 2.79359C15.5936 3.37827 15.8399 4.09736 15.8399 4.8375C15.8399 5.57764 15.5936 6.29673 15.1397 6.88141C14.6859 7.46608 14.0504 7.88308 13.3334 8.06667M10.8334 4.83333C10.8334 6.67428 9.34099 8.16667 7.50004 8.16667C5.65909 8.16667 4.16671 6.67428 4.16671 4.83333C4.16671 2.99238 5.65909 1.5 7.50004 1.5C9.34099 1.5 10.8334 2.99238 10.8334 4.83333Z" stroke="var(--Gray-500)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                Group Management
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </OverlayTrigger>
                        ))}


                        {/* <li>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Button variant="">
                                    <div className="list-item">
                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 21V11H13V21M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </Button>
                            </OverlayTrigger>
                        </li>
                        <li>
                            <div className={`list-item ${activeIndex === 1 ? "list-item-active" : ""}`} onClick={() => handleSubMenuClick(1)}>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <Button variant="">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.7916 13.2269C12.6494 15.2604 11.0009 16.9088 8.96748 21.051C6.93401 16.9088 5.28556 15.2604 1.14339 13.2269C5.28556 11.1934 6.93401 9.54499 8.96748 5.40283C11.0009 9.54499 12.6494 11.1934 16.7916 13.2269Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.7916 13.2269C12.6494 15.2604 11.0009 16.9088 8.96748 21.051C6.93401 16.9088 5.28556 15.2604 1.14339 13.2269C5.28556 11.1934 6.93401 9.54499 8.96748 5.40283C11.0009 9.54499 12.6494 11.1934 16.7916 13.2269Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14.8506 0.949219V6.49807" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.0761 3.72363H17.625" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.1774 6.26172V9.6202" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.4981 7.94141H20.8566" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Button>
                                </OverlayTrigger>
                                <div className="sub-menu">
                                    <div className="submenu-list">
                                        <Link to={''} className="submenu-list-active">
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.3334 16.5V14.8333C13.3334 13.9493 12.9822 13.1014 12.3571 12.4763C11.7319 11.8512 10.8841 11.5 10 11.5H4.16671C3.28265 11.5 2.43481 11.8512 1.80968 12.4763C1.18456 13.1014 0.833374 13.9493 0.833374 14.8333V16.5M16.6667 5.66667V10.6667M19.1667 8.16667H14.1667M10.4167 4.83333C10.4167 6.67428 8.92432 8.16667 7.08337 8.16667C5.24242 8.16667 3.75004 6.67428 3.75004 4.83333C3.75004 2.99238 5.24242 1.5 7.08337 1.5C8.92432 1.5 10.4167 2.99238 10.4167 4.83333Z" stroke="var(--Gray-500)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Profiles
                                        </Link>
                                        <Link to={''}>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.3334 16.5V14.8333C13.3334 13.9493 12.9822 13.1014 12.3571 12.4763C11.7319 11.8512 10.8841 11.5 10 11.5H4.16671C3.28265 11.5 2.43481 11.8512 1.80968 12.4763C1.18456 13.1014 0.833374 13.9493 0.833374 14.8333V16.5M14.1667 8.16667L15.8334 9.83333L19.1667 6.5M10.4167 4.83333C10.4167 6.67428 8.92432 8.16667 7.08337 8.16667C5.24242 8.16667 3.75004 6.67428 3.75004 4.83333C3.75004 2.99238 5.24242 1.5 7.08337 1.5C8.92432 1.5 10.4167 2.99238 10.4167 4.83333Z" stroke="var(--Gray-500)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Role Management
                                        </Link>
                                        <Link to={''}>
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.1667 16.5V14.8333C14.1667 13.9493 13.8155 13.1014 13.1904 12.4763C12.5653 11.8512 11.7174 11.5 10.8334 11.5H4.16671C3.28265 11.5 2.43481 11.8512 1.80968 12.4763C1.18456 13.1014 0.833374 13.9493 0.833374 14.8333V16.5M19.1667 16.5V14.8333C19.1662 14.0948 18.9203 13.3773 18.4678 12.7936C18.0154 12.2099 17.3818 11.793 16.6667 11.6083M13.3334 1.60833C14.0504 1.79192 14.6859 2.20892 15.1397 2.79359C15.5936 3.37827 15.8399 4.09736 15.8399 4.8375C15.8399 5.57764 15.5936 6.29673 15.1397 6.88141C14.6859 7.46608 14.0504 7.88308 13.3334 8.06667M10.8334 4.83333C10.8334 6.67428 9.34099 8.16667 7.50004 8.16667C5.65909 8.16667 4.16671 6.67428 4.16671 4.83333C4.16671 2.99238 5.65909 1.5 7.50004 1.5C9.34099 1.5 10.8334 2.99238 10.8334 4.83333Z" stroke="var(--Gray-500)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Group Management
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H19" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 15V7" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 15V3" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6 15V12" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="list-item">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="list-item">
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 1V5M6 1V5M1 9H19M3 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="list-item">
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 18.5C1 17.837 1.26339 17.2011 1.73223 16.7322C2.20107 16.2634 2.83696 16 3.5 16H17M1 18.5C1 19.163 1.26339 19.7989 1.73223 20.2678C2.20107 20.7366 2.83696 21 3.5 21H17V1H3.5C2.83696 1 2.20107 1.26339 1.73223 1.73223C1.26339 2.20107 1 2.83696 1 3.5V18.5Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="list-item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28825 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="list-item">
                                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 13L21 7L15 1M7 1L1 7L7 13" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="list-item">
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8813 3.02646C13.4918 3.47083 14.8621 3.17662 15.3065 3.78721C15.7465 4.39175 15.0463 5.60195 15.2821 6.32824C15.5097 7.02902 16.795 7.59295 16.795 8.36958C16.795 9.14621 15.5097 9.71013 15.2821 10.4109C15.0463 11.1372 15.7465 12.3474 15.3065 12.952C14.8621 13.5626 13.4918 13.2683 12.8813 13.7127C12.2767 14.1527 12.1356 15.5491 11.4093 15.785C10.7085 16.0125 9.77663 14.9731 9 14.9731C8.22337 14.9731 7.29149 16.0125 6.59072 15.785C5.86442 15.5491 5.72329 14.1527 5.11874 13.7127C4.50815 13.2683 3.13786 13.5626 2.69349 12.952C2.25352 12.3474 2.95371 11.1372 2.71788 10.4109C2.49034 9.71015 1.20498 9.14622 1.20498 8.36958C1.20498 7.59296 2.49034 7.02904 2.71788 6.32827C2.9537 5.60197 2.25352 4.39175 2.69349 3.78721C3.13786 3.17661 4.50815 3.47083 5.11874 3.02646C5.72328 2.5865 5.8644 1.19003 6.59068 0.954206C7.29146 0.726664 8.22336 1.76607 9 1.76607C9.77662 1.76607 10.7085 0.726659 11.4093 0.954195C12.1356 1.19002 12.2767 2.58649 12.8813 3.02646Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.29197 17.8534L5.02656 20.3446L4.16255 17.7039L1.35119 18.4778L2.51921 16.1782" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.708 17.8534L12.9734 20.3446L13.8374 17.7039L16.6488 18.4778L15.4808 16.1782" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 11.7167C10.5935 11.7167 11.8852 10.4249 11.8852 8.83149C11.8852 7.23804 10.5935 5.94629 9 5.94629C7.40655 5.94629 6.1148 7.23804 6.1148 8.83149C6.1148 10.4249 7.40655 11.7167 9 11.7167Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="list-item">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 8H3.5C2.83696 8 2.20107 7.73661 1.73223 7.26777C1.26339 6.79893 1 6.16304 1 5.5C1 4.83696 1.26339 4.20107 1.73223 3.73223C2.20107 3.26339 2.83696 3 3.5 3H5" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17 8H18.5C19.163 8 19.7989 7.73661 20.2678 7.26777C20.7366 6.79893 21 6.16304 21 5.5C21 4.83696 20.7366 4.20107 20.2678 3.73223C19.7989 3.26339 19.163 3 18.5 3H17" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 21H19" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 13.6599V15.9999C9 16.5499 8.53 16.9799 8.03 17.2099C6.85 17.7499 6 19.2399 6 20.9999" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13 13.6599V15.9999C13 16.5499 13.47 16.9799 13.97 17.2099C15.15 17.7499 16 19.2399 16 20.9999" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17 1H5V8C5 9.5913 5.63214 11.1174 6.75736 12.2426C7.88258 13.3679 9.4087 14 11 14C12.5913 14 14.1174 13.3679 15.2426 12.2426C16.3679 11.1174 17 9.5913 17 8V1Z" stroke="#667085" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar