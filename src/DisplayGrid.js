import React from 'react'
import Table from 'react-bootstrap/Table';
import './App.css';


export default class DisplayGrid extends React.Component{

    state={
        healthData: [],
        source: '',
        description: '',
        places: []
    }

    componentDidMount(){
        fetch('https://data.cdc.gov/api/views/bi63-dtpu/rows.json?accessType=DOWNLOAD')
        .then (resp=>resp.json())
        .then(data=> this.setState({
            healthData: data.data.slice(0,52),
            source: data.meta.view.name,
            description: data.meta.view.description
        }))
        
    }

    renderStates(){
        return(
            this.state.healthData.map(s=>{
                return(
                    <tr key={s[0]}>
                        <td>{s[11]}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                )
            }

        )
            
        )
        
    }

    render(){

        // console.log(this.state.healthData[i][11])

        
        return(
            <div style={{textAlign: "center", paddingTop: 50}}>
                
                <h3 style={{color: "#191970", fontWeight: "600"}}>{this.state.source}</h3>
                <p style={{marginTop: 40, marginLeft: 80, marginRight:80, }}>{this.state.description}</p>
                <div style={{marginTop: 40, marginRight: 40, marginLeft:40}}>
                <Table striped bordered hover className="table">
                    <thead>
                        <tr>
                            <th>States</th>
                            <th>Unintentional injuries</th>
                            <th>All Causes</th>
                            <th>Alzheimer's disease</th>
                            <th>Stroke</th>
                            <th>Chronic lower respiratory diseases(CLRD)</th>
                            <th>Diabetes</th>
                            <th>Heart disease</th>
                            <th>Influenza and pneumonia</th>
                            <th>Suicide</th>
                            <th>Cancer</th>
                            <th>Kidney disease</th>
                            <th>Unintentional injuries</th>
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