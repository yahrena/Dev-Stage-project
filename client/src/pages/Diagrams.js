import React, { useState, useEffect } from 'react';
import { Bar, Line, Doughnut, Pie } from "react-chartjs-2";
import Card from 'react-bootstrap/Card';
import "chart.js/auto";
import axios from 'axios';
import darknight from '../img/darknight.jpg';
import boss from '../img/boss.jpg'

const Diagrams = () => {
    const [nbrByBranch, setNbrByBranch] = useState([])

    useEffect(() => {
        getNbrByBranch();
    }, []);

    const getNbrByBranch = async () => {
        const response = await axios.get("http://localhost:3700/api/nombreByBranch")
        if (response.status === 200) {
            setNbrByBranch(response.data);
        }

    };

    var labels = nbrByBranch.map(function (val) { return val._id });
    var donne = nbrByBranch.map(function (val) { return val.nbr });


    const data = {
        labels: labels,
        datasets: [{
            data: donne,
            backgroundColor: [
                "#A5C9CA",
                "#395B64",
                "#C996CC",
                "#2C3333"
            ]
        }]
    };


    return (
        <div>
            <div class="row" style={{ margin: "10px 0px 0px 0px" }}>
                {nbrByBranch.map((val, key) => {
                    return <div class="col-sm-3" key={key}>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src={boss} /> */}
                            <Card.Body>
                                <Card.Title className='text-uppercase'><center>{val._id}</center></Card.Title>
                                <Card.Text><center>
                                    {val.nbr}
                                </center>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                })}


            </div>
            <div className='row' >

                <div className='col-sm-4' style={{ margin: "20px 90px 0px -120px" }}>
                    <div className='card' style={{ width: "750px", margin: "0 auto" }}>
                        <Bar className='container' data={data} />
                    </div>
                </div>

                <div className='col-sm-4' style={{ margin: "20px 0px 10px 240px" }}>
                    <div className='card' style={{ width: "750px", margin: "0 auto" }}>
                        <Line className='container' data={data} />
                    </div>
                </div>

                {/* <div className='col-sm4'>
                <div className='card' style={{ width: "450px", margin: "0 auto" }}>
                    <Line className='container' data={data} />
                </div>
            </div> */}

            </div>
            {/* <div className='card' style={{float:"center", width: "550px", margin: "0 auto" }}>
                <Pie className='container' data={data}/>
            </div> */}

        </div>
    )
}

export default Diagrams