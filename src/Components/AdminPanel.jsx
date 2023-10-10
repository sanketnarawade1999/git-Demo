import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Deletetask, Showtask } from "../services/user-service";
import { Link } from "react-router-dom";
import "../styles/style.css";

import { Button, Table } from "reactstrap";
import swal from "sweetalert";
import Swal from "sweetalert2";

const AdminPanel = () => {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState("");

  //  Delete the data from id
  const handleDelete = async (id) => {
    try {

      await Deletetask(id).then(() => {
        getData()
      })
      swal("Good", " Delete task Successfully !!", "success");

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: "Oops...",
        text: "Something went wrong"
      })
    }
  }


  // Get all the data
  const getData = async () => {
    try {
      const task = await Showtask(id);
      setTasks(task);
    } catch (error) {
      console.log(error);
    }
  };


  // Update Data


  useEffect(() => {
    getData();
  }, []);

  return (


    <>

      <h1 className="text-center  " style={{ background: "rgba(0, 0, 0, 0.5)", color: "white", fontSize: "70px" }}>Admin Panel</h1>
      <Table className="mt-3" striped>
        <thead >
          <tr className="text-center">
            <th>Sr.No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Assigned By</th>
            <th>Assigned to</th>
            <th>Action (Edit)</th>
            <th>Action (Delete)</th>
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
                  <th>{eachdata.assignedto}</th>
                  <th> <Link to={"/updatetask"}>
                    <Button color="success">Update</Button>
                  </Link>
                  </th>
                  <th> <Link >
                    <Button color="danger" onClick={() => handleDelete(eachdata.id)}>Delete</Button>
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

export default AdminPanel;
