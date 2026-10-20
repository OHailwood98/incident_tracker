import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";

import { MakeAdmin } from "../../redux/actions/usersActions";

function UsersTable() {
  const dispatch = useDispatch();
  let users = useSelector((state) => state.users);

  users = FixList(users);

  function toggleAdmin(id) {
    dispatch(MakeAdmin(id));
  }

  let tableData = users.map((user) => {
    return (
      <React.Fragment key={user._id}>
        <tr>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.admin.toString()}</td>
          <td>
            <Button onClick={() => toggleAdmin(user._id)}>
              {user.admin ? "Remove Admin" : "Make Admin"}
            </Button>
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
          <th>Is Admin</th>
          <th>Toggle Admin</th>
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
