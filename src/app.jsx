import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import { Container,
    Row,
    Col,
    Form
  
} from 'react-bootstrap';

import NumberFormat from 'react-number-format';



export default class APP extends Component{
 
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            isAuth:false,
            loading:false,
        }


    }

    
    
    
    

   
  
 render(){
    return(
        <div className="content">
            <Animated animationIn="fadeIn"  animationOut="fadeOut" isVisible={true}>
                <Container fluid style={{
                    backgroundColor:'#9595a0',
                    height:window.innerHeight,
                    width:window.innerWidth
                }}>
                    <Row style={{backgroundColor:'#fff'}}>
                        <Col xs={6}>
                            <div class="form-group basic-textarea">
                                {/* <textarea class="form-control py-3" 
                                // onKeyUp={this.handleInputChat.bind(this)}
                                style={{
                                    backgroundColor:'fff',
                                    resize:'none',
                                }}
                                >
                                </textarea> */}
                                <NumberFormat 
                                        disabled={false}
                                        // value={(this.state.pago!=="")? this.state.pago  :''}
                                        allowNegative={false}
                                        thousandSeparator={"."} 
                                        decimalSeparator="," 
                                        prefix={' '}
                                        decimalScale={2} 
                                        fixedDecimalScale={false}
                                        className="form-control py-5"
                                        
                                />
                                <Form.Control
                                    disabled={true} 
                                    // onChange={(e)=>{ 
                                    // this.setState({newTarifaNocturna:e.target.value}) }} 
                                    type="number"
                                />

                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center bg-primary">
                        <Col xs={3} className="d-flex justify-content-center">
                            <a className="text-decoration-none text-white">7</a>
                        </Col>
                        <Col xs={3} className="d-flex justify-content-center"><a>8</a></Col>
                        <Col xs={3} className="d-flex justify-content-center"><a>9</a></Col>
                        <Col xs={3} className="d-flex justify-content-center py-1">
                            <a>
                                <i class="fas fa-3x fa-backspace"></i>
                            </a>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center bg-primary">
                        <Col xs={3} className="d-flex justify-content-center"><a>6</a></Col>
                        <Col xs={3} className="d-flex justify-content-center"><a>5</a></Col>
                        <Col xs={3} className="d-flex justify-content-center"><a>4</a></Col>
                        <Col xs={3} className="d-flex justify-content-center py-1">
                            <a>
                                <i class="fas fa-3x fa-divide"></i>
                            </a>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center bg-primary">
                        <Col xs={3} className="d-flex justify-content-center"><a>3</a></Col>
                        <Col xs={3} className="d-flex justify-content-center"><a>2</a></Col>
                        <Col xs={3} className="d-flex justify-content-center"><a>1</a></Col>
                        <Col xs={3} className="d-flex justify-content-center py-1">
                            <a>
                                <i class="fas fa-3x fa-times"></i>
                            </a>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center bg-primary">
                        <Col xs={3} className="d-flex justify-content-center"><a>0</a></Col>
                        <Col xs={3} className="d-flex justify-content-center"><a>,</a></Col>
                        <Col xs={3} className="d-flex justify-content-center">
                            <a><i class="fas fa-3x fa-equals"  style={{color:'#fff'}} ></i></a>
                        </Col>
                        <Col xs={3} className="d-flex justify-content-center py-1">
                            <a>
                                <i class="fas fa-3x fa-minus"></i><br/>
                                <i class="fas fa-3x fa-plus"></i>
                            </a>
                        </Col>
                    </Row>

                </Container>
            </Animated>
        </div>
    )
 }

} 
