import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from './Dropdown';
import DropSelection from './DropSelection';

const StudentForm = (props) => {
  const [student, setStudent] = useState({
    code: props.student ? props.student.code : '',
    name: props.student ? props.student.name : '',
    fname: props.student ? props.student.fname : '',
    sex: props.student ? props.student.sex : '',
    address: props.student ? props.student.address : '',
    tel: props.student ? props.student.tel : '',
    branch: props.student ? props.student.branch : '',
    region: props.student ? props.student.region : '',
    district: props.student ? props.student.district : '',
    commune: props.student ? props.student.commune : '',

  });

  const region = ['Analamanga', 'Androy']
  const district = {
    // '--Choose region--': [],
    'Analamanga': ['Ambohidratrimo', 'Andramasina', 'Anjozorobe'],
    'Androy': ['Ambovombe-Androy', 'Bekily', 'Beloha']
  }
  const commune = {
    'Ambohidratrimo': ['Ambohidratrimo', 'Anosiala'],
    'Andramasina': ['Andramasina', 'Mandrosoa'],
    'Anjozorobe': ['Anjozorobe', 'Mangamila'],
    'Ambovombe-Androy': ['Ambovombe', 'Tsimananada'],
    'Bekily': ['Morafeno-Bekily', 'Besakoa'],
    'Beloha': ['Beloha', 'Tranovaho'],
  }


  const [selectedRegion, setSelectedRegion] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedCommune, setSelectedCommune] = useState('')
  console.log(selectedRegion)
  console.log(selectedDistrict)
  console.log(selectedCommune)

  const [errorMsg, setErrorMsg] = useState('');
  const { code, name, fname, sex, address, tel, branch } = student;
  const [errors, setErrors] = useState({});


  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [code, name, fname, sex, address, tel, branch, region, district, commune];

    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const student = {
        id: uuidv4(),
        code,
        name,
        fname,
        sex,
        address,
        tel,
        branch,
        region,
        district,
        commune
      };
      props.handleOnSubmit(student);
    } else {
      errorMsg = 'Please fill out all the fields!';

    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'tel':
        if (value === '' || parseInt(value) === +value) {
          setStudent((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      // case 'price':
      //   if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      //     setBook((prevState) => ({
      //       ...prevState,
      //       [name]: value
      //     }));
      //   }
      //   break;
      default:
        setStudent((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  // useEffect(async () => {
  //   await Axios.get('http://localhost:3700/api/student')
  //     .then(res => {
  //       console.log(res)
  //     })
  // })

  const addToList = () => {


    const response = Axios.post("http://localhost:3700/api/student", {
      code: code,
      name: name,
      fname: fname,
      sex: sex,
      address: address,
      tel: tel,
      branch: branch,
      region: selectedRegion,
      district: selectedDistrict,
      commune: selectedCommune
    })
    if (response.status === 201) {
      toast.success('Student added with success!', {
        position: toast.POSITION.TOP_CENTER

      });
      // document.forms.formulaire.reset();
      }if (response.status === 404) {
        toast.error("This student's code already exist!", {
          position: toast.POSITION.TOP_CENTER

        });
    }
    else {
      toast.error("Verify all input fields", {
        position: toast.POSITION.TOP_CENTER

      });
      console.log("error");
    }






    // window.location.reload();
  };


  return (
    <Container>
      <div className="container main-form card">
        {errorMsg && <p className="errorMsg alert alert-danger"><center>{errorMsg}</center></p>}
        &ensp;<Form onSubmit={handleOnSubmit} name='formulaire'>
          <Form.Group controlId="code">
            <Form.Label className="container">Code</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="code"
              value={code}
              placeholder="Enter code of the student"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label className="container">Name</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="name"
              value={name}
              placeholder="Enter name of the student"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="fname">
            <Form.Label className="container">First name</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="fname"
              value={fname}
              placeholder="Enter first name of the student"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
            <Form.Check
              label='Feminin'
              className="radio"
              type="radio"
              name="sex"
              value="F"
              // placeholder="Enter first name of the student"
              onChange={handleInputChange}
            />
            {/* <input type="radio" name="gender" value="male" checked> Male</input><br>
            <input type="radio" name="gender" value="female"> Female</input></br> */}
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label className="container">Address</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="address"
              value={address}
              placeholder="Enter the address of the student"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="tel">
            <Form.Label className="container">Phone number</Form.Label>
            <Form.Control
              className="input-control"
              type="tel"
              name="tel"
              value={tel}
              placeholder="Enter telephone number"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="branch">
            <Form.Label className="container">Branch</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="branch"
              value={branch}
              placeholder="Enter branch of the student"
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* <Form.Group><Dropdown region={region} district={district} commune={commune}/></Form.Group><br/> */}
          {/* <Form.Group><DropSelection region={region} district={district} commune={commune}/></Form.Group><br/> */}
          <Form.Group>
            <Form.Label className="container">Region</Form.Label>
            <Form.Select onChange={(e) => { setSelectedRegion(e.target.value) }} type="text" name="region" value={selectedRegion}>
              {/* <option>--Choose region--</option> */}
              {
                region.map(region => {
                  return <option onChange={(e) => { setSelectedRegion(e.target.value) }} >{region}</option>
                })
              }
            </Form.Select>
          </Form.Group>
          {selectedRegion && <Form.Group>
            <Form.Label className="container">District</Form.Label>
            <Form.Select onChange={(e) => { setSelectedDistrict(e.target.value) }} type="text" name="district" value={selectedDistrict}>
              {/* <option>--Choose District--</option> */}
              {
                district[selectedRegion].map(district => {
                  return <option onChange={(e) => { setSelectedDistrict(e.target.value) }} >{district}</option>
                })
              }
            </Form.Select>
          </Form.Group>}
          {selectedDistrict && <Form.Group>
            <Form.Label className="container">Commune</Form.Label>
            <Form.Select onChange={(e) => { setSelectedCommune(e.target.value) }} type="text" name="commune" value={selectedCommune}>
              {/* <option>--Choose Commune--</option> */}
              {
                commune[selectedDistrict].map(commune => {
                  return <option onChange={(e) => { setSelectedCommune(e.target.value) }} >{commune}</option>
                })
              }
            </Form.Select>
          </Form.Group>}
          <br></br><Button variant="primary" type="submit" className="submit-btn" onClick={addToList}>
            Submit
          </Button>
          <ToastContainer />
        </Form><br />
      </div>
    </Container>
  );
};

export default StudentForm;