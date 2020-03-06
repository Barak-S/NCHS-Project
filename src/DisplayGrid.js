import React from 'react'
import Table from 'react-bootstrap/Table';
import { ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';

import './App.css';

const url = "http://3d1376b7.ngrok.io/statistics"


export default class DisplayGrid extends React.Component{

    state={
        healthData: [],
        source: '',
        description: '',
        places: [],
        year: "2017"
    }

    getYearStats(year){
        fetch(url,{
           method: "POST",
           headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
           },
           body: JSON.stringify({ year: year}) 
        }).then (resp=>resp.json())
        .then(data=> this.setState({
            healthData: data,
        })) 

    }

    componentDidMount(){
        this.getYearStats(this.state.year)
        // this.changeYear(this.state.year)
    }


    changeYear(year){
        this.setState({
            year
        },()=>this.getYearStats(this.state.year))
    }

    renderStates(){
        return(
            this.state.healthData.map(s=>{
                return(
                    <tr key={s.id}>
                        <td>{s.state}</td>
                        <td>{s.count}</td>
                        
                    </tr>
                )}
            )     
        ) 
    }

    

    render(){

        // console.log(this.state.healthData)

        return(
            <div style={{textAlign: "center", paddingTop: 50}}>
                
                <h3 style={{color: "#013C71", fontWeight: "600"}}>NCHS - Leading Causes of Death: United States</h3>
                <div style={{marginTop: 50, marginRight: 55, marginLeft:55, marginBottom:100}}>

                <ButtonToolbar>
                    <DropdownButton
                        drop="down"
                        title={`${this.state.year}`}
                        id="dropdown-button-drop-down"
                        key="down"
                        onSelect= {(e)=>this.changeYear(e)}
                    >
                        <Dropdown.Item eventKey="1999" style={{color: "#013C71"}}>1999</Dropdown.Item>
                        <Dropdown.Item eventKey="2000" style={{color: "#013C71"}}>2000</Dropdown.Item>
                        <Dropdown.Item eventKey="2001" style={{color: "#013C71"}}>2001</Dropdown.Item>
                        <Dropdown.Item eventKey="2002" style={{color: "#013C71"}}>2002</Dropdown.Item>
                        <Dropdown.Item eventKey="2003" style={{color: "#013C71"}}>2003</Dropdown.Item>
                        <Dropdown.Item eventKey="2004" style={{color: "#013C71"}}>2004</Dropdown.Item>
                        <Dropdown.Item eventKey="2005" style={{color: "#013C71"}}>2005</Dropdown.Item>
                        <Dropdown.Item eventKey="2006" style={{color: "#013C71"}}>2006</Dropdown.Item>
                        <Dropdown.Item eventKey="2007" style={{color: "#013C71"}}>2007</Dropdown.Item>
                        <Dropdown.Item eventKey="2008" style={{color: "#013C71"}}>2008</Dropdown.Item>
                        <Dropdown.Item eventKey="2009" style={{color: "#013C71"}}>2009</Dropdown.Item>
                        <Dropdown.Item eventKey="2010" style={{color: "#013C71"}}>2010</Dropdown.Item>
                        <Dropdown.Item eventKey="2011" style={{color: "#013C71"}}>2011</Dropdown.Item>
                        <Dropdown.Item eventKey="2012" style={{color: "#013C71"}}>2012</Dropdown.Item>
                        <Dropdown.Item eventKey="2013" style={{color: "#013C71"}}>2013</Dropdown.Item>
                        <Dropdown.Item eventKey="2014" style={{color: "#013C71"}}>2014</Dropdown.Item>
                        <Dropdown.Item eventKey="2015" style={{color: "#013C71"}}>2015</Dropdown.Item>
                        <Dropdown.Item eventKey="2016" style={{color: "#013C71"}}>2016</Dropdown.Item>
                        <Dropdown.Item eventKey="2017" style={{color: "#013C71"}}>2017</Dropdown.Item>
                        
                    </DropdownButton>  
                </ButtonToolbar>

                <Table striped bordered hover className="table" >
                    <thead>
                        <tr>
                            <th style={{color: "#013C71"}}>States</th>
                            <th style={{color: "#013C71"}}>Unintentional injuries</th>
                            <th style={{color: "#013C71"}}>All Causes</th>
                            <th style={{color: "#013C71"}}>Alzheimer's disease</th>
                            <th style={{color: "#013C71"}}>Stroke</th>
                            <th style={{color: "#013C71"}}>Chronic lower respiratory diseases(CLRD)</th>
                            <th style={{color: "#013C71"}}>Diabetes</th>
                            <th style={{color: "#013C71"}}>Heart disease</th>
                            <th style={{color: "#013C71"}}>Influenza and pneumonia</th>
                            <th style={{color: "#013C71"}}>Suicide</th>
                            <th style={{color: "#013C71"}}>Cancer</th>
                            <th style={{color: "#013C71"}}>Kidney disease</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderStates()}
                    </tbody>
                        
                </Table>
                </div>
            </div>
        )
    }
}