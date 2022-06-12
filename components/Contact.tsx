import type { NextPage } from "next";
import { useState } from "react";
import Gmail from "../assets/gmail.webp";

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

export const Contact: NextPage = () => {
  const [values, setValues] = useState<IFormValues>({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValues(values);
  };

  console.log({ values });

  return (
    <section className="contact">
      <h1 className="contact_heading">Contact</h1>
      <div className="contact_email">
        <img src={Gmail.src} alt="" /> himanshu27@kashyap@gmail.com
      </div>
      <form className="contact_form" autoComplete="off">
        <div className="contact_form_formcontrol">
          <label htmlFor="name" className="contact_form_formcontrol_label">
            Name :
          </label>
          <input
            className="contact_form_formcontrol_input"
            id="name"
            name="name"
            type="text"
            value={values?.name ?? ""}
            onChange={handleChange}
          />
          <p className="contact_form_formcontrol_error">{"*Error"}</p>
        </div>
        <div className="contact_form_formcontrol">
          <label htmlFor="email" className="contact_form_formcontrol_label">
            Email :
          </label>
          <input
            className="contact_form_formcontrol_input"
            id="email"
            name="email"
            type="email"
            value={values?.email ?? ""}
            onChange={handleChange}
          />
          <p className="contact_form_formcontrol_error">{"*Error"}</p>
        </div>
        <div className="contact_form_formcontrol">
          <label htmlFor="message" className="contact_form_formcontrol_label">
            Message :
          </label>
          <textarea
            className="contact_form_formcontrol_input"
            id="message"
            name="message"
            value={values?.message ?? ""}
            onChange={handleChange}
          />
          <p className="contact_form_formcontrol_error">{"*Error"}</p>
        </div>
        <div className="contact_form_formcontrol">
          <button className="contact_form_formcontrol_submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
