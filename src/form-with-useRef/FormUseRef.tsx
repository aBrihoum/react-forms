import { FormEvent, useRef } from "react";
import "../form.css";

export default function FormUseRef() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log("Name : ", nameRef.current?.value);
    console.log("Email : ", emailRef.current?.value);
    console.log("Age : ", ageRef.current?.value);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>useRef</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            Name :
            <input
              ref={nameRef}
              placeholder="Your Full Name"
              type="text"
              name="name"
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Email :
            <input
              ref={emailRef}
              placeholder="Your Email"
              type="email"
              name="email"
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Age :
            <input
              ref={ageRef}
              className="age"
              placeholder="Age"
              type="number"
              name="age"
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
