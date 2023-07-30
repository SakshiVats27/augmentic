import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="nav-v2-main" role="navigation" data-nav-v2-mobile>
      <div className="nav-v2-main__wrapper">
        <ul className="nav-v2-main__list">
          <li className="nav-v2-main__item">
            <a data-nav-event-clicked="Hire Designers" href="/hiring">Find talent</a>
          </li>

          <li className="nav-v2-main__item">
            <a href="/for-designers" data-nav-event-clicked="For Designers">For designers</a>
          </li>

          <li className="nav-v2-main__item">
            <a data-nav-event-clicked="Inspiration" href="/shots/popular">Inspiration</a>
          </li>

          <li className="nav-v2-main__item">
            <a data-nav-event-clicked="Learn Design" href="/learn">Learn design</a>
          </li>

          <li className="nav-v2-main__item">
            <a data-nav-event-clicked="Go Pro" href="/pro">Go Pro</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
