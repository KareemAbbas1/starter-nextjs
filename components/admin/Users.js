import styled from "styled-components";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0%;

  div.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;
    border-bottom: 1px solid #ccc;
    h1 {
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 1.1rem;
    }

    button {
      font-size: 1.1rem;
      font-weight: bold;
      padding-block: 0.4rem;
      background-color: #000;
      color: #fff;
      cursor: pointer;
      transition: all 300ms ease-in-out;

      &:hover {
        background-color: transparent;
        color: #000;
      }
    }
  }

  table {
    width: 97%;
    margin-top: 1rem;
    text-align: right;
    margin-inline: 1rem;
    padding-inline: 0.5rem;
    box-shadow: 1px 0.5px 2px 1px #ccc;

    thead {
      width: 100%;
        th {
          width: 30%;
          padding-block: 1rem;
          font-size: 1.1rem;
        }
    }

      td {
        height: 3.5rem;
        border-top: 1px solid #ccc;
      }


      button {
        margin-right: 5px;
        background-color: #000;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: all 300ms ease-in-out;

        &:hover {
          background-color: transparent;
          color: #000;
        }
      }

      button.user-details {
        width: 6rem;
        background-color: #00D100;
        border: 2.5px solid #00D100;
        &:hover {
          background-color: transparent;
        }
      }

      button.delete-user {
        background-color: red;
        border: 2.5px solid red;
        &:hover {
          background-color: transparent;
        }
      }
  }

  div.user-modal {
    display: none;
    direction: ltr;
    width: 100%;
    height: 90vh;
    background-color: rgba(255, 255, 255, 0.6);
    padding-top: 4rem;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid;
    
    @media(min-width: 1400px) {
      padding-top: 5rem;
    }
    
    div.modal-body {
      width: 79.8%;
      height: 100%;
      padding-top: 1rem;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      span {
        width: 1rem;
        height: 1rem;
        position: absolute;
        left: 77.5%;
        bottom: 85.5%;
        background-color: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid;
        border-radius: 5px;
        cursor: pointer;
        transition: all 300ms ease;

        &:hover {
          background-color: transparent;
          color: #000;
          border: 1px solid #000;
        }
      }


      form {
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 3rem;

        h2 {
          text-align: center;
        }

        input {
          width: 15rem;
          padding: 0.7rem 0.5rem;
          border: 1px solid;
          border-radius: 3px;
        }

        select {
          width: 16.15rem;
          font-size: 1.1rem;
          padding: 0.6rem 0.5rem;
        }


        span.validation-span {
          color: red;
          position: unset;
          background-color: unset;
          border: unset;
          width: unset;
          display: inline-block;
          margin-top: unset;
          max-width: 15rem;
        }
      }

      div.footer {
        width: 79.7%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        padding-block: 0.8rem;
        border: 1px solid #ccc;

        button {
          margin-inline: 1rem;
          font-size: 1.1rem;
          padding: 0.2rem 0.5rem;
          cursor: pointer;
          transition: all 300ms ease-in-out;
        }

        button.add {
          background-color: #000;
          color: #fff;

          &:hover {
            background-color: transparent;
            color: #000;
          }
        }

        button#edit {
          background-color: #000;
          color: #fff;
          width: 7rem;
          font-size: 1.2rem;
          font-weight: bold;

          &:hover {
            background-color: transparent;
            color: #000;
          }
        } 

        button.delete {
          padding-inline: 1rem;
          &:hover {
            background-color: #000;
            color: #fff;
          }
        }
      }

      form.change-password {
       i {
        position: absolute;
        margin-left: 14rem;
        padding: 10px;
        cursor: pointer;
        transition: all 300ms ease-in-out;
        color: rgba(0, 0, 0, 0.6);

        &:hover {
          opacity: 0.4;
        }
       }
      }
    }
  }

  div.loading {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 79%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
  }

  div.delete-modal {
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          display: none;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.6);

          div.delete-modal-body {
            width: 30%;
            height: 30%;
            background-color: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;

            span {
              position: absolute;
              right: 35.5%;
              top: 36%;
              width: 1.2rem;
              height: 1.2rem;
              background-color: #000;
              color: #fff;
              font-weight: bold;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid #000;
              border-radius: 3px;
              cursor: pointer;
              transition: all 300ms ease-in-out;

              &:hover {
                background-color: #fff;
                color: #000;
              }
            }

            div.delete-modal-content {
              display: flex;
              flex-direction: column;
              p {
                font-size: 1.2rem;
                font-weight: bold;
              }
              button {
                font-size: 1.1rem;
                font-weight: bold;
                padding-block: 0.3rem;
                background-color: red;
                border-color: red;

                &:hover {
                  background-color: transparent;
                }
              }
            }
          }
        }
`



const Users = ({ role, loggedInUser }) => {


  // Fetch all users
  const [users, setUsers] = useState();
  const [isCreated, setIsCreated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      if (role === "admin1") {
        try {
          let res = await axios.get(`/api/users`);
          setUsers(res.data);
        }
        catch (error) {
          alert(error);
        }
      }
    }
    fetchUsers();
  }, [isCreated, role])


  const openModal = () => {
    document.getElementById('user-modal').style.display = "block";
    document.querySelector('body').style.overflowY = "hidden";
  }

  const closeModal = () => {
    document.getElementById('user-modal').style.display = "none";
    document.querySelector('body').style.overflowY = "auto";
  }


  // Create new user
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();
  const [emailsMatch, setEmailsMatch] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [validData, setValidData] = useState(true);

  async function onFormSubmit(values) {
    const confirmEmailField = document.getElementById("confirm-email").value;
    if (confirmEmailField === "") {
      return setEmailsMatch(false);
    }
    if (values.confirmEmail === "") {
      return setValidData(false)
    }
    if (passwordMatch !== true || emailsMatch !== true) {
      setValidData(false)
    }
    else {
      setValidData(true);
      try {
        document.getElementById("create-user").disabled = true;
        setLoading(!loading);

        await axios.post(`/api/auth/register`, {
          username: values.userName,
          email: values.confirmEmail,
          password: values.confirmPassword,
          role: values.role

        });
        document.getElementById("create-user").disabled = false;
        setLoading(loading);
        closeModal();
        setIsCreated(!isCreated);
      }
      catch (error) {
        alert(error);
      }
    }
  };



  /* Handle Delete user */
  const openDeleteUserModal = (modalId) => {
    document.getElementById(modalId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeDeleteUserModal = (modalId) => {
    document.getElementById(modalId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  };


  // Delete user 
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      setIsCreated(!isCreated);
    }
    catch (error) {
      alert(error);
    }
  }
  /* End Handle Delete user */




  /* Handle Update user */
  // Handle open/close user details modal
  const openUserDetailsModal = (modalId) => {
    document.getElementById(modalId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  }

  const closeUserDetailsModal = (e, modalId, btnId) => {
    e.preventDefault();

    document.getElementById(modalId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
    document.getElementById(btnId).disabled = false;
    Array.from(document.getElementsByClassName("change-password")).map(form => {
      form.reset();
    })
  }



  // Fetch single user by id
  const [singleUser, setSingleUser] = useState();

  const fetchSingleUser = async (userId, btnId) => {
    try {
      document.getElementById(btnId).disabled = true;
      const res = await axios.get(`/api/users/${userId}`)
      setSingleUser(res.data);

      setTimeout(() => {
        openUserDetailsModal(`${userId}user-modal`);
      }, 500)
    }
    catch (error) {
      alert(error);
    }
  }

  /* End Handle Update user */
  const [newPasswordMatch, setNewPasswordMatch] = useState(true);
  

  // Show/hide password
  const showPassword = (e, inputId) => {
    let input = document.getElementById(inputId);
    if (input.type === "password" && !inputId.includes("confirm")) {
      e.target.style.color = "#000";
      input.type = "text";
    }
    else if (input.type === "password" && inputId.includes("confirm")) {
      e.target.style.color = "#000";
      input.type = "text";
    }
    else if (input.type === "text" && inputId.includes("confirm")) {
      e.target.style.color = "rgba(0, 0, 0, 0.6)";
      input.type = "password";
    }
    else {
      e.target.style.color = "rgba(0, 0, 0, 0.6)";
      input.type = "password"
    }
  };


  // Change password
  const changePassword = async (e, newPassId, confPassId, userId) => {
    e.preventDefault();

    const newPassword = document.getElementById(newPassId).value;
    const confirmNewPassword = document.getElementById(confPassId).value;

    if (newPassword !== confirmNewPassword) {
      return setNewPasswordMatch(!newPasswordMatch);
    } else {
      setNewPasswordMatch(newPasswordMatch);
      try {
        await axios.patch(`/api/users/${userId}`, {
          password: confirmNewPassword
        });
        alert("تم تغيير كلمة المرور بنجاح");
      }
      catch (error) {
        alert(error);
      }
    }

  };



  return (
    <Container>
      <div className="header">
        <h1>المستخدمين</h1>
        <button onClick={openModal}>اضف مستخدم جديد</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>الإسم</th>
            <th>الدور</th>
            <th>البريد الإلكتروني</th>
          </tr>
        </thead>

        <tbody>
          {
            users && users.map(user => (
              loggedInUser && loggedInUser._id !== user._id &&

              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="user-details"
                    id={`${user._id}details`}
                    onClick={() => fetchSingleUser(user._id, `${user._id}details`)}
                  >تعديل المستخدم</button>
                </td>


                <td>
                  <button className="delete-user" onClick={() => openDeleteUserModal(`${user._id}rand`)}>مسح</button>
                  <div className="delete-modal" id={`${user._id}rand`}>
                    <div className="delete-modal-body">
                      <span onClick={() => closeDeleteUserModal(`${user._id}rand`)}>x</span>
                      <div className="delete-modal-content">
                        <p>هل تريد إزالة هذا المستخدم؟</p>
                        <button onClick={() => deleteUser(user._id)}>نعم</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <div id="user-modal" className="user-modal">
        <div className="modal-body">
          {
            loading &&
            <div className="loading">Loading...</div>
          }
          <span onClick={closeModal}>x</span>
          <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <h2>Create New User</h2>

              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                {
                ...register("userName", {
                  required: {
                    value: true,
                    message: "Please enter a username"
                  },
                  minLength: {
                    value: 8,
                    message: "This name is too short"
                  },
                  maxLength: {
                    value: 100,
                    message: "This name is too long"
                  }
                })
                }
                style={{
                  borderColor: `${errors.userName ? 'red' : 'unset'}`
                }}
              />
              {errors.userName && <span className="validation-span">
                {errors.userName.message}
              </span>}


              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                {
                ...register("emailField", {
                  required: {
                    value: true,
                    message: "Please enter a valid email address"
                  },
                  minLength: {
                    value: 8,
                    message: "This email is too short"
                  },
                  maxLength: {
                    value: 254,
                    message: "This email is too long"
                  },
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email address"
                  }
                })
                }
                style={{
                  borderColor: `${errors.emailField ? 'red' : 'unset'}`
                }}
              />
              {errors.emailField && <span className="validation-span">
                {errors.emailField.message}
              </span>}


              <input
                type="email"
                id="confirm-email"
                name="confirm-email"
                placeholder="Re-type email"
                {
                ...register("confirmEmail",)
                }
                style={{
                  borderColor: `${errors.confirmEmail ? 'red' : 'unset'}`
                }}
                onChange={(e) => {
                  const userEmail = getValues("emailField", {
                    required: {
                      value: true,
                      message: "Please re-type the email address"
                    }
                  });
                  const confEmail = e.target.value;

                  if (userEmail !== confEmail) {
                    setEmailsMatch(false)
                  }
                  else {
                    setEmailsMatch(true)
                  }
                }}
              />
              {errors.confirmEmail && <span className="validation-span">{errors.confirmEmail.message}</span>}

              {
                emailsMatch !== true && !errors.confirmEmail ? <span className="validation-span">Emails do not match</span> : ""
              }

              <input
                type="password"
                id="password"
                name="password"
                {
                ...register("password", {
                  required: {
                    value: true,
                    message: "Please enter a password"
                  },
                  minLength: {
                    value: 8,
                    message: "This email is too short"
                  },
                  maxLength: {
                    value: 254,
                    message: "This email is too long"
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                  }
                })
                }
                placeholder="Enter password"
                style={{
                  borderColor: `${errors.password ? 'red' : 'unset'}`
                }}
              />
              {errors.password && <span
                className="validation-span"
                style={{ marginBottom: '3rem' }}
              >
                {errors.password.message}
              </span>}



              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Re-type password"
                {
                ...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Please re-type the password"
                  }
                })
                }
                style={{
                  borderColor: `${errors.confirmPassword ? 'red' : 'unset'}`
                }}
                onChange={(e) => {
                  const userPassword = getValues("password");
                  const confPassword = e.target.value;

                  if (userPassword !== confPassword) {
                    setPasswordMatch(false)
                  }
                  else {
                    setPasswordMatch(true)
                  }
                }}
              />
              {errors.confirmPassword && <span className="validation-span">{errors.confirmPassword.message}</span>}

              {
                passwordMatch !== true && !errors.confirmPassword ? <span className="validation-span">Passwords do not match</span> : ""
              }

              <select
                name="users"
                id="users"
                {
                ...register("role", {
                  required: {
                    value: true,
                    message: "Please Choose a role for this user"
                  }
                })
                }
                style={{
                  borderColor: `${errors.role ? 'red' : 'unset'}`
                }}
              >
                <option value="">Choose Role</option>
                <option value="admin1">Admin1</option>
                <option value="admin2">Admin2</option>
                <option value="vendor" disabled>Vendor</option>
              </select>

              {errors.role && <span className="validation-span">
                {errors.role.message}
              </span>}

              {
                validData !== true && <span className="validation-span">Plese fill all of the above fields with valid data</span>
              }
              <div className="footer">
                <button id="create-user" className="add" type="submit">اضف المستخدم</button>
                <button className="delete" onClick={closeModal}>الغاء</button>
              </div>
            </form>
          </div>
        </div>
      </div>


      {/* Update user */}
      <div id={`${singleUser && singleUser._id}user-modal`} className="user-modal">
        <div className="modal-body">
          {
            loading &&
            <div className="loading">Loading...</div>
          }
          <span
            onClick={(e) => closeUserDetailsModal(
              e,
              `${singleUser && singleUser._id}user-modal`,
              `${singleUser && singleUser._id}details`
            )}>x</span>
          <div>
            <form
              className="change-password"
              style={{ display: 'unset' }}
              onSubmit={(e) => changePassword(
                e,
                `${singleUser && singleUser._id}new-password`,
                `${singleUser && singleUser._id}confirm-new-password`,
                singleUser && singleUser._id

              )}
            >
              <h2>{singleUser && singleUser.username}</h2>

              <i className="fa fa-solid fa-eye icon"
                onClick={(e) => showPassword(e, `${singleUser && singleUser._id}new-password`)}
              ></i>

              <input
                type="password"
                id={`${singleUser && singleUser._id}new-password`}
                minLength="8"
                maxLength="100"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                title="Password must contain at least one uppercase, one lowercase, and one number"
                placeholder="Enter new password"
                required
              />

              <br /><br />


              <i className="fa fa-solid fa-eye icon"
                onClick={(e) => showPassword(e, `${singleUser && singleUser._id}confirm-new-password`)}
              ></i>

              <input
                type="password"
                id={`${singleUser && singleUser._id}confirm-new-password`}
                className="input-field"
                minLength="8"
                maxLength="100"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                title="Password must contain at least one uppercase, one lowercase, and one number"
                placeholder="Re-type new password"
                required
              />

              <br />
              {
                !newPasswordMatch &&
                <span className="validation-span">Passwords don&apos;t match</span>
              }

              <div className="footer">
                <button className="add" type="submit">تغغير كلمة المرور</button>
                <button
                  className="delete"
                  onClick={(e) => closeUserDetailsModal(
                    e,
                    `${singleUser && singleUser._id}user-modal`,
                    `${singleUser && singleUser._id}details`
                  )}>الغاء</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Users