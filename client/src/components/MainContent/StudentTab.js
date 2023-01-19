import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, {useState, useEffect} from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';
import {BsTrash2Fill, BsBookHalf, BsPersonCheckFill, BsCurrencyDollar, BsPencilSquare} from 'react-icons/bs';
import UpdateModal from './UpdateModal';

const StudentTab = () => {

    const [studentList, setStudentList] = useState([]);
    const [nbrAllStudent, setNbrAllStudent] = useState([]);

    const affiche = () =>{
        Axios.get('http://localhost:3700/api/student').then((response)=> {
            setStudentList(response.data);
        });
    }

    const nbr = async () => {
        const response = await Axios.get("http://localhost:3700/api/nombretotal")
        if (response.status === 200) {
            setNbrAllStudent(response.data);
        }
        console.log(response.data);
    }

    // find all students
    useEffect(()=> {
        affiche();
        nbr();
     }, []);

      /*Delete */
    const deleteStudent = (id) =>{
        if(window.confirm("Realy want to delete this row?")){
        const res = Axios.delete(`http://localhost:3700/api/student/${id}`);
        if(res.status === 201){
            window.location.reload();
            toast.success('Student deleted with success!', {
                position: toast.POSITION.TOP_CENTER
            });
            affiche();
            nbr();
        };

        
        };
    };

    return (
        <div>
            <ToastContainer/>
            <button type='button' class='btn btn-primary'>Total:<span class='badge'>{nbrAllStudent}</span></button><br/><br/>
            <table className="table table-responsive-sm table-bordered table-striped table-success">
                <thead class="thead-primary">
                    <tr>
                        <th scope="col"><center>Code</center></th>
                        <th scope="col"><center>Name</center></th>
                        <th scope="col"><center>First Name</center></th>
                        <th scope="col"><center>Sex</center></th>
                        <th scope="col"><center>Address</center></th>
                        <th scope="col"><center>Contact</center></th>
                        <th scope="col"><center>Branch</center></th>
                        <th scope="col"><center>Region</center></th>
                        <th scope="col"><center>District</center></th>
                        <th scope="col"><center>Commune</center></th>
                        <th scope ="col"><center>Actions</center></th>
                    </tr>
                </thead>
                {studentList.map((val, key) => {
                    return <tbody key={key}>
                        <tr>
                            <td className='text-capitalize'><center>{val.code}</center></td>
                            <td className='text-capitalize'><center>{val.name}</center></td>
                            <td className='text-capitalize'><center>{val.fname}</center></td>
                            <td className='text-capitalize'><center>{val.sex}</center></td>
                            <td className='text-capitalize'><center>{val.address}</center></td>
                            <td><center>{val.tel}</center></td>
                            <td className='text-capitalize'><center>{val.branch}</center></td>
                            <td className='text-capitalize'><center>{val.region}</center></td>
                            <td className='text-capitalize'><center>{val.district}</center></td>
                            <td className='text-capitalize'><center>{val.commune}</center></td>
                            <td><center>
                              <UpdateModal id={val._id} code={val.code} name={val.name} fname={val.fname}
                               sex={val.sex} address={val.address} tel={val.tel} branch={val.branch} 
                               region={val.region} district={val.district} commune={val.commune}/>&ensp;
                              <button class="btn btn-outline-danger btn-sm" onClick={() => deleteStudent(val._id)}><BsTrash2Fill/>Delete</button>
                              </center>
                          </td>
                        </tr>

                    </tbody>
                })}


            </table>
        </div>
    )
}

export default StudentTab


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, {useState, useEffect} from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import Axios from 'axios';
// import {BsTrash2Fill, BsBookHalf, BsPersonCheckFill, BsCurrencyDollar} from 'react-icons/bs';

// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// // import Modal from 'react-bootstrap/Modal';

// // import UpdateModal from './updateModal';


// const StudentTab = (props) => {

//   const [studentList, setStudentList] = useState([]);

// //   const [show, setShow] = useState(false);

// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);

// //   //momba anle formulaire
// //   const [book, setBook] = useState({
// //     bookname: props.book ? props.book.bookname : '',
// //     author: props.book ? props.book.author : '',
// //     quantity: props.book ? props.book.quantity : '',
// //     price: props.book ? props.book.price : '',
// //     date: props.book ? props.book.date : ''
// //   });

// //   const [errorMsg, setErrorMsg] = useState('');
// //   const { bookname, author, price, quantity } = book;

// //   const [newbookname, setnewbookname] = useState('');

// //   const handleOnSubmit = (event) => {
// //     event.preventDefault();
// //     const values = [bookname, author, price, quantity];
// //     let errorMsg = '';

// //     const allFieldsFilled = values.every((field) => {
// //       const value = `${field}`.trim();
// //       return value !== '' && value !== '0';
// //     });

// //     if (allFieldsFilled) {
// //       const book = {
// //         id: uuidv4(),
// //         bookname,
// //         author,
// //         price,
// //         quantity,
// //         date: new Date()
// //       };
// //       props.handleOnSubmit(book);
// //     } else {
// //       errorMsg = 'Please fill out all the fields!';
// //     }
// //     setErrorMsg(errorMsg);
// //   };

// //   const handleInputChange = (event) => {
// //     const { name, value } = event.target;
// //     switch (name) {
// //       case 'quantity':
// //         if (value === '' || parseInt(value) === +value) {
// //           setBook((prevState) => ({
// //             ...prevState,
// //             [name]: value
// //           }));
// //         }
// //         break;
// //       case 'price':
// //         if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
// //           setBook((prevState) => ({
// //             ...prevState,
// //             [name]: value
// //           }));
// //         }
// //         break;
// //       default:
// //         setBook((prevState) => ({
// //           ...prevState,
// //           [name]: value
// //         }));
// //     }
// //   };

 

  
  

//   // const fetch = (id) =>{
//   //   Axios.get("http://localhost:3001/fecth", {

//   //   })
//   // }

//   useEffect(()=> {
//       Axios.get('http://localhost:3700/api/student').then((response)=> {
//         setStudentList(response.data);
//         console.log(response.data);
//       });
//    }, []);

// //   //fonction delete
// //   const deleteBook = (id) =>{
// //     if(window.confirm("Realy want to delete this row?")){
// //       const response = Axios.delete(`http://localhost:3001/delete/${id}`);
// //       // if(response.status === 200){
// //         window.location.reload();
// //         alert("Data deleted succesfully!");
// //       // };
// //     };
// //   };



//   return (
//     <div><>

//     {/* <div class="d-flex p-2 container">BooksList</div> */}
//     <table class="table table-responsive-sm table-bordered table-striped table-success">
//             <thead class="thead-primary">
//               <tr>
                
//                 <th scope="col"><center>Code</center></th>
//                 <th scope="col"><center>Name</center></th>
//                 <th scope="col"><center>First Name</center></th>
//                 <th scope="col"><center>Telephone</center></th>
//                 <th scope="col"><center>Branch</center></th>
//                 <th scope="col"><center>Actions</center></th>
//               </tr>
//             </thead>

//     {studentList.map((val,key)=> {
//       return <tbody key={key}>
//         {/* <h1>{val.bookname}</h1> <h1>{val.author}</h1> <h1>{val.quantity}</h1> <h1>{val.price}</h1> */}

          
//               <tr>
                
//                 <td className='text-capitalize'>{val.code}</td>
//                 <td className='text-capitalize'>{val.name}</td>
//                 <td>{val.fname}</td>
//                 <td>{val.tel}</td>
//                 <td>{val.branch}</td>
//                 <td>
//                   <center>
//                   {/* <button id={val._id} class="btn btn-outline-success btn-sm" onClick={handleShow}>Edit</button>&ensp; */}
                
//                   {/* <UpdateModal id={val._id} bookname={val.bookname} author={val.author} quantity={val.quantity} price={val.price}/>&ensp; */}
//                   <button class="btn btn-outline-danger btn-sm"><BsTrash2Fill/>Delete</button>
//                   </center>
//                 </td>
//               </tr>
//             </tbody>
//     })}

//     </table>
//     </></div>
//   )
// }

// export default StudentTab