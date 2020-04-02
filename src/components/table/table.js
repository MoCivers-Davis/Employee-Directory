import React from "react";
import "../table/table.css";


function table(props) {
    return (
        <div className="card mt-4">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="image"><img alt={props.name} src={props.image} /></td>
                        <td>{props.name}</td>
                        <td>{props.phone}</td>
                        <td>{props.email}</td>
                        <td>{props.dob}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default table;