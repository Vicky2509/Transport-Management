import React, {Component} from 'react';
import DriverService from "../../services/DriverService";
import {Form} from "react-bootstrap";


class AddDriverComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idCard: '',
            name: '',
            license: '',
            address: '',
            birth: '',
            errorField: [],
            options: [{
                value: "A1",
                label: "A1",
            }, {
                value: "A2",
                label: "A2",
            }, {
                value: "A3",
                label: "A3",
            }, {
                value: "A4",
                label: "A4",
            }, {
                value: "B1",
                label: "B1",
            }, {
                value: "B2",
                label: "B2",
            }, {
                value: "C",
                label: "C",
            }, {
                value: "D",
                label: "D",
            }, {
                value: "E",
                label: "E",
            }, {
                value: "F",
                label: "F",
            }]
        }
        this.inputIdCard = this.inputIdCard.bind(this);
        this.inputName = this.inputName.bind(this);
        this.inputLicense = this.inputLicense.bind(this);
        this.inputAddress = this.inputAddress.bind(this);
        this.inputBirth = this.inputBirth.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveDriver = this.saveDriver.bind(this);
    }

    saveDriver = (e) => {
        this.setState({
            errorField: []
        })
        e.preventDefault();
        let driver = {
            idCard: this.state.idCard,
            name: this.state.name,
            license: this.state.license,
            address: this.state.address,
            birth: this.state.birth,
        };
        console.log(this.state.type)
        return DriverService.addDriver(driver)
            .then(resp => {
                if (resp.data.field === false) {
                    this.setState({errorField: this.state.errorField.concat(resp.data)})
                } else {
                    const dataError = []
                    dataError.push(resp.data.errors)
                    // eslint-disable-next-line
                    dataError.map(error => {
                        // eslint-disable-next-line
                        error.map(listError => {
                            this.setState({errorField: this.state.errorField.concat(listError)})
                        })
                    })
                }
            }).catch(resp => {
                this.props.history.push('/listDrivers')
            });

    }
    handleChange = (event) => {
        this.setState({type: event.target.value})
    }
    inputIdCard = (event) => {
        this.setState({idCard: event.target.value});
    }
    inputName = (event) => {
        this.setState({name: event.target.value});
    }
    inputLicense = (event) => {
        this.setState({license: event.target.value});
    }
    inputAddress = (event) => {
        this.setState({address: event.target.value});
    }
    inputBirth = (event) => {
        this.setState({birth: event.target.value});
    }

    cancel() {
        this.props.history.push('/listDrivers');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <hr/>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">More drivers</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>ID number: </label>
                                        <input placeholder="Enter your ID number" name="idCard" className="form-control"
                                               value={this.state.idCard} onChange={this.inputIdCard}/>
                                        {
                                            this.state.errorField.map(itemError => {
                                                return (
                                                    (!itemError.field) ?
                                                        <p className="text-danger">*{itemError.defaultMessage}</p> :
                                                        (itemError.field === 'idCard') ?
                                                            <p className="text-danger">*{itemError.defaultMessage}</p> : ''
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>First and last name: </label>
                                        <input placeholder="Enter your first and last name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.inputName}/>
                                        {
                                            this.state.errorField.map(itemError => {
                                                return (
                                                    (itemError.field === 'name') ?
                                                        <p className="text-danger">*{itemError.defaultMessage}</p> : ''
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>License number: </label>
                                        <input placeholder="Enter license number" name="license"
                                               className="form-control"
                                               value={this.state.license} onChange={this.inputLicense}/>
                                        {
                                            this.state.errorField.map(itemError => {
                                                return (
                                                    (itemError.field === 'license') ?
                                                        <p className="text-danger">*{itemError.defaultMessage}</p> : ''
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Type of license: </label>
                                        <Form.Select defaultValue="A1" value={this.state.type}
                                                     onChange={this.handleChange} className="form-control">
                                            <option value="">Choose 1 Type of license</option>
                                            {this.state.options.map(item => {
                                                return <option value={item.value}>{item.label}</option>
                                            })
                                            }
                                        </Form.Select>
                                        {
                                            this.state.errorField.map(itemError => {
                                                return (
                                                    (itemError.field === 'type') ?
                                                        <p className="text-danger">*{itemError.defaultMessage}</p> : ''
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input placeholder="Enter address" name="address" className="form-control"
                                               value={this.state.address} onChange={this.inputAddress}/>
                                        {
                                            this.state.errorField.map(itemError => {
                                                return (
                                                    (itemError.field === 'address') ?
                                                        <p className="text-danger">*{itemError.defaultMessage}</p> : ''
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Date of birth: </label>
                                        <input placeholder="Enter date of birth" name="birth"
                                               className="form-control"
                                               value={this.state.birth} onChange={this.inputBirth}/>
                                        {
                                            this.state.errorField.map(itemError => {
                                                return (
                                                    (itemError.field === 'birth') ?
                                                        <p className="text-danger">*{itemError.defaultMessage}</p> : ''
                                                )
                                            })
                                        }
                                    </div>
                            
                                    <button className="btn btn-success" onClick={this.saveDriver}>Save
                                    </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Cancel
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

export default AddDriverComponent;