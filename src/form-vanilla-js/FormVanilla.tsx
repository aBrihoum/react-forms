import { FormEvent } from "react";
import "../form.css";
interface FormData {
  name: { value: string };
  email: { value: string };
  age: { value: number[] };
}
export default function FormVanilla() {
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const { name, email, age } = ev.target as typeof ev.target & FormData;
    console.log("Name : ", name.value);
    console.log("Email : ", email.value);
    console.log("Age : ", age.value);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Vanilla</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            Name :
            <input placeholder="Your Full Name" type="text" name="name" />
          </label>
        </div>
        <div className="input-container">
          <label>
            Email :
            <input placeholder="Your Email" type="email" name="email" />
          </label>
        </div>
        <div className="input-container">
          <label>
            Age :
            <input className="age" placeholder="Age" type="number" name="age" />
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
