import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import "../form.css";

// interface FormDataI {
//   name: string;
//   email: string;
//   age: number;
// }

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email().min(5),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, { message: "Age must be at least 18" }),
});
type FormDataT = z.infer<typeof schema>;

export default function FormReactFormHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataT>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormDataT) => console.log(data);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <label>
            Name :
            <input
              {...register("name")}
              placeholder="Your Full Name"
              type="text"
            />
          </label>
          {errors.name && (
            <p className="error-message">{errors.name?.message}</p>
          )}
        </div>
        <div className="input-container">
          <label>
            Email :
            <input
              {...register("email")}
              placeholder="Your Email"
              type="email"
            />
          </label>
          {errors.email && (
            <p className="error-message">{errors.email?.message}</p>
          )}
        </div>
        <div className="input-container">
          <label>
            Age :
            <input
              {...register("age", {
                valueAsNumber: true,
              })}
              className="age"
              placeholder="Age"
              type="number"
            />
          </label>
          {errors.age && <p className="error-message">{errors.age?.message}</p>}
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
