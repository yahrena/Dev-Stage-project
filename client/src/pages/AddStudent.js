import React from 'react';
import StudentForm from '../components/MainContent/StudentForm';
import Container from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddStudent = () => {
  const handleOnSubmit = (book) => {
    console.log(book);
  };

  return (
        <React.Fragment>
          <StudentForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
  );
};

export default AddStudent;