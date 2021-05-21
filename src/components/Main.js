import {useEffect, useState} from "react";
import axios from "axios";
import TableRow from "./TableRow"

const Main = () => {

    const [employees, setEmployees] = useState(null);
    const [filteredEmployees, setFilteredEmployees] = useState(null);
    const [order,setOrder] = useState("a");

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=100&nat=us").then((data) => {
            setEmployees(data.data.results);
            setFilteredEmployees(data.data.results);
        });
    },[]);

    const handleInput = (event) => {
        const userInput = event.target.value.toLowerCase();
        const filtered = employees.filter((employee) => employee.name.first.toLowerCase().indexOf(userInput) > -1);
        setFilteredEmployees(filtered);
    }

    const renderTableRows = () => {
        let result = null;

        if (filteredEmployees) {
            result = filteredEmployees.map((employee) => {
                return <TableRow info={employee}/>
            });
        }

        return result;
    }

    const handleSort = () => {
        let sortedList = null;
        if (order === "d") {
            sortedList = filteredEmployees.sort((a,b) => (a.name.first.toLowerCase() > b.name.first.toLowerCase() ? -1 : 1));
            setFilteredEmployees(sortedList);
            setOrder("a");
        } else {
            sortedList = filteredEmployees.sort((a,b) => (a.name.first.toLowerCase() > b.name.first.toLowerCase() ? 1 : -1));
            setFilteredEmployees(sortedList);
            setOrder("d");
        }
    }

    return (
        <>
            <input placeholder="Search" onChange={handleInput}/>
            <table>
                <tbody>
                    <tr>
                        <th>Picture</th>
                        <th onClick={handleSort}>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>DOB</th>
                    </tr>
                    {renderTableRows()}
                </tbody>
            </table>
        </>
    )

}

export default Main; 
