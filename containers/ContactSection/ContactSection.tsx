import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import Image from "next/image";
import { ContactForm } from "@/components";
import { useForm } from "@/utils/hooks/useForm";
import styles from "./ContactSection.module.scss";

const cx = classNames.bind(styles);

const ContactSection: NextPage = () => {
  const { isFormSubmitting, formData, formRef, handleFormSubmit, handleInputChange } = useForm();

  return (
    <div className={cx("contact")}>
      <h1 className={cx("contact-heading")}>Contact Me</h1>
      <div className={cx("contact-email")}>
        <Image src="/assets/gmail.webp" alt="gmail" width={30} height={30} priority />
        <span>himanshu27kashyap@gmail.com</span>
      </div>
      {isFormSubmitting ? (
        <div className={cx("contact-submission")}>
          <div className={cx("contact-submission-head")}>Submitting Form Details</div>
          {/* <ThreeDots ariaLabel="loading-indicator" color={theme === THEME.LIGHT ? "#343e47" : "#ffffff"} /> */}
          <div className={cx("contact-submission-text")}>Please wait...</div>
        </div>
      ) : (
        <ContactForm
          formRef={formRef}
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default ContactSection;
