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
    setStatus("sending");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      event.currentTarget.reset();
      setStatus("success");
      setMessage("Thanks. Your enquiry has been sent to Novex Pest Control.");
      return;
    }

    setStatus("error");
    setMessage("Sorry, we could not send your enquiry. Please call us directly.");
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
      {message ? <p role="status">{message}</p> : null}
    </form>
  );
}
