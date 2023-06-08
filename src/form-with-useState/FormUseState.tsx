/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from "react";
import "../form.css";

export default function FormUseState() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log("Name : ", name);
    console.log("Email : ", email);
    console.log("Age : ", age);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>useState</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            Name :
            <input
              onChange={(ev) => setName(ev.target.value)}
              placeholder="Your Full Name"
              type="text"
              name="name"
              value={name}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Email :
            <input
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Your Email"
              type="email"
              name="email"
              value={email}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Age :
            <input
              onChange={(ev) => setAge(ev.target.value)}
              className="age"
              placeholder="Age"
              type="number"
              name="age"
              value={age}
            />
          </label>
        </div>
        <hr />
        <div className="input-container">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
