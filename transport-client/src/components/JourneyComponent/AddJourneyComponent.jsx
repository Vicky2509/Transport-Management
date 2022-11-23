import React, {Component} from 'react';
import {Form, Row, Col} from "react-bootstrap";
import JourneyService from "../../services/JourneyService";
import RouteService from "../../services/RouteService";
import VehicleService from "../../services/VehicleService";
import DriverService from "../../services/DriverService";

class AddJourneyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guest_quanity: '',
            fare: '',
            route: '',
            driver: '',
            assistant: '',
            vehicle: '',
            errorField: [],
            drivers: [],
            vehicles: [],
            routes: []
        }
        RouteService.getRoutes().then(resp => {
            const data = resp.data;
            this.setState({routes: data})
        })
        VehicleService.getVehicles().then(resp => {
            const data = resp.data;
            this.setState({vehicles: data})
        })
        DriverService.getDrivers().then(resp => {
            const data = resp.data;
            this.setState({drivers: data})
        })

        this.inputGuestQuanity = this.inputGuestQuanity.bind(this);
        this.inputFare = this.inputFare.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
        this.handleVehicleChange = this.handleVehicleChange.bind(this);
        this.handleDriverChange = this.handleDriverChange.bind(this);
        this.handleAssistantChange = this.handleAssistantChange.bind(this);
        this.saveJourney = this.saveJourney.bind(this);
    }

    saveJourney = (e) => {
        this.setState({
            errorField: []
        })
        e.preventDefault();
        let journey = {
            guest_quanity: this.state.guest_quanity,
            fare: this.state.fare,
            driver: this.state.driver,
            assistant: this.state.assistant,
            route: this.state.route,
            vehicle: this.state.vehicle
        };
        return JourneyService.addJourney(journey)
            .then(resp => {
                console.log(resp)
                if (resp.status === 201) {
                    this.setState({errorField: this.state.errorField.concat(resp.data)})
                }
                if (resp.data.mess === 'success') {
                    this.props.history.push('/listJourneys')
                }
            })
    }
    handleDriverChange = (event) => {
        this.setState({driver: event.target.value})
    }
    handleAssistantChange = (event) => {
        this.setState({assistant: event.target.value})
    }
    handleRouteChange = (event) => {
        this.setState({route: event.target.value})
    }
    handleVehicleChange = (event) => {
        this.setState({vehicle: event.target.value})
    }
    inputGuestQuanity = (event) => {
        this.setState({guest_quanity: event.target.value});
    }
    inputFare = (event) => {
        this.setState({fare: event.target.value});
    }

    cancel() {
        this.props.history.push('/listJourneys');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <hr/>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">More rides</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Route: </label>
                                        <Form.Select defaultValue="1" value={this.state.route}
                                                     onChange={this.handleRouteChange} className="form-control">
                                            <option value="">Choose 1 route</option>
                                            {this.state.routes.map(item => {
                                                return <option
                                                    value={item.id}>{item.first_point} - {item.end_point}</option>
                                            })
                                            }
                                        </Form.Select>
                                        {
                                            this.state.errorField.map(itemError => {
                                                return (
                                                    (itemError.route) ?
                                                        <p className="text-danger">*{itemError.route}</p> : ''
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Car: </label>
                                        <Form.Select defaultValue="1" value={this.state.vehicle}
                                                     onChange={this.handleVehicleChange} className="form-control">
                                            <option value="">Choose 1 car</option>
                                            {this.state.vehicles.map(item => {
                                                return <option
                                                    value={item.licensePlate}>{item.licensePlate} / {item.seat} 
                                                    chair</option>
                                            })
                                            }
                                        </Form.Select>
                                        {
                                            this.state.errorField.map(itemError => {
                                                return (
                                                    (itemError.vehicle) ?
                                                        <p className="text-danger">*{itemError.vehicle}</p> : ''
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="form-group">
                                        <Row>
                                            <Col>
                                                <label>Driver: </label>
                                                <Form.Select defaultValue="1" value={this.state.driver}
                                                             onChange={this.handleDriverChange}
                                                             className="form-control">
                                                    <option value="">Choose 1 driver</option>
                                                    {this.state.drivers.map(item => {
                                                        if (this.state.assistant !== item.idCard)
                                                            return <option
                                                                value={item.idCard}>{item.name} - {item.idCard}</option>
                                                    })
                                                    }
                                                </Form.Select>
                                                {
                                                    this.state.errorField.map(itemError => {
                                                        return (
                                                            (itemError.driver) ?
                                                                <p className="text-danger">*{itemError.driver}</p> : ''
                                                        )
                                                    })
                                                }
                                            </Col>
                                            <Col>
                                                <label>Car accessories: </label>
                                                <Form.Select defaultValue="1" value={this.state.assistant}
                                                             onChange={this.handleAssistantChange}
                                                             className="form-control">
                                                    <option value="">Choose 1 spare car</option>
                                                    {this.state.drivers.map(item => {
                                                        if (this.state.driver !== item.idCard)
                                                            return <option
                                                                value={item.idCard}>{item.name} - {item.idCard}</option>
                                                    })
                                                    }
                                                </Form.Select>
                                                {
                                                    this.state.errorField.map(itemError => {
                                                        return (
                                                            (itemError.assistant) ?
                                                                <p className="text-danger">*{itemError.assistant}</p> : ''
                                                        )
                                                    })
                                                }
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group">
                                        <label>Guest number: </label>
                                        <input placeholder="Enter the number of guests" name="guest_quanity"
                                               className="form-control"
                                               value={this.state.guest_quanity} onChange={this.inputGuestQuanity}/>
                                        {this.state.errorField.map(itemError => {
                                                return (
                                                    (itemError.guest_quanity) ?
                                                        <p className="text-danger">*{itemError.guest_quanity}</p> : ''
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Fare: </label>
                                        <input placeholder="Enter the fare" name="fare"
                                               className="form-control"
                                               value={this.state.fare} onChange={this.inputFare}/>
                                        {this.state.errorField.map(itemError => {
                                                return (
                                                    (itemError.fare) ?
                                                        <p className="text-danger">*{itemError.fare}</p> : ''
                                                )
                                            })
                                        }
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveJourney}>Lưu
                                    </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Hủy
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddJourneyComponent;