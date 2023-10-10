import React from 'react'
import { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { addTask } from '../services/user-service'
import { toast } from 'react-toastify'
import swal from 'sweetalert';
const Addtask = () => {
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

    const [data, setData] = useState({
        title: "", description: "", startdate: "", enddate: "", remark: "", status: "", assignedby: "", assignedto: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault()

        //  to Check Validation
        // calling API to send data to server'

        if (data.title.trim() === "") {
            toast.warning("Please fill Title  !!")
            return;
        }
        else if (data.description.trim() === "") {
            toast.warning("Please fill Description !!")
            return;
        }
        else if (data.startdate.trim() === "") {
            toast.warning("Please fill Start Date !!")
            return;
        }
        else if (data.enddate.trim() === "") {
            toast.warning("Please fill End Date !!")
            return;
        }
        else if (data.remark.trim() === "") {
            toast.warning("Please fill Remark !!")
            return;
        }
        else if (data.status.trim() === "") {
            toast.warning("Please fill Status !!")
            return;
        }
        else if (data.assignedby.trim() === "") {
            toast.warning("Please fill Assigned by !!")
            return;
        }
        else if (data.assignedto.trim() === "") {
            toast.warning("Please fill Assigned To !!")
            return;
        }


        try {
            await addTask(data)
            // console.log(result)  const result =
            swal("Good job!", "Task Added Successfully !!", "success")
            setData({ title: "", description: "", startdate: "", enddate: "", remark: "", status: "", assignedby: "", assignedto: "" })
        } catch (error) {
            console.log(error);
            swal({
                title: "Warning",
                text: "Something Went Wrong !!",
                type: "error"
            })

        }

    }


    return (
        <>
            <Container>
                <Row className='mt-4' >
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card>
                            <CardHeader><h2 className='text-center'>Add Task Here !!</h2></CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        {/* Title  */}
                                        <Label htmlFor='title'>Title</Label>
                                        <Input type='text' placeholder='Enter Title here' id='title' autoComplete='off' onChange={(e) => setData({ ...data, title: e.target.value })} name='title' value={data.title} />
                                    </FormGroup>

                                    <FormGroup>
                                        {/* Description  */}
                                        <Label htmlFor='description'>Description</Label>
                                        <Input type='textarea' style={{ height: "170px" }} placeholder='Enter description here' id='description'
                                            onChange={(e) => setData({ ...data, description: e.target.value })}
                                            autoComplete='off'
                                            value={data.description} name='description'
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        {/* Start Date  */}
                                        <Label htmlFor='startdate'>Start Date</Label>
                                        <Input type='date' placeholder='Enter Start Date' id='startdate'
                                            autoComplete='off'
                                            onChange={(e) => setData({ ...data, startdate: e.target.value })}
                                            name='startdate'
                                            value={data.startdate}
                                        />
                                    </FormGroup>


                                    <FormGroup>
                                        {/* End Date  */}
                                        <Label htmlFor='enddate'>End Date</Label>
                                        <Input type='date' placeholder='Enter End Date' id='enddate'
                                            autoComplete='off'
                                            onChange={(e) => setData({ ...data, enddate: e.target.value })}
                                            name='enddate'
                                            value={data.enddate}
                                        />
                                    </FormGroup>


                                    <FormGroup>
                                        {/* status  */}
                                        <Label htmlFor='status'>Status</Label>
                                        <Dropdown isOpen={dropDownOpen1} toggle={toggle1}  >
                                            <DropdownToggle caret>Status : {data.status}</DropdownToggle>
                                            <DropdownMenu >

                                                <DropdownItem name="yettostart" onClick={(e) => setData({ ...data, status: e.target.innerText })}>Yet To Start</DropdownItem>
                                                <DropdownItem name="pending" onClick={(e) => setData({ ...data, status: e.target.innerText })}>Pending</DropdownItem>
                                                <DropdownItem name="complete" onClick={(e) => setData({ ...data, status: e.target.innerText })}>Complete</DropdownItem>

                                            </DropdownMenu>
                                        </Dropdown>
                                    </FormGroup>


                                    <FormGroup>
                                        {/* Remark  */}
                                        <Label htmlFor='remark'>Remark</Label>
                                        <Input type='text' placeholder='Add Remark here' id='remark'
                                            autoComplete='off'
                                            onChange={(e) => setData({ ...data, remark: e.target.value })}
                                            value={data.remark}
                                            name='remark'
                                        />
                                    </FormGroup>


                                    <FormGroup>
                                        {/* Assigned by  */}
                                        <Label htmlFor='assignedby'>Assigned By</Label>
                                        <Dropdown isOpen={dropDownOpen2} toggle={toggle2} >
                                            <DropdownToggle caret>Assigned By : {data.assignedby}</DropdownToggle>
                                            <DropdownMenu onChange={(e) => setData({ ...data, assignedby: e.target.value })} value={data.assignedby} name="assignedby" id="assignedby">

                                                <DropdownItem name="neena" onClick={(e) => setData({ ...data, assignedby: e.target.innerText })}>Neena</DropdownItem>
                                                <DropdownItem name="bala" onClick={(e) => setData({ ...data, assignedby: e.target.innerText })}>Bala</DropdownItem>
                                                <DropdownItem name="jenefa" onClick={(e) => setData({ ...data, assignedby: e.target.innerText })} >Jenefa</DropdownItem>
                                                <DropdownItem name="malar" onClick={(e) => setData({ ...data, assignedby: e.target.innerText })} > Malar</DropdownItem>

                                            </DropdownMenu>
                                        </Dropdown>
                                    </FormGroup>

                                    <FormGroup>
                                        {/* Assi togned  */}
                                        <Label htmlFor='status'>Assigned To</Label>
                                        <Dropdown isOpen={dropDownOpen3} toggle={toggle3} >
                                            <DropdownToggle caret>Assigned To : {data.assignedto}</DropdownToggle>
                                            <DropdownMenu >

                                                <DropdownItem name="neena" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Neena</DropdownItem>
                                                <DropdownItem name="bala" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Bala</DropdownItem>
                                                <DropdownItem name="malar" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Malar</DropdownItem>
                                                <DropdownItem name="jenefa" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Jenefa</DropdownItem>
                                                <DropdownItem name="rahul" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Rahul</DropdownItem>
                                                <DropdownItem name="sanket" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Sanket</DropdownItem>
                                                <DropdownItem name="suraj" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Suraj</DropdownItem>
                                                <DropdownItem name="rex" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Rex</DropdownItem>
                                                <DropdownItem name="goverdhan" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Govardhan</DropdownItem>
                                                <DropdownItem name="anjushree" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Anjushree</DropdownItem>
                                                <DropdownItem name="vaidehi" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Vaidehi</DropdownItem>
                                                <DropdownItem name="abdul" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Abdul</DropdownItem>
                                                <DropdownItem name="gayatri" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Gayatri</DropdownItem>
                                                <DropdownItem name="swetha" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Swetha</DropdownItem>
                                                <DropdownItem name="tejas" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Tejas</DropdownItem>
                                                <DropdownItem name="rahat" onClick={(e) => setData({ ...data, assignedto: e.target.innerText })} >Rahat</DropdownItem>

                                            </DropdownMenu>
                                        </Dropdown>

                                    </FormGroup>
                                    <Container className='mt-4 text-center'>
                                        <Button color='dark'>Submit</Button>
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

export default Addtask