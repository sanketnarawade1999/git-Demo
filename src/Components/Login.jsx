import React from 'react'
import { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useNavigate()

  const validate = () => {
    let result = true;
    if (email === '' || email === null) {
      result = false
      toast.warning("Please Fill the Username !!");
    }
    if (password === '' || password === null) {
      result = false
      toast.warning("Please Fill the Password !!");
    }
    return result
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // call the api 
    if (validate()) {

      try {

        const response = await axios.post("http://localhost:5000/post", {
          email, password
        })

        if (response.status === 200) {
          //Login Successful
          toast.success("You have been logged in successfully!")
          history("/user/employee/showtask")
        }
        else {
          // Login failed
          toast.error("Invalid username or password !")
        }

      } catch (error) {
        // Something went wrong with the Axios request
        toast.error("An error occurred while logging in !")
      }


    }


  }


  return (
    <>
      <Container>
        <Row className='mt-4'>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color='dark' outline>
              <CardHeader><h2 className='text-center'>Login here!!</h2></CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>

                  {/* Email */}
                  <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input type='email' id='email' autoComplete='off' name='email' placeholder='Enter Your Email '
                      onChange={(e) => setEmail(e.target.value)} value={email} />
                  </FormGroup>
                  {/* Password */}
                  <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input type='password' id='password' autoComplete='off' name='password' placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                  </FormGroup>
                  <Container className='text-center'>
                    <Button color='dark'>Login</Button>
                    {/* <Button color='secondary' className='ms-3' type='reset'  >Reset</Button>  */}
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

export default Login