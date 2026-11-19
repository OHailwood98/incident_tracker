import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";

import { MakeAdmin } from "../../redux/actions/usersActions";

function UsersTable() {
  const dispatch = useDispatch();
  let users = useSelector((state) => state.users);

  users = FixList(users);

  function toggleAdmin(id, role) {
    dispatch(MakeAdmin(id, role));
  }

  let tableData = users.map((user) => {
    var role = "";
    return (
      <React.Fragment key={user._id}>
        <tr>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            <Form.Select
              aria-label="Default select example"
              value={role || user.role}
              onChange={(e) => toggleAdmin(user._id, e.target.value)}
            >
              <option value={"USR"}>User</option>
              <option value={"HMNG"}>Hardware Manager</option>
              <option value={"SMNG"}>Software Manager</option>
            </Form.Select>
          </td>
        </tr>
      </React.Fragment>
    );
  });

  return (
    <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>UserName</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </Table>
  );
}

function FixList(list) {
  let newList = [];
  let username = useSelector((state) => state.user.username);
  list.forEach((item) => {
    if (item.username !== username) {
      newList.push(item);
    }
  });
  return newList;
}

export default UsersTable;
