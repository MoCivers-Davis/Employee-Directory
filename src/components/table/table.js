import React from "react";
import "../table/table.css";

const employees = [

    {
        "id": "1",
        "name": "Andrew smith",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "215-219-1477",
        "email": "mocivers@comcast.net",
        "dob": "11/09/1985"
    },
    {
        "id": "2",
        "name": "Adam David",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "610-764-0391",
        "email": "mania@gmail.com",
        "dob": "08/17/1973"
    },
    {
        "id": "3",
        "name": "Ken Edwardds",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-884-7539",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": "4",
        "name": "Sarah Jacobs",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-882-8851",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 5,
        "name": "Pam Spring",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-821-8549",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 6,
        "name": "Jack Jennings",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-884-7539",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 7,
        "name": "Kelly Roma",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-884-7539",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 8,
        "name": "Yolanda Tanner",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-884-7539",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 9,
        "name": "Tiger Johns",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-884-7539",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    },
    {
        "id": 10,
        "name": "Tim Dallas",
        "image":
            "http://www.gravatar.com/avatar/?d=mm",
        "phone": "706-884-7539",
        "email": "niceguy@gmail.com",
        "dob": "02/08/1945"
    }

];
class table extends React.Component {
    state = {
        employees: employees
    }
    sortByName = () => {
        let sortedEmployees = this.state.employees.sort((a, b) => {
            if (b.name > a.name) {
                return -1;
            }

            if (a.name > b.name) {
                return 1;
            }

            return 0;
        });
        console.log(sortedEmployees);
        this.setState({ employees: sortedEmployees });
    }
    search = () => { //Filtering the Employees Array
        console.log(this.state.employees)
        const employeeArray = this.state.employees
        const result = employeeArray.filter(employee => {
            let employeeName = employee.name
            console.log(employeeName)
        });
        console.log(result)
    }

    render() {
        return (

            <div className="card mt-4">
                {this.search()}
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name <button onClick={this.sortByName}>Sort</button></th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(person => (
                            <tr key={person.id}>
                                <td className="image"><img alt={person.name} src={person.image} /></td>
                                <td>{person.name}</td>
                                <td>{person.phone}</td>
                                <td>{person.email}</td>
                                <td>{person.dob}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default table;