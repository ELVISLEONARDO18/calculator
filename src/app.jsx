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
            number:"",
            defaultValue:""

        }


    }

    
    
handleExpresionNumeric(numero){
      
    var {number, defaultValue} = this.state
    number = number+numero;
    defaultValue = parseFloat(number).toFixed(2)
    this.setState({number, defaultValue})

}

deleteNumber(){
    var {number} = this.state
    var borrar = number.split(number[number.length-1])
    this.setState({number:borrar[0]})
}
    

   
  
 render(){
    return(
        <div className="content">
            <Animated animationIn="fadeIn"  animationOut="fadeOut" isVisible={true}>
                <Container fluid style={{
                    backgroundColor:'#fff',
                    height:window.innerHeight,
                    width:window.innerWidth
                }}>
                    <Row style={{backgroundColor:'#201f25ad', flexDirection:"row-reverse"}}>
                        <Col xs={6}>
                            <div class="form-group basic-textarea mt-3">
                                <NumberFormat 
                                        disabled={false}
                                        value={(this.state.number!=="")? this.state.number  :''}
                                        allowNegative={false}
                                        thousandSeparator={"."} 
                                        decimalSeparator="," 
                                        prefix={' '}
                                        decimalScale={2} 
                                        fixedDecimalScale={false}
                                        className="form-control py-5"
                                        onChange={(e)=>{  
                                            console.log(typeof e.target.value);
                                            console.log(e.target.value);
                                            this.setState({number:e.target.value})
                                        }}
                                        
                                />
                                 <Form.Control
                                    disabled={true} 
                                    // value={this.state.defaultValue}
                                    // onChange={(e)=>{ 
                                    // this.setState({newTarifaNocturna:e.target.value}) }} 
                                    type="text"
                                /> 

                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center p-5" style={{backgroundColor:'#3b3d40'}}>
                        <Col xs={3} className="mt-2 h3">
                            <Row className="d-flex justify-content-center pb-5 number"
                            onClick={(e)=>{ this.handleExpresionNumeric("7")  }}>7</Row>
                            <Row className="d-flex justify-content-center pb-5 number"
                            onClick={(e)=>{ this.handleExpresionNumeric("4")  }}>4</Row>
                            <Row className="d-flex justify-content-center pb-5 number"
                            onClick={(e)=>{ this.handleExpresionNumeric("1")  }}>1</Row>
                            <Row className="d-flex justify-content-center pb-5 number"
                            onClick={(e)=>{ this.handleExpresionNumeric("0")  }}>0</Row>
                        </Col>
                        <Col xs={3} className="mt-2 h3">
                            <Row className="d-flex justify-content-center pb-5 number"
                            onClick={(e)=>{ this.handleExpresionNumeric("8")  }}>8</Row>
                            <Row className="d-flex justify-content-center pb-5 number"
                            onClick={(e)=>{ this.handleExpresionNumeric("5")  }}>5</Row>
                            <Row className="d-flex justify-content-center pb-5 number"
                            onClick={(e)=>{ this.handleExpresionNumeric("2")  }}>2</Row>
                            <Row className="d-flex justify-content-center pb-5 fas"
                            onClick={(e)=>{ this.handleExpresionNumeric(",")  }}>,</Row>
                        </Col>
                        <Col xs={3} className="mt-2 h3">
                            <Row className="d-flex justify-content-center pb-5 number"
                            onClick={(e)=>{ this.handleExpresionNumeric("9")  }}>9</Row>
                            <Row className="d-flex justify-content-center pb-5 number"
                            onClick={(e)=>{ this.handleExpresionNumeric("6")  }}>6</Row>
                            <Row className="d-flex justify-content-center pb-5 number"
                            onClick={(e)=>{ this.handleExpresionNumeric("3")  }}>3</Row>
                            <Row className="d-flex justify-content-center pb-5">
                                <i class="fas fa-2x fa-equals"></i>
                            </Row>
                        </Col>
                        <Col xs={3}>
                            <Row className="d-flex justify-content-center pb-3">
                                <i class="fas fa-3x fa-backspace"
                                onClick={(e)=>{ this.deleteNumber() }}></i>
                            </Row>
                            <Row className="d-flex justify-content-center pb-3">
                                <i class="fas fa-3x fa-divide"></i>
                            </Row>
                            <Row className="d-flex justify-content-center pb-3">
                                <i class="fas fa-3x fa-times"></i>
                            </Row>
                            <Row className="d-flex justify-content-center pb-3">
                                <i class="fas fa-3x fa-minus"></i>
                            </Row>
                            <Row className="d-flex justify-content-center pb-3">
                                <i class="fas fa-3x fa-plus"></i>
                            </Row>
                        </Col>
                        
                    </Row>

                </Container>
            </Animated>
        </div>
    )
 }

} 
