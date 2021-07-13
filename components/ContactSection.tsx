import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Section } from "../components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Label from "./Label";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function ContactSection() {
  const { register, handleSubmit, reset } = useForm();
  const [isSending, setIsSending] = useState(false);
  const submitHandler = (data: any) => {
    setIsSending(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        "#my-form",
        process.env.NEXT_PUBLIC_USER_ID as string
      )
      .then((res) => {
        setIsSending(false);
        toast.success("Message successfully sent");
        reset();
      })
      .catch((err) => {
        toast.error("Message not sent, please try again");
        setIsSending(false);
      });
  };
  return (
    <Section id="contact" bgColor="bg-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-0 text-gray-100">
        <h2 className="uppercase text-center font-bold text-xl text-orange-600">
          Contact Me
        </h2>
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-10">
            <div className=" py-8 px-6 space-y-6">
              <p>You can connect with me on the following platforms: </p>

              <a
                className="flex space-x-2 hover:text-orange-600"
                href="https://www.linkedin.com/in/oladayo-olufemi-fagbemi-38a613a3/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                <small className="uppercase">Linkedin</small>
              </a>
              <a
                className="flex space-x-2 hover:text-orange-600"
                href="https://github.com/ofemmy"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                <small className="uppercase">Github</small>
              </a>
              <a
                className="flex space-x-2 hover:text-orange-600"
                href="https://twitter.com/oladayo_fagbemi"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
                <small className="uppercase">Twitter</small>
              </a>
            </div>
            <div className="py-8 px-6">
              <form
                className="space-y-8"
                onSubmit={handleSubmit(submitHandler)}
                id="my-form"
              >
                <div>
                  <Label forEl="name" title="Name" />

                  <div className="mt-1">
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      name="name"
                      id="name"
                      className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-700 rounded-md bg-gray-700"
                      placeholder="Name"
                      aria-describedby="name"
                    />
                  </div>
                </div>
                <div>
                  <Label forEl="email" title="Email" />

                  <div className="mt-1">
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      name="email"
                      id="email"
                      className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-700 rounded-md bg-gray-700"
                      placeholder="Email address"
                      aria-describedby="email-description"
                    />
                  </div>
                </div>

                <div>
                  <Label forEl="message" title="Message" />
                  <div className="mt-1">
                    <textarea
                      {...register("message", { required: true })}
                      id="message"
                      name="message"
                      rows={4}
                      className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border border-gray-700 rounded-md bg-gray-700"
                      placeholder=""
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div>
                  <button
                    disabled={isSending}
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    {isSending ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
