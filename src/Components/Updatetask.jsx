import React from 'react'
import { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import axios from 'axios'
const Updatetask = () => {
    const [dropDownOpen1, setdropDownOpen1] = useState(false)
    const [dropDownOpen2, setdropDownOpen2] = useState(false)
    const [dropDownOpen3, setdropDownOpen3] = useState(false)

    const toggle1 = () => {
        setdropDownOpen1((prevState) => !prevState)
    }
    const toggle2 = () => {
        setdropDownOpen2((prevState) => !prevState)
    }
    const toggle3 = () => {
        setdropDownOpen3((prevState) => !prevState)
    }

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startdate, setStartdate] = useState("")
    const [enddate, setEnddate] = useState("")
    const [status, setStatus] = useState("")
    const [assignedby, setAssignedby] = useState("")
    const [assignedto, setAssignedto] = useState("")



    const navigate = useNavigate()


    useEffect(() => {
        setId(localStorage.getItem("id"));
        setTitle(localStorage.getItem("title"));
        setDescription(localStorage.getItem("description"))
        setStartdate(localStorage.getItem("startdate"))
        setEnddate(localStorage.getItem("enddate"))
        setStatus(localStorage.getItem("status"))
        setAssignedby(localStorage.getItem("assignedby"))
        setAssignedto(localStorage.getItem("assignedto"))

    }, [])

    const handleUpdate = async () => {
        try {
            axios.put(`http://localhost:5000/task/${id}`, { title, description, startdate, enddate, status, assignedby, assignedto }).then(() => {
                navigate("/user/employee/showtask")
            })
            swal("Good", " Update task Successfully !!", "success");

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: "Oops...",
                text: "Something went wrong"
            })
        }
    }
    return (
        <>
            <Container>
                <Row className='mt-4' >
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card>
                            <CardHeader><h2 className='text-center'>Edit Task Here By (Admin) & (Employee) !!</h2></CardHeader>
                            <CardBody>
                                <Form >
                                    <FormGroup>
                                        {/* Title  */}
                                        <Label htmlFor='title'>Title</Label>
                                        <Input type='text' placeholder='Enter Title here' id='title' autoComplete='off' onChange={(e) => setTitle(e.target.value)} name='title' value={title} />
                                    </FormGroup>

                                    <FormGroup>
                                        {/* Description  */}
                                        <Label htmlFor='description'>Description</Label>
                                        <Input type='textarea' style={{ height: "170px" }} placeholder='Enter description here' id='description'
                                            onChange={(e) => setDescription(e.target.value)}
                                            autoComplete='off'
                                            value={description} name='description'
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        {/* Start Date  */}
                                        <Label htmlFor='startdate'>Start Date</Label>
                                        <Input type='date' placeholder='Enter Start Date' id='startdate'
                                            autoComplete='off'
                                            onChange={(e) => setStartdate(e.target.value)}
                                            name='startdate'
                                            value={startdate}
                                        />
                                    </FormGroup>


                                    <FormGroup>
                                        {/* End Date  */}
                                        <Label htmlFor='enddate'>End Date</Label>
                                        <Input type='date' placeholder='Enter End Date' id='enddate'
                                            autoComplete='off'
                                            onChange={(e) => setEnddate(e.target.value)}
                                            name='enddate'
                                            value={enddate}
                                        />
                                    </FormGroup>


                                    <FormGroup>
                                        {/* status  */}
                                        <Label htmlFor='status'>Status</Label>
                                        <Dropdown isOpen={dropDownOpen1} toggle={toggle1}  >
                                            <DropdownToggle>Status : {status}</DropdownToggle>
                                            <DropdownMenu>

                                                <DropdownItem name="yettostart" onClick={(e) => setStatus(e.target.innerText)}>Yet To Start</DropdownItem>
                                                <DropdownItem name="pending" onClick={(e) => setStatus(e.target.innerText)}>Pending</DropdownItem>
                                                <DropdownItem name="complete" onClick={(e) => setStatus(e.target.innerText)} >Complete</DropdownItem>

                                            </DropdownMenu>
                                        </Dropdown>
                                    </FormGroup>


                                    <FormGroup>
                                        {/* Remark  */}
                                        <Label htmlFor='remark' >Remark</Label>
                                        <Input disabled type='text' placeholder='Add Remark here' id='remark'
                                            autoComplete='off'
                                            name='remark'
                                        />
                                    </FormGroup>


                                    <FormGroup>
                                        {/* Assigned by  */}
                                        <Label htmlFor='assignedby'>Assigned By</Label>
                                        <Dropdown isOpen={dropDownOpen2} toggle={toggle2} >
                                            <DropdownToggle >Assigned By :</DropdownToggle>
                                            <DropdownMenu name="assignedby" id="assignedby">

                                                <DropdownItem name="neena" onClick={(e) => setAssignedby(e.target.innerText)}>Neena</DropdownItem>
                                                <DropdownItem name="bala" onClick={(e) => setAssignedby(e.target.innerText)}>Bala</DropdownItem>
                                                <DropdownItem name="jenefa" onClick={(e) => setAssignedby(e.target.innerText)}>Jenefa</DropdownItem>
                                                <DropdownItem name="malar" onClick={(e) => setAssignedby(e.target.innerText)}> Malar</DropdownItem>

                                            </DropdownMenu>
                                        </Dropdown>
                                    </FormGroup>

                                    <FormGroup> 
                                        {/* Assi togned   */}
                                        <Label htmlFor='status'>Assigned To</Label>
                                        <Dropdown isOpen={dropDownOpen3} toggle={toggle3} >
                                            <DropdownToggle >Assigned To : </DropdownToggle>
                                            <DropdownMenu >

                                                <DropdownItem name="neena" onClick={(e) => setAssignedto(e.target.innerText)}>Neena</DropdownItem>
                                                <DropdownItem name="bala" onClick={(e) => setAssignedto(e.target.innerText)}>Bala</DropdownItem>
                                                <DropdownItem name="malar" onClick={(e) => setAssignedto(e.target.innerText)}>Malar</DropdownItem>
                                                <DropdownItem name="jenefa" onClick={(e) => setAssignedto(e.target.innerText)} >Jenefa</DropdownItem>
                                                <DropdownItem name="rahul" onClick={(e) => setAssignedto(e.target.innerText)}>Rahul</DropdownItem>
                                                <DropdownItem name="sanket" onClick={(e) => setAssignedto(e.target.innerText)} >Sanket</DropdownItem>
                                                <DropdownItem name="suraj" onClick={(e) => setAssignedto(e.target.innerText)} >Suraj</DropdownItem>
                                                <DropdownItem name="rex" onClick={(e) => setAssignedto(e.target.innerText)}>Rex</DropdownItem>
                                                <DropdownItem name="goverdhan" onClick={(e) => setAssignedto(e.target.innerText)} >Govardhan</DropdownItem>
                                                <DropdownItem name="anjushree" onClick={(e) => setAssignedto(e.target.innerText)} >Anjushree</DropdownItem>
                                                <DropdownItem name="vaidehi" onClick={(e) => setAssignedto(e.target.innerText)}>Vaidehi</DropdownItem>
                                                <DropdownItem name="abdul" onClick={(e) => setAssignedto(e.target.innerText)}>Abdul</DropdownItem>
                                                <DropdownItem name="gayatri" onClick={(e) => setAssignedto(e.target.innerText)}>Gayatri</DropdownItem>
                                                <DropdownItem name="swetha" onClick={(e) => setAssignedto(e.target.innerText)} >Swetha</DropdownItem>
                                                <DropdownItem name="tejas" onClick={(e) => setAssignedto(e.target.innerText)}>Tejas</DropdownItem>
                                                <DropdownItem name="rahat" onClick={(e) => setAssignedto(e.target.innerText)}>Rahat</DropdownItem>

                                            </DropdownMenu>
                                        </Dropdown>

                                    </FormGroup>
                                    <Container className='mt-4 text-center'>
                                        <Button color='dark' onClick={handleUpdate} >Update</Button>
                                        <Button color='secondary' type='reset' className='ms-4'>Reset</Button>
                                    </Container>

                                </Form>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Updatetask