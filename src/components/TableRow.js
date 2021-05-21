const TableRow = ({info}) => {
    return(
        <tr key={info.login.uuid}>
            <td><img src={info.picture.medium} alt="emp-pic"/></td>
            <td>{`${info.name.first} ${info.name.last}`}</td>
            <td>{info.phone}</td>
            <td>{info.email}</td>
            <td>{info.dob.date}</td>
        </tr>
    )
}

export default TableRow; 