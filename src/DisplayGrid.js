import React from 'react'
import Table from 'react-bootstrap/Table';
import { ButtonToolbar, DropdownButton, Dropdown, Form } from 'react-bootstrap';

import './App.css';

const url = "https://nchs-project-backend.herokuapp.com/statistics"


export default class DisplayGrid extends React.Component{

    state={
        healthData: [],
        year: "2017",
        searchTerm: "",
        states: [],
        filteredStates:[]
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
        .then(data=>{
            const states = Array.from(new Set(data.map(s=> s.state))).sort((a,b)=>{
                if (a === "United States" || b === "United States"){
                    return 1
                }
                return a>b? 1:-1
            })
            this.setState({
            healthData: data,
            states: [...states],
            filteredStates: [...states]
            })
        }) 

    }

    componentDidMount(){
        this.getYearStats(this.state.year)  
    }



    changeYear(year){
        this.setState({
            searchTerm: "",
            year
        },()=>this.getYearStats(this.state.year))
    }

    searchTermChange(e){
        this.setState({
            searchTerm: e.target.value
        },()=>this.updateStates())
    }

    updateStates(){
        this.setState({
            filteredStates: this.state.states.filter(name=>name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        })
    }


    renderRows(){
        return(
            this.state.filteredStates.map(s=>{
                return(
                    <tr key={s}>
                        <td style={{fontWeight:'700', color: "#013C71"}}>{s}</td>
                        
                        {this.state.healthData.filter(obj=> obj.state === s).map(stat=>{
                            return(
                                <td key={ stat.id }>{ stat.count }</td>
                            )
                        })}
                        
                    </tr>
                )
            })      
        ) 
    }
    
    
    

    render(){

        console.log(this.state.years)


        return(
            <div style={{textAlign: "center", paddingTop: 50}}>
                
                <h3 style={{color: "#013C71", fontWeight: "600"}}>NCHS - Leading Causes of Death: United States</h3>
                <div style={{marginTop: 45, marginRight: 55, marginLeft:55, marginBottom:37.5}}>

                <div className="searchTools">
                    <Form.Control placeholder="Search by state" style={{width: "57%",borderRadius: 40, borderColor: "#013C71", fontSize: 19, }} onChange={(e)=>this.searchTermChange(e)} />
                
                    <ButtonToolbar>
                        <DropdownButton
                            drop="down"
                            title={`${this.state.year}`}
                            id="dropdown-button-drop-down"
                            key="down"
                            onSelect= {(e)=>this.changeYear(e)}
                        >
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
                </div>

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
                        {this.renderRows()}
                    </tbody>
                </Table>
                </div>
            </div>
        )
    }
}