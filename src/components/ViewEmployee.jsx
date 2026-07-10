import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewEmployee = () => {

const [data,changeData] =useState(
    [
        {"no":1,"name":"Rahul","ecode":1234,"phone":9744567890,"desg":"Manager"},
        {"no":2,"name":"Alisa","ecode":6789,"phone":7558567890,"desg":"Tester"},
        {"no":3,"name":"ALinda","ecode":3456,"phone":9834567890,"desg":"Developer"},
        {"no":4,"name":"Lisa","ecode":8901,"phone":9874567890,"desg":"Data Analyst"},
        {"no":5,"name":"Kevin","ecode":4567,"phone":7234567890,"desg":"HR Manager"},
    ]
)

    return (
        <div>
            <NavigationBar />
            <h2 style={{ color: "red", textAlign: "center", fontFamily: "cursive" }}>
                            EMPLOYEE DETAILS
                        </h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Sl.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Employee Code</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Desigantion</th>
                    </tr>
                </thead>
                <tbody>
                   
                   {data.map(

                    (data,index) =>{
                        return(
                        <tr>
                        <th scope="row">{data.no}</th>
                        <td>{data.name}</td>
                        <td>{data.ecode}</td>
                        <td>{data.phone}</td>
                        <td>{data.desg}</td>
                    </tr>
                        )
                    }

                   )}
                    
                </tbody>
            </table>

        </div>
    )
}

export default ViewEmployee