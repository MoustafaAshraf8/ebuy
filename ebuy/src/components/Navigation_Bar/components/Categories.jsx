import React from "react";

const Categories = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categories
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="/?electronics">
            Electronics
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/?videoGames">
            Video games
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="/?mostPopular">
            all products
          </a>
        </li>
        {/* <li className="nav-item">
              <a className="nav-link" href="/trending">
                <TrendingUpIcon />
              </a>
            </li> */}
      </ul>
    </li>
  );
};

export default Categories;
