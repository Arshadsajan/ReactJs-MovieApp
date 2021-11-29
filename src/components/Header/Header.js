import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(search));
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-nav">
        <form action="" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Movie or Show..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>

        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
