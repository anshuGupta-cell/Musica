import React from 'react';

const Navbar = () => {

  return (
<nav className="navbar ">
  <div className="container-fluid">
    <div className='d-flex'>
    <h1 className="nav-item">Musica</h1>
<ul className="mx-3 nav nav-pills">
  <li className="nav-item">
    <a className="nav-link " aria-current="page" href="#">Active</a>
  </li>
  {/*<li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>*/}
</ul>
    </div>

{  /*  <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>*/}
  </div>
</nav>
  );
};

export default Navbar;
