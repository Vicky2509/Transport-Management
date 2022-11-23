import React, {Component} from 'react';
import DriverService from "../../services/DriverService";
import ReactPaginate from "react-paginate";

class ListDriverComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: '',
            pageCount: '',
            key: '',
            drivers: []
        }
        this.addDriver = this.addDriver.bind(this);
        this.updateDriver = this.updateDriver.bind(this);
        this.deleteDriver = this.deleteDriver.bind(this);
        this.searchDriver = this.searchDriver.bind(this);
    }

    updateDriver(idCard) {
        this.props.history.push(`/update-driver/${idCard}`);
    }

    componentDidMount() {
        DriverService.fetchDrivers(1).then(resp => {
            this.setState({drivers: resp})
        })
        DriverService.getDrivers().then(resp => {
            const total = resp.data.length;
            let pageCount = Math.ceil(total / 5);
            this.setState({pageCount: pageCount});
            this.setState({total: total})
        })
    }

    handlePageClick = (data) => {
        let selected = data.selected + 1;
        DriverService.fetchDrivers(selected).then(resp => {
            this.setState({drivers: resp})
        })
    };

    addDriver() {
        this.props.history.push('/add-driver');
    }

    deleteDriver(idCard) {
        DriverService.deleteDriver(idCard).then(resp => {
            this.setState({
                drivers: this.state.drivers.filter(driver =>
                    driver.idCard !== idCard)
            });
            this.props.history.push('/listdrivers');
        })
    }

    searchDriver(key) {
        if (key.trim() === '') {
            return DriverService.getDrivers().then((res) => {
                this.setState({drivers: res.data});
                this.props.history.push(`/drivers/${key}`);
            });
        } else {
            DriverService.searchDrivers(key.trim()).then(resp => {
                this.setState({drivers: resp.data})
            });
            this.props.history.push(`/drivers/${key}`);
        }
    }

    inputKey = (event) => {
        this.setState({key: event.target.value});
    }

    render() {
        return (
            <div>
                <h2 className="text-center">List of drivers </h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addDriver}>More drivers</button>
                    <p style={{margin: "auto"}} className="form-inline"></p>
                    <input className="form-inline" style={{marginLeft: "5px"}} placeholder="Enter your ID number"
                           name="key" value={this.state.key} onChange={this.inputKey}/>
                    <button className="btn btn-primary" onClick={() => this.searchDriver(this.state.key)}
                            style={{marginLeft: "10px"}}>Search
                    </button>
                </div>
                <br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>
                                <a href="/#">ID number</a>
                            </th>
                            <th>
                                <a href="/#">First and last name</a>
                            </th>
                            <th>
                                <a href="/#">
                                License number</a>
                            </th>
                            <th>
                                <a href="/#">
                                Type of license</a>
                            </th>
                            <th>
                                <a href="/#">
                                Address</a>
                            </th>
                            <th>
                                <a href="/#">
                                Date of birth</a>
                            </th>
                            <th>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.drivers.map(
                            driver =>
                                <tr key={driver.idCard}>
                                    <td>{driver.idCard}</td>
                                    <td>{driver.name}</td>
                                    <td>{driver.license}</td>
                                    <td>{driver.address}</td>
                                    <td>{driver.birth}</td>
                                    <td>
                                        <button className="btn btn-info"
                                                onClick={() => this.updateDriver(driver.idCard)}>Fix
                                        </button>
                                        <button className="btn btn-danger"
                                                onClick={() => this.deleteDriver(driver.idCard)}
                                                style={{marginLeft: "10px"}}>Erase
                                        </button>
                                    </td>
                                </tr>
                        )}
                        </tbody>
                    </table>
                    Total results: {this.state.total} driver
                </div>
                <div>
                    {(this.state.pageCount > 1) ?
                        <ReactPaginate
                            previousLabel={'<<'}
                            nextLabel={'>>'}
                            breakLabel={'...'}
                            pageCount={this.state.pageCount}
                            marginPageDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination justify-content-center'}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link'}
                            activeClassName={'active'}
                        /> : ''}
                </div>
            </div>
        );
    }
}

export default ListDriverComponent;