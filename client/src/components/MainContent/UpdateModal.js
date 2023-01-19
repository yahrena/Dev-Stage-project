import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
// import Axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios, { Axios } from 'axios';
import PostService from '../Service/postService';
import postService from '../Service/postService';
import { BsFillPencilFill } from 'react-icons/bs';
import { toast } from "react-toastify";

const UpdateModal = (props) => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //form updation data
  const [id, setId] = useState(props.id);
  const [code, setCode] = useState(props.code);
  const [name, setName] = useState(props.name);
  const [fname, setFname] = useState(props.fname);
  const [sex, setSex] = useState(props.sex);
  const [address, setAddress] = useState(props.address);
  const [tel, setTel] = useState(props.tel);
  const [branch, setBranch] = useState(props.branch);
  // const [region, setRegion] = useState(props.region);
  // const [district, setDistrict] = useState(props.district);
  // const [commune, setCommune] = useState(props.commune);
  //Region-district-commune
  const regions = ['Analamanga', 'Androy', 'Analanjirofo']
  const districts = {
    // '--Choose region--': [],
    'Analamanga': ['Ambohidratrimo', 'Andramasina', 'Anjozorobe'],
    'Androy': ['Ambovombe-Androy', 'Bekily', 'Beloha']
  }
  const communes = {
    'Ambohidratrimo': ['Ambohidratrimo', 'Anosiala'],
    'Andramasina': ['Andramasina', 'Mandrosoa'],
    'Anjozorobe': ['Anjozorobe', 'Mangamila'],
    'Ambovombe-Androy': ['Ambovombe', 'Tsimananada'],
    'Bekily': ['Morafeno-Bekily', 'Besakoa'],
    'Beloha': ['Beloha', 'Tranovaho'],
  }

  const [region, setSelectedRegion] = useState(props.region)
  const [district, setSelectedDistrict] = useState(props.district)
  const [commune, setSelectedCommune] = useState(props.commune)

  const updateStudent = () => {
    axios.put(`http://localhost:3700/api/student/${id}`, {
      code: code,
      name: name,
      fname: fname,
      sex: sex,
      address: address,
      tel: tel,
      branch: branch,
      region: region,
      district: district,
      commune: commune
    });
    // toast.success('Student updated with success!', {
    //   position: toast.POSITION.TOP_CENTER
    // });
    alert("updated successfully");
  };



  return (
    <>
      <button class='btn btn-outline-success btn-sm' onClick={handleShow}>
        <BsFillPencilFill />Edit
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Form onSubmit={updateStudent}>
          <Modal.Body>
            <div className="container main-form">
              {/* {errorMsg && <p className="errorMsg alert alert-danger"><center>{errorMsg}</center></p>} */}

              <Form.Group controlId="code">
                <Form.Label className="container">Code</Form.Label>
                <Form.Control
                  className="input-control"
                  type="text"
                  name="code"
                  value={code}
                  placeholder="Enter name of book"
                // onChange={event => setCode(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="name">
                <Form.Label className="container">Name</Form.Label>
                <Form.Control
                  className="input-control"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter name of author"
                  onChange={event => setName(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="fname">
                <Form.Label className="container">First Name</Form.Label>
                <Form.Control
                  className="input-control"
                  type="text"
                  name="fname"
                  value={fname}
                  placeholder="Enter available quantity"
                  onChange={event => setFname(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="sex">
                <Form.Label className="container">Sex</Form.Label>
                <Form.Check
                  label='Masculin'
                  className="radio"
                  type="radio"
                  name="sex"
                  value="M"
                  // placeholder="Enter first name of the student"
                  onChange={event => setSex(event.target.value)}
                />
                <Form.Check
                  label='Feminin'
                  className="radio"
                  type="radio"
                  name="sex"
                  value="F"
                  // placeholder="Enter first name of the student"
                  onChange={event => setSex(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label className="container">Address</Form.Label>
                <Form.Control
                  className="input-control"
                  type="text"
                  name="address"
                  value={address}
                  placeholder="Enter address"
                  onChange={event => setAddress(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="tel">
                <Form.Label className="container">Phone Number</Form.Label>
                <Form.Control
                  className="input-control"
                  type="text"
                  name="tel"
                  value={tel}
                  placeholder="Enter price of book"
                  onChange={event => setTel(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="branch">
                <Form.Label className="container">Branch</Form.Label>
                <Form.Control
                  className="input-control"
                  type="text"
                  name="branch"
                  value={branch}
                  placeholder="Enter price of book"
                  onChange={event => setBranch(event.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="container">Region</Form.Label>
                <Form.Select onChange={(e) => { setSelectedRegion(e.target.value) }} type="text" name="region" value={region}>
                  <option value={region}>{region}</option>
                  {
                    regions.map(regions => {
                      return <option onChange={(e) => { setSelectedRegion(e.target.value) }} >{regions}</option>
                    })
                  }
                </Form.Select>
              </Form.Group>
              {region && <Form.Group>
                <Form.Label className="container">District</Form.Label>
                <Form.Select onChange={(e) => { setSelectedDistrict(e.target.value) }} type="text" name="district" value={district}>
                  <option value={district}>{district}</option>
                  {
                    districts[region].map(districts => {
                      return <option onChange={(e) => { setSelectedDistrict(e.target.value) }} >{districts}</option>
                    })
                  }
                </Form.Select>
              </Form.Group>}
              {district && <Form.Group>
                <Form.Label className="container">Commune</Form.Label>
                <Form.Select onChange={(e) => { setSelectedCommune(e.target.value) }} type="text" name="commune" value={commune}>
                  <option value={commune}>{commune}</option>
                  {
                    communes[district].map(communes => {
                      return <option onChange={(e) => { setSelectedCommune(e.target.value) }} >{communes}</option>
                    })
                  }
                </Form.Select>
              </Form.Group>}
              <br />

            </div>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>&ensp;
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
            <Button variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateModal;