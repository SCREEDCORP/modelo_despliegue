import React, { useState, useEffect } from "react";

const API = process.env.REACT_APP_API;

export const Users = () => {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);
  const [v4, setV4] = useState(0);

  const [editing, setEditing] = useState(false);

  async function handleOnSubmit(e){
    e.preventDefault()

    const data = await fetch(`${API}/data`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        v1,
        v2,
        v3,
        v4
      })
    })

    const dataJson = await data.json()

    console.log({ dataJson })
  }

  return (
    <div className="row">
      <div className="col-md-4">
        <form className="card card-body" onSubmit={handleOnSubmit} >
          <div className="form-group">
            <input
              type="number"
              onChange={(e) => setV1(e.target.value)}
              value={v1}
              className="form-control"
              placeholder="V1"
              autoFocus
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              onChange={(e) => setV2(e.target.value)}
              value={v2}
              className="form-control"
              placeholder="V2"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              onChange={(e) => setV3(e.target.value)}
              value={v3}
              className="form-control"
              placeholder="V3"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              onChange={(e) => setV4(e.target.value)}
              value={v4}
              className="form-control"
              placeholder="V4"
              required
            />
          </div>
         
          <button className="btn btn-primary btn-block">
            {editing ? "Update" : "Create"}
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="btn btn-secondary btn-sm btn-block"
                    onClick={(e) => editUser(user._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm btn-block"
                    onClick={(e) => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
