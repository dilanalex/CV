import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';

const UserList = () => {

    const [cvs, setCVs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);

      fetch('/users')
        .then(response => response.json())
        .then(data => {
          setCVs(data);
          setLoading(false);
        })
    }, []);

  const remove = async (id) => {
    await fetch(`/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedUsers = [...cvs].filter(i => i.id !== id);
      setCVs(updatedUsers);
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const cvList = cvs.map(cv => {
    const address = `${cv.address || ''} ${cv.city || ''} ${cv.name || ''}`;
    return <tr key={cv.id}>
      <td style={{whiteSpace: 'nowrap'}}>{cv.name}</td>
      <td>{address}</td>

      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/edit/" + cv.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => remove(cv.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });

  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/groups/new">Add User</Button>
        </div>
        <h3>My CVs</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">Name</th>
            <th width="20%">Location</th>
            <th>Events</th>
            <th width="10%">Test</th>
          </tr>
          </thead>
          <tbody>
          {cvList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserList;