"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setMessage("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setStatus("success");
      setMessage("Email sent successfully. We will contact you soon.");
    } catch {
      setStatus("error");
      setMessage("Sorry, we could not send your enquiry. Please call us directly.");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name *</label>
        <input id="name" name="name" placeholder="Name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email *</label>
        <input id="email" name="email" placeholder="Email" type="email" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone *</label>
        <input id="phone" name="phone" placeholder="Phone" required />
      </div>
      <div className="field">
        <label htmlFor="service">Service *</label>
        <select id="service" name="service" required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="suburb">Suburb *</label>
        <input id="suburb" name="suburb" placeholder="Suburb" required />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Message" />
      </div>
      <button className="button" type="submit" disabled={status === "sending"}>
        <Send size={18} /> {status === "sending" ? "Sending..." : "Send"}
      </button>
      {message ? (
        <div className={`toast ${status === "error" ? "toast-error" : "toast-success"}`} role="status">
          {message}
        </div>
      ) : null}
    </form>
  );
}
