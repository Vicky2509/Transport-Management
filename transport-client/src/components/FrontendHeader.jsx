import React, { useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
// import "../../styles/frontendheader.css";



const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/#',
    display: 'About'
  },
  {
    path: '/listRoutes',
    display: 'Routes'
  },

]


const Header = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);



  const [modal, setmodal] = useState(false)
  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('menu__active')
  return (
    <header className="header">
      {/* ===Header Top=== */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-line"></i>
                </span>{" "}
                +91 7978797141
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end">
                <Link to="https://cutm.icloudems.com/corecampus/index.php" className="d-flex align-items-center">
                  <i class="ri-login-circle-line"></i> Login
                </Link>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-3">
                    <i class="ri-bus-wifi-line"></i>
                    <span>
                      Acquire Your Seat <br />
                      Routes
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center">
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                <div className="header__location__content">
                  <h4>Bhubanswar</h4>
                  <h6>Ramchandrapur,Jatani</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location__content">
                  <h4>Monday to Saturday</h4>
                  <h6>9:30am - 4pm</h6>
                </div>
              </div>
            </Col>
            {/* <Modal size='lg'
              isOpen={modal}
              toggle={() => setmodal(!modal)}
            >
              <ModalHeader
                toggle={() => setmodal(!modal)}>
                Popup
              </ModalHeader>
              <ModalBody> */}


                {/* <Paper sx={{ width: '100%' }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
        
                          <TableCell align="center" colSpan={3}>
                            Details
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      
                    </Table>
                  </TableContainer>
                  <TablePagination
                    // rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    // count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>




              </ModalBody>

            </Modal> */}
            <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
              <button className="header__btn btn d-flex align-items-center justify-content-end text-end " onClick={() => setmodal(true)}>


                <i>Routes</i>

              </button>
            </Col>
          </Row>
        </Container>
      </div>


      {/* ========Main Navigation========== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-2-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {
                  navLinks.map((item, index) => (
                    <NavLink to={item.path} className={navClass => navClass.isActive ?
                      'nav__active nav__item' : "nav__item"} key={index}>{item.display}
                    </NavLink>
                  ))
                }
              </div>
            </div>
          </div>
        </Container>
      </div>


    </header>
  );
};

export default Header;
