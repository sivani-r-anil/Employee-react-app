import React from 'react'
import NavigationBar from './NavigationBar'

const ViewEmployee = () => {
    return (
        <div>
            <NavigationBar />
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>1234</td>
                        <td>9788002134</td>
                        <td>Manager</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Rosalia</td>
                        <td>1264</td>
                        <td>9788007334</td>
                        <td>Marketing</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Arjun</td>
                        <td>9234</td>
                        <td>6898002134</td>
                        <td>Engineer</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Angelina</td>
                        <td>5684</td>
                        <td>8900021348</td>
                        <td>Manager</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Kevin</td>
                        <td>2804</td>
                        <td>8606002134</td>
                        <td>CEO</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Hana</td>
                        <td>7834</td>
                        <td>7898002134</td>
                        <td>Developer</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Manu</td>
                        <td>1235</td>
                        <td>7890002134</td>
                        <td>Tester</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Lisa</td>
                        <td>6834</td>
                        <td>7556002134</td>
                        <td>Developer</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>Jiya</td>
                        <td>1834</td>
                        <td>9788002124</td>
                        <td>Tester</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>Miya</td>
                        <td>2234</td>
                        <td>8900800213</td>
                        <td>Manager</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default ViewEmployee