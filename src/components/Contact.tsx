import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ieuohjq", 
        "template_167edrh", 
        form.current,
        "t0iExWhdl15wjD5c-" 
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Your message has been sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("There was an error sending your message. Please try again later.");
        }
      );
  };      

  return (
    <div id="contact" className="container section-title">
      <h2>Contact</h2>
      <div id="contatti" className="container">
        <form ref={form} onSubmit={sendEmail} className="php-email-form">
          <div className="row gy-4">
            <div className="col-md-6">
              <label htmlFor="fullName" className="pb-2">Nome</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-control"
                placeholder="Nome"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email_id" className="pb-2">Email</label>
              <input
                type="email"
                id="email_id"
                name="email_id"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="message" className="pb-2">Messaggio</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Messaggio"
                required
              ></textarea>
            </div>
            <div className="col-md-12 text-center">
              <button type="submit">Invia</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
