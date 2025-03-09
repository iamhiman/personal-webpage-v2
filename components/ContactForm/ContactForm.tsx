import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { IContactFormProps } from "@/utils/typings/typings";
import styles from "./ContactForm.module.scss";

const cx = classNames.bind(styles);

const ContactForm: NextPage<IContactFormProps> = ({
  formRef,
  formData,
  handleInputChange = () => {},
  handleFormSubmit = () => {},
}) => {
  return (
    <form className={cx("contact-form")} autoComplete="off" ref={formRef}>
      <div className={cx("contact-form-formcontrol")}>
        <label htmlFor="name" className={cx("contact-form-formcontrol-label")}>
          Name :
        </label>
        <input
          className={cx("contact-form-formcontrol-input")}
          id="name"
          name="name"
          type="text"
          value={formData?.name?.value ?? ""}
          onChange={handleInputChange}
        />
        <p className={cx("contact-form-formcontrol-error")}>
          {!!formData?.name?.errorMessage && formData?.name?.errorMessage}
        </p>
      </div>
      <div className={cx("contact-form-formcontrol")}>
        <label htmlFor="email" className={cx("contact-form-formcontrol-label")}>
          Email :
        </label>
        <input
          className={cx("contact-form-formcontrol-input")}
          id="email"
          name="email"
          type="email"
          value={formData?.email?.value ?? ""}
          onChange={handleInputChange}
        />
        <p className={cx("contact-form-formcontrol-error")}>
          {!!formData?.email?.errorMessage && formData?.email?.errorMessage}
        </p>
      </div>
      <div className={cx("contact-form-formcontrol")}>
        <label htmlFor="message" className={cx("contact-form-formcontrol-label")}>
          Message :
        </label>
        <textarea
          rows={10}
          className={cx("contact-form-formcontrol-input")}
          id="message"
          name="message"
          value={formData?.message?.value ?? ""}
          onChange={handleInputChange}
        />
        <p className={cx("contact-form-formcontrol-error")}>
          {!!formData?.message?.errorMessage && formData?.message?.errorMessage}
        </p>
      </div>
      <div className={cx("contact-form-formcontrol")}>
        <button className={cx("contact-form-formcontrol-submit")} onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
