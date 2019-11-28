import React, { Component } from "react";
import { Link } from "react-router-dom";

import DropdownMenu from "component/common/menu/DropdownMemu";
import Menu, { MenuItem } from "component/common/menu/Menu";
import "./style/header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <h1>DBV</h1>
          </Link>
        </div>

        <Menu className="user-menu">
          <Link to="/login">
            <MenuItem>로그인</MenuItem>
          </Link>
          <Link to="/join">
            <MenuItem>회원가입</MenuItem>
          </Link>
        </Menu>

        <Menu className="nav-menu">
          <DropdownMenu title="영화">
            <Link exact="true" to="/movies">
              <MenuItem>무비 차트</MenuItem>
            </Link>
            <Link to="/movies/finder">
              <MenuItem>무비 파인더</MenuItem>
            </Link>
            <Link to="/movies/review">
              <MenuItem>리뷰/평점</MenuItem>
            </Link>
          </DropdownMenu>

          <DropdownMenu title="예매">
            <Link to="/ticketing/time-table">
              <MenuItem>상영 시간표</MenuItem>
            </Link>
            <Link to="/ticketing/fast">
              <MenuItem>빠른 예매</MenuItem>
            </Link>
            <Link exact="true" to="/ticketing">
              <MenuItem>test</MenuItem>
            </Link>
          </DropdownMenu>

          <Link to="/theater">
            <MenuItem>영화관</MenuItem>
          </Link>
        </Menu>
      </header>
    );
  }
}

export default Header;
