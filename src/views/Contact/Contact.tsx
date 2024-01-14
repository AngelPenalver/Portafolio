import React from "react";
import styles from "./Contact.module.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toastr from "toastr";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Contact: React.FC = () => {
  interface formEmail {
    email: string;
    subject: string;
    message: string;
  }
  const { register, handleSubmit, reset } = useForm<formEmail>({
    mode: "onTouched",
  });
  const onSubmit = handleSubmit((values: formEmail) => {
    const recordValues: Record<string, unknown> = {
      ...values,
      from_name: values.email,
    };
    emailjs
      .send(
        "service_7oxqo8g",
        "template_77v4gef",
        recordValues,
        "xesZHHJO_P7Kwvjfu"
      )
      .then(
        (response) => {
          toastr.success("Correo enviado con exito!");
          reset();
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          toastr.error(`Error ${error}`);
          console.log("FAILED...", error);
        }
      );
  });

  return (
    <div className={styles.container}>
      <h1>Contact me!</h1>
      <div className={styles.contain}>
        <div className={styles.dates}>
          <ul>
            <li>
              <p>Sucre, Venezuela</p>
              <div>
                <FaLocationDot size={30} color="#FFF" />
              </div>
            </li>
            <li>
              <p>+58-4248189165</p>
              <div>
                <FaPhone size={30} color="#FFF" />
              </div>
            </li>
            <li>
              <p>apenalver4@gmail.com</p>
              <div>
                <IoIosMail size={40} color="#fff" />

                {/* <CiMail size={40} color="#3D3FCE"   /> */}
              </div>
            </li>
          </ul>
        </div>
        <div>
          <form action="" onSubmit={onSubmit} className={styles.form}>
            <div className={styles.input}>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required to send a message",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "You must enter a valid email address",
                  },
                })}
                type="text"
                placeholder=" "
              />
              <label htmlFor="">Email</label>
            </div>
            <div className={styles.input}>
              <input
                {...register("subject", {
                  required: {
                    value: true,
                    message: "The subject is required to send a message",
                  },
                })}
                type="text"
                placeholder=" "
              />
              <label htmlFor="">Subject</label>
            </div>
            <div className={styles.textarea}>
              <textarea
                {...register("message", {
                  required: {
                    value: true,
                    message: "The message cannot be empty",
                  },
                })}
                cols={45}
                rows={10}
                placeholder=" "
              />
              <label htmlFor="">Message</label>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
