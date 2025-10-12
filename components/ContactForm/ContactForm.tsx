import React from "react";
import type { NextPage } from "next";
import { IContactFormProps } from "@/utils/typings/typings";
import styles from "./ContactForm.module.scss";

const ContactForm: NextPage<IContactFormProps> = ({
  formRef,
  formData,
  handleInputChange = () => {},
  handleFormSubmit = () => {},
}) => {
  return (
    <form className={styles.contactForm} autoComplete="off" ref={formRef}>
      <div className={styles.formControl}>
        <label htmlFor="name" className={styles.label}>
          Name :
        </label>
        <input
          className={styles.input}
          id="name"
          name="name"
          type="text"
          value={formData?.name?.value ?? ""}
          onChange={handleInputChange}
        />
        <p className={styles.error}>
          {!!formData?.name?.errorMessage && formData?.name?.errorMessage}
        </p>
      </div>
      <div className={styles.formControl}>
        <label htmlFor="email" className={styles.label}>
          Email :
        </label>
        <input
          className={styles.input}
          id="email"
          name="email"
          type="email"
          value={formData?.email?.value ?? ""}
          onChange={handleInputChange}
        />
        <p className={styles.error}>
          {!!formData?.email?.errorMessage && formData?.email?.errorMessage}
        </p>
      </div>
      <div className={styles.formControl}>
        <label htmlFor="message" className={styles.label}>
          Message :
        </label>
        <textarea
          rows={10}
          className={styles.input}
          id="message"
          name="message"
          value={formData?.message?.value ?? ""}
          onChange={handleInputChange}
        />
        <p className={styles.error}>
          {!!formData?.message?.errorMessage && formData?.message?.errorMessage}
        </p>
      </div>
      <div className={styles.formControl}>
        <button className={styles.submit} onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
