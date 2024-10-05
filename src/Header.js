// import { col as index_col } from './PageIndex';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { col as paidiatriko_col } from './PagePaidiatriko';
import { col as psych_col } from './PagePsych';
import { col as allergiologiko_col } from './PageAllergiologiko';
import { col as diet_col } from './PageDiet';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import Button from "@mui/material/Button";

const Gallery = () => {
  const handleDragStart = (e) => e.preventDefault();
  const banners = ["banner1.svg", "banner2.svg", "banner3.svg", "banner4.svg", "banner5.svg", "banner6.svg"];

  return (
    <AliceCarousel
      mouseTracking
      autoPlay={true}
      disableButtonsControls={true}
      infinite={true}
      animationDuration={1000}
      autoPlayInterval={5000}
      items={
        banners.map((d, i) => (
          <img src={`assets/banner/${d}`} key={i} alt="" onDragStart={handleDragStart} role="presentation" />
        ))
      }
    />
  );
};

const MenuItemWithSubMenu = ({ desc, submenu, url }) => {
  // const { desc: key, submenu } = data || {};
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuRef = React.useRef(null);
  const [parentWidth, setParentWidth] = React.useState(0);
  const [parentHt, setParentHt] = React.useState(0);

  React.useEffect(() => {
    const { offsetWidth, offsetHeight } = menuRef?.current || {};
    setParentWidth(offsetWidth);
    setParentHt(offsetHeight);
  }, [menuRef]);

  return (
    <>
      <MenuItem
        ref={menuRef}
        id={desc}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {desc} {submenu.length > 0 && <ArrowRightIcon />}
      </MenuItem>
      {submenu.length > 0 && (
        <Menu
          id="basic-sub-menu"
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            "aria-labelledby": desc
          }}
          style={{
            left: parentWidth * 0.9,
            top: -(parentHt * 0.5)
          }}
        >
          {submenu.map((subMenuItem, i) => (
            <MenuItem key={i} onClick={() => setAnchorEl(null)}>
              {subMenuItem.key}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

const Dropdown = ({ name, col }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      {/* <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        {name}
      </Button> */}
      <a
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onMouseOver={handleClick}
        href={`${process.env.REACT_APP_BASE_URL}/#/paidiatriko`}
      >Παιδιατρικo</a>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {col.map(({ desc, url, submenu}, i) => (
          <MenuItemWithSubMenu key={i} desc={desc} url={url} submenu={submenu} />
        ))}
      </Menu>
    </>
  )
}

function App() {
  return (
    <header id="header">
      <nav class="navbar navbar-default navbar-sticky">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <img src="favicon-16x16.png" alt="" />
              <li style={{ marginLeft: 5 }}>iatreionline.gr</li>
              <li class="dropdown">
                <a href={`${process.env.REACT_APP_BASE_URL}/#/`}>Home</a>
              </li>
              {/* <li>
                <Dropdown col={paidiatriko_col} name="παιδιατρικο" />
              </li> */}
              <li class="dropdown">
                <a href={`${process.env.REACT_APP_BASE_URL}/#/paidiatriko`}>Παιδιατρικo</a>
                <div class="dropdown-content">
                  {paidiatriko_col.map(d => (
                    <>
                      <a href={d.url}>{d.desc}</a>
                      {/* {d.submenu.map(f => (
                        <a href={`${d.url}${f.url}`}>{f.desc}</a>
                      ))} */}
                    </>
                  ))}
                </div>
              </li>
              <li class="dropdown">
                <a href={`${process.env.REACT_APP_BASE_URL}/#/allergiologiko`}>Αλλεργιολογικo</a>
                <div class="dropdown-content">
                  {allergiologiko_col.map(d => (
                    <a href={d.url}>{d.desc}</a>
                  ))}
                </div>
              </li>
              <li class="dropdown">
                <a href={`${process.env.REACT_APP_BASE_URL}/#/psych`}>Ψυχολoγος</a>
                <div class="dropdown-content">
                  {psych_col.map(d => (
                    <a href={d.url}>{d.desc}</a>
                  ))}
                </div>
              </li>
              <li class="dropdown">
                <a href={`${process.env.REACT_APP_BASE_URL}/#/diet`}>Διαιτολoγος</a>
                <div class="dropdown-content">
                  {diet_col.map(d => (
                    <a href={d.url}>{d.desc}</a>
                  ))}
                </div>
              </li>
              <li class="dropdown"><a href={`${process.env.REACT_APP_BASE_URL}/#/contact`}>Επικοινωνια</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <Gallery />
    </header>
  );
}

export default App;
