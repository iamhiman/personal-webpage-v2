import type { NextPage } from "next";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import Gmail from "../assets/gmail.webp";
import { IFormData, THEME, Theme } from "../typings";

interface IContactProps {
  theme: Theme;
}

export const Contact: NextPage<IContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState<IFormData>({
    name: { value: "", errorMessage: "" },
    email: { value: "", errorMessage: "" },
    message: { value: "", errorMessage: "" },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: { value: e.target.value, errorMessage: "" } });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const obj = { name: "", email: "", message: "" };
    const lettersregex = /^[a-zA-Z ]*$/;
    const mailregex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    if (formData?.name?.value?.trim().length === 0) {
      obj.name = "*Name cannot be empty !";
    } else if (formData?.name?.value?.replace(/\s+/g, "").length <= 2) {
      obj.name = "*Name cannot be less than 3 characters !";
    } else if (formData?.name?.value?.replace(/\s+/g, "").length > 25) {
      obj.name = "*Name cannot be greater than 25 characters !";
    } else if (!formData?.name?.value?.match(lettersregex)) {
      obj.name = "*Name can only contain alphabets";
    } else {
      obj.name = "";
    }

    if (formData?.email?.value?.trim().length === 0) {
      obj.email = "*Email cannot be empty !";
    } else if (formData?.email?.value?.length > 40) {
      obj.email = "*Email should be less than 40 characters !";
    } else if (!formData?.email?.value?.match(mailregex)) {
      obj.email = "*Please enter valid Email !";
    } else {
      obj.email = "";
    }

    if (formData?.message?.value?.trim().length === 0) {
      obj.message = "*Message cannot be empty !";
    } else if (formData?.message?.value?.length > 600) {
      obj.message = "*Please write a short message(Max 600 Characters) !";
    } else {
      obj.message = "";
    }

    const tempFormData = {
      name: { value: formData.name.value, errorMessage: obj.name },
      email: { value: formData.email.value, errorMessage: obj.email },
      message: { value: formData.message.value, errorMessage: obj.message },
    };

    setFormData({ ...tempFormData });

    if (!obj.name && !obj.email && !obj.message) {
      setFormData({
        name: { value: "", errorMessage: "" },
        email: { value: "", errorMessage: "" },
        message: { value: "", errorMessage: "" },
      });
      setLoading(true);

      try {
        const response = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current!,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        );

        if (response.status === 200) {
          setLoading(false);
          toast.success("Message Sent !");
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        toast.error("Form Submission Failed. Please send me an email !");
      }
    }
  };

  return (
    <>
      <h1 className="contact_heading">Contact Me</h1>
      <div className="contact_email">
        <img src={Gmail.src} alt="" /> himanshu27kashyap@gmail.com
      </div>
      {!loading ? (
        <form className="contact_form" autoComplete="off" ref={form}>
          <div className="contact_form_formcontrol">
            <label htmlFor="name" className="contact_form_formcontrol_label">
              Name :
            </label>
            <input
              className="contact_form_formcontrol_input"
              id="name"
              name="name"
              type="text"
              value={formData?.name?.value ?? ""}
              onChange={handleChange}
            />
            <p className="contact_form_formcontrol_error">
              {!!formData?.name?.errorMessage && formData?.name?.errorMessage}
            </p>
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
              value={formData?.email?.value ?? ""}
              onChange={handleChange}
            />
            <p className="contact_form_formcontrol_error">
              {!!formData?.email?.errorMessage && formData?.email?.errorMessage}
            </p>
          </div>
          <div className="contact_form_formcontrol">
            <label htmlFor="message" className="contact_form_formcontrol_label">
              Message :
            </label>
            <textarea
              rows={10}
              className="contact_form_formcontrol_input"
              id="message"
              name="message"
              value={formData?.message?.value ?? ""}
              onChange={handleChange}
            />
            <p className="contact_form_formcontrol_error">
              {!!formData?.message?.errorMessage && formData?.message?.errorMessage}
            </p>
          </div>
          <div className="contact_form_formcontrol">
            <button className="contact_form_formcontrol_submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="contact_submission">
          <div className="contact_submission_head">Submitting Form Details</div>
          <ThreeDots ariaLabel="loading-indicator" color={theme === THEME.LIGHT ? "#343e47" : "#ffffff"} />
          <div className="contact_submission_text">Please wait...</div>
        </div>
      )}
    </>
  );
};
