import React, {Component} from 'react';
import './ContactUs.css';

export class ContactUs extends Component {
    render(){
        return(
            <div className="container">
                <div className="pageContent">
                    <div className="groupText">
                        <h2><b>Thirupathi Kodimyala</b></h2>
                        <h5><u>Founder and CEO</u></h5>
                        <p>Thirupathikodimyala@gmail.com</p>
                        <p>admin1@gmail.com</p>
                        <p>India:+91-9876543210</p>
                    </div>
                    <div>
                        <h5><u>For customer complaints and quries contact us at:</u></h5>
                        <h5><u>Corporate Office:</u></h5>
                    </div>
                    <div className="groupText">
                        <p>SVR Engineering Group Pvt. Ltd. (Sri Venkata Ramana Engineering Works)</p>
                        <p>GST No: XXXXXXX</p>
                        <p>Opposite to LIC Office</p>
                        <p>Main road Metpally.</p>
                        <p>Metpally (V&M), Jagtial (D), Telangana (State).</p>
                        <p>Pin code: 505-325</p>
                        <p>Corporate phone: XXXXXXXXXXXX</p>
                        <p>Corporate phone: XXXXXXXXXXXX@toolsguru.com</p>
                    </div>
                    <div >
                        <h5><u>Business hours:</u></h5>
                        <p>Monday to Friday    8:00 AM to 8:00 PM</p>
                        <p>Saturday            9:00 AM to 1:00 PM</p>
                        <p>Sunday              Closed</p>
                    </div>
                </div>
            </div>
        )
    }
}