import { useState, useEffect } from "react"
import styled from "styled-components";
import axios from "axios";



const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  direction: ltr;

  h2 {
    margin-top: 0;
  };

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 15rem;
      padding: 0.6rem 0.5rem;
      margin-bottom: 1rem;
    }

    button {
      padding-block: 0.6rem;
      font-size: 1.1rem;
      font-weight: bold;
      background-color: #000;
      color: #fff;
      cursor: pointer;
      transition: all 300ms ease-in-out;

      &:hover {
        background-color: transparent;
        color: #000
      }
    }

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
`

const Profile = ({ user }) => {

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
        console.error(error);
      }
    }

  };


  return (
    <Container>
      <div>
        <h2>{user && user.username}</h2>
        {
          user && user.role === "admin1"
          && <h4>{user.role}</h4>
        }
      </div>

      <form  onSubmit={(e) => changePassword(
        e,
        "new-password",
        "confirm-new-password",
        user && user._id
        )}>
        <input
          type="text"
          defaultValue={user && user.username}
          readOnly
        />

        <input
          type="email"
          defaultValue={user && user.email}
          readOnly
        />


        <div>
          <i className="fa fa-solid fa-eye icon"
            onClick={(e) => showPassword(e, "new-password")}
          ></i>

          <input
            type="password"
            id="new-password"
            minLength="8"
            maxLength="100"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
            title="Password must contain at least one uppercase, one lowercase, and one number"
            placeholder="Enter new password"
            required
          /><br />

          <i className="fa fa-solid fa-eye icon"
            onClick={(e) => showPassword(e, "confirm-new-password")}
          ></i>

          <input
            type="password"
            id="confirm-new-password"
            className="input-field"
            minLength="8"
            maxLength="100"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
            title="Password must contain at least one uppercase, one lowercase, and one number"
            placeholder="Re-type new password"
            required
          /><br />
          {
            !newPasswordMatch &&
            <span style={{color: 'red'}}>Passwords don&apos;t match</span>
          }
        </div>

        <button
          type="submit"
        >
          Update
        </button>
      </form>
    </Container>
  )
}

export default Profile