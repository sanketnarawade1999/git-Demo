import { signUp } from "../services/user-service"
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

const Signup = () => {

  const [data, setData] = useState({
    name: "", email: "", password: "",
  })
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (data.name.trim() === "") {
      toast.warning("Please Fill the Username !!");
      return;
    }
    if (data.email.trim() === "") {
      toast.warning("Please Fill the Email !!");
      return;
    }
    if (data.password.trim() === "") {
      toast.warning("Please Fill the Password !!");
      return;
    }

    // calling Api Here
    try {
      await signUp(data)
      // console.log(result) const result =;
      swal("Good", " Sign up Successfully !!", "success");
      setData({ name: "", email: "", password: "", })
    }
    catch (error) {
      console.log(error);
      swal("Error", " Something Went Wrong !!", "error");
      // toast.error("Sign Up Error !!" + error.response.data.message)
    }

    history("/login")
  }
  const resetData = () => {
    setData({
      name: "", email: "", password: ""
    })
  }
  return (
    <>

      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" outline>
              {/*  This is Card Header */}
              <CardHeader>
                <h2 className="text-center"> Registration!!</h2>
              </CardHeader>
              {/* Card body  */}
              <CardBody>
                {/* creating form */}
                <Form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter Your name "
                      id="name"
                      autoComplete="off"
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      name="name"
                      value={data.name}
                    />
                  </FormGroup>
                  {/* Email Field */}
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter Your Email "
                      id="email"
                      autoComplete="off"
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      value={data.email}
                      name="email"
                    />
                  </FormGroup>
                  {/* password Field */}
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter Your Password "
                      id="password"
                      autoComplete="off"
                      onChange={(e) => setData({ ...data, password: e.target.value })}
                      value={data.password}
                      name="password"
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="dark">Register</Button>
                    <Button onClick={resetData} color="secondary" type="reset" className="ms-4">
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
