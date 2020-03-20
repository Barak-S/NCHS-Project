import React from 'react'
import './App.css';

export default function About(){
    return(
        <div className="about">
            <h3 style={{color: "#013C71", fontWeight: "600", paddingTop: 50}}>NCHS - Leading Causes of Death: United States</h3>
            <div style={{margin: "5%", fontSize: 19}}>
                <p style={{color: '#013C71'}}>This dataset presents the age-adjusted death rates for the 10 leading causes of death in the United States beginning in 1999. Data are based on information from all resident death certificates filed in the 50 states and the District of Columbia using demographic and medical characteristics. Age-adjusted death rates (per 100,000 population) are based on the 2000 U.S. standard population. Populations used for computing death rates after 2010 are postcensal estimates based on the 2010 census, estimated as of July 1, 2010. Rates for census years are based on populations enumerated in the corresponding censuses. Rates for non-census years before 2010 are revised using updated intercensal population estimates and may differ from rates previously published. Causes of death classified by the International Classification of Diseases, Tenth Revision (ICD–10) are ranked according to the number of deaths assigned to rankable causes. Cause of death statistics are based on the underlying cause of death. SOURCES CDC/NCHS, National Vital Statistics System, mortality data (see <a href="http://www.cdc.gov/nchs/deaths.htm">http://www.cdc.gov/nchs/deaths.htm</a>); and CDC WONDER (see <a href="http://wonder.cdc.gov">http://wonder.cdc.gov</a>).</p>
                <p style={{color: '#013C71', marginTop:19, marginBottom: 55}}>This public data can be downloaded at: <a href="https://catalog.data.gov/dataset/age-adjusted-death-rates-for-the-top-10-leading-causes-of-death-united-states-2013">https://catalog.data.gov/dataset/age-adjusted-death-rates-for-the-top-10-leading-causes-of-death-united-states-2013</a></p>
                <h6 style={{color: '#013C71'}}>This app was created using ReactJS for the frontend, and Ruby on Rails for the backend.</h6>
            
            </div>
        </div>
    )
}