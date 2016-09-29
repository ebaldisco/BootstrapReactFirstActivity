import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
        Button,
        ButtonGroup,
        Form,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock,
        Checkbox,
        Radio,
        Grid,
        Row,
        Col
        } from 'react-bootstrap';
class App extends Component {
  
  state = {
    name:"",
    color:"",
    movies:[],
    gender:"",
    cname:"",
    asset:[],
    forever:""
  };
  
  onChange = (fieldName)=>{
    return(event)=> {
      var state = this.state;
      state[fieldName] = event.target.value;
      this.setState(state);
    }
  };
  
   checkboxChange = (fieldName)=>{
     return (event)=> {
       var targetArray = this.state[fieldName];
       if(targetArray.indexOf(event.target.value) >=0 )
       targetArray.splice(
         targetArray.indexOf(event.target.value),
         1
       );
       else
       targetArray.push(event.target.value);
       
       var state = this.state;
       state[fieldName]=targetArray;
       this.setState(state);
     }
   }
   
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h2>Student Survey</h2>
        </div>
        <p className="jumbotron">
          <Grid>
            <Row>
              <Col md={6}>
                <Form>
                
                  <FormGroup>
                    <ControlLabel>Your name please . . . .</ControlLabel>
                    <FormControl type ="text" 
                    placeholder = "Enter your name here" 
                    value = {this.state.name} 
                    onChange = {this.onChange('name')}/>
                    <HelpBlock>This is to identify you</HelpBlock>
                  </FormGroup>
                  
                  <FormGroup>
                    <ControlLabel>Choose your favorite color</ControlLabel>
                    <FormControl componentClass ="select" 
                                placeholder = "Choose color here"
                                value = {this.state.color} 
                                onChange = {this.onChange('color')}>
                      <option value ="Red">Red</option>
                      <option value ="Green">Green</option>
                      <option value ="Blue">Blue</option>
                      <option value ="White">White</option>
                      <option value ="Black">Black</option>
                    </FormControl>
                    <HelpBlock>Pick one (ex. White)</HelpBlock>
                  </FormGroup>
                  
                  <FormGroup>
                    <ControlLabel>Favorite Movies</ControlLabel>
                      <Checkbox 
                      value ="Harry Potter " 
                      checked = {this.state.movies.indexOf('Harry Potter ')>=0 ? true:false} 
                      onChange = {this.checkboxChange('movies')}>Harry Potter Series
                      </Checkbox>
                      
                      <Checkbox 
                      value ="Game of Thrones " 
                      checked = {this.state.movies.indexOf('Game of Thrones ')>=0 ? true:false} 
                      onChange = {this.checkboxChange('movies')}>Game Of Thrones
                      </Checkbox>
                      
                      <Checkbox 
                      value ="Twilight Series " 
                      checked = {this.state.movies.indexOf('Twilight Series ')>=0 ? true:false} 
                      onChange = {this.checkboxChange('movies')}>Twilight Series
                      </Checkbox>
                  </FormGroup>
                  
                  <FormGroup>
                    <ControlLabel>Gender</ControlLabel>
                      <Radio name ="gender"
                             value ="male"
                             onChange = {this.onChange('gender')}>Male
                      </Radio>
                      <Radio name ="gender"
                             value ="female"
                             onChange = {this.onChange('gender')}>Female
                      </Radio> 
                  </FormGroup>

{/*==========================================ACTIVITY===============================================*/}
                  
                  <FormGroup>
                    <ControlLabel>Your crush name.....</ControlLabel>
                    <FormControl type ="text" 
                    placeholder = "Enter your crush name here" 
                    value = {this.state.cname} 
                    onChange = {this.onChange('cname')}/>
                    <HelpBlock>This is just a game</HelpBlock>
                  </FormGroup>
                  
                  <FormGroup>
                    <ControlLabel>I love her/his:</ControlLabel>
                      <Checkbox 
                      value ="Face " 
                      checked = {this.state.asset.indexOf('Face ')>=0 ? true:false} 
                      onChange = {this.checkboxChange('asset')}>Face
                      </Checkbox>
                      
                      <Checkbox 
                      value ="Body " 
                      checked = {this.state.asset.indexOf('Body ')>=0 ? true:false} 
                      onChange = {this.checkboxChange('asset')}>Body
                      </Checkbox>
                      
                       <Checkbox 
                      value ="Attitude " 
                      checked = {this.state.asset.indexOf('Attitude ')>=0 ? true:false} 
                      onChange = {this.checkboxChange('asset')}>Attitude
                      </Checkbox>
                      
                      <Checkbox 
                      value ="Wealth " 
                      checked = {this.state.asset.indexOf('Wealth ')>=0 ? true:false} 
                      onChange = {this.checkboxChange('asset')}>Wealth
                      </Checkbox>
                  </FormGroup>
                  
                  <FormGroup>
                    <ControlLabel>Do you believe in forever?</ControlLabel>
                      <Radio name ="forever"
                             value ="Yes"
                             onChange = {this.onChange('forever')}>Yes
                      </Radio>
                      <Radio name ="forever"
                             value ="No"
                             onChange = {this.onChange('forever')}>No
                      </Radio>
                      <Radio name ="forever"
                             value ="Maybe"
                             onChange = {this.onChange('forever')}>Maybe
                      </Radio> 
                  </FormGroup>
                  
                </Form>
              </Col>
              <Col md={6}>
              Hello <strong>{this.state.name}!</strong><br/><br/>
              Your favorite color is <strong>{this.state.color}</strong><br/><br/>
              Your favorite movies is/are <strong>{
                this.state.movies.map((item,i)=>{
                  return <div>
                            <span className="label label-primary">{item}</span>
                         </div>
                })
              }</strong><br/><br/>
              Your gender is <strong>{this.state.gender}</strong><br/><br/>
              
{/*==========================================ACTIVITY===============================================*/}
              
              Hi <strong>{this.state.cname}!</strong>, <strong>{this.state.name}!</strong> has a crush on you.<br/><br/>
              He/She loves you because of your <strong>{
                this.state.asset.map((item,i)=>{
                  return <div>
                            <span className="label label-success">{item}</span>
                         </div>
                })
              }</strong><br/><br/>
              Do you believe in forever? <strong>{this.state.forever}</strong>
              
              </Col>
            </Row>
          </Grid>
        
        </p>
      </div>
    );
  }
}
export default App;