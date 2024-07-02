import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import "./table.scss";

const tableData = [
  {
    id: "1",
    UserID: "1",
    name: "Rohit",
    email: "rohit@gmail.com",
    Phone: "99999999990",
    Designation: "developer",
    Status: "Active",
  },
  {
    id: "2",
    UserID: "2",
    name: "Rahul",
    email: "rahul@gmail.com",
    Phone: "99999999990",
    Designation: "developer",
    Status: "Active",
  },
  {
    id: "3",
    UserID: "3",
    name: "Rohan",
    email: "rohan@gmail.com",
    Phone: "99999999990",
    Designation: "developer",
    Status: "Active",
  },
  {
    id: "4",
    UserID: "4",
    name: "Rohit",
    email: "rohit@gmail.com",
    Phone: "99999999990",
    Designation: "developer",
    Status: "Active",
  },
  {
    id: "5",
    UserID: "5",
    name: "Rahul",
    email: "rahul@gmail.com",
    Phone: "99999999990",
    Designation: "developer",
    Status: "Active",
  },
  {
    id: "6",
    UserID: "6",
    name: "Rohan",
    email: "rohan@gmail.com",
    Phone: "99999999990",
    Designation: "developer",
    Status: "Active",
  },
];

const Tables = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = tableData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.Phone.toLowerCase().includes(search.toLowerCase()) ||
    item.Designation.toLowerCase().includes(search.toLowerCase()) ||
    item.Status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Row>
        <Container>
          <Row>
            <Col sm={3} style={{ marginTop: "20px" }}>
              <Form.Control
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
                style={{ marginBottom: "20px" }}
              />
              </Col>
               <Col sm={12}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>User name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Designation</th>
                    <th>Access Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map(item => (
                    <tr key={item.id}>
                      <td>{item.UserID}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.Phone}</td>
                      <td>{item.Designation}</td>
                      <td>{item.Status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Row>
    </div>
  );
};

export default Tables;
