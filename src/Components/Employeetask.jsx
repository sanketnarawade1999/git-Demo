import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Showtask } from "../services/user-service";
import { Link } from "react-router-dom";
import "../styles/style.css";

import { Button, Table } from "reactstrap";
const Employeetask = () => {
    const [tasks, setTasks] = useState([]);
    const [id, setId] = useState("");


    // Get all the data
    const getData = async () => {
        try {
            const task = await Showtask(id);
            setTasks(task);
        } catch (error) {
            console.log(error);
        }
    };
    //---------------------------------------------------------------------------------------------------------------------------------

    // Condtionally Button renderring

    // const handleClick = (event) => {
    //     event.currentTarget.disabled = true;
    // }
    // ---------------------------------------------------------------------------------------------------------------
    // Update the data
    const handleupdate = (id, title, description, startdate, enddate, status, assignedby, assignedto) => {
        localStorage.setItem("id", id)
        localStorage.setItem("title", title)
        localStorage.setItem("description", description)
        localStorage.setItem("startdate", startdate)
        localStorage.setItem("enddate", enddate)
        localStorage.setItem("status", status)
        localStorage.setItem("assignedby", assignedby)
        localStorage.setItem("assignedto", assignedto)
    }

    useEffect(() => {
        getData();
    }, []);

    return (


        <>

            <h1 className="text-center  " style={{ background: "rgba(0, 0, 0, 0.5)", color: "white", fontSize: "70px" }}>Task Details (Employee)</h1>
            <Table className="mt-3" striped>
                <thead>
                    <tr className="text-center">
                        <th>Sr.No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Assigned By</th>
                        <th>Action (Edit)</th>
                        {/* <th>Action(Complete)</th> */}

                    </tr>
                </thead>


                {tasks.map((eachdata, index) => {
                    return (
                        <>
                            <tbody>
                                <tr className="text-center">
                                    <th key={index}>{eachdata.id}</th>
                                    <th>{eachdata.title}</th>
                                    <th style={{ width: "400px" }}>{eachdata.description}</th>
                                    <th>{eachdata.startdate}</th>
                                    <th>{eachdata.enddate}</th>
                                    <th>{eachdata.status}</th>
                                    <th>{eachdata.assignedby}</th>
                                    <th> <Link to={"/updatetask"}>
                                        <Button color="success" onClick={() => handleupdate(eachdata.id, eachdata.title, eachdata.description, eachdata.startdate, eachdata.enddate, eachdata.status, eachdata.assignedby, eachdata.assignedto)}>Update</Button>
                                    </Link>
                                    </th>
                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </Table>
        </>


    );
};

export default Employeetask;
