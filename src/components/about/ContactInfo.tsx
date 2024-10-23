import { useState } from "react";

const contactInfo = {
    phone: '123-456-7890',
    email: 'info@yourcompany.com',
    address: '123 Main Street, Cityville, ST 12345',
  };

const ContactInfo: React.FC = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission logic here (e.g., send data to an API)
      alert(`Message sent by: ${name}`);
      setName('');
      setMessage('');
    };
  
    return (
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">Contact Information</h1>
        <div className="bg-white rounded-lg shadow-lg p-5">
          <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
          <p className="mb-2">
            <strong>Phone:</strong> {contactInfo.phone}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> <a href={`mailto:${contactInfo.email}`} className="text-blue-500 hover:underline">{contactInfo.email}</a>
          </p>
          <p className="mb-2">
            <strong>Address:</strong> {contactInfo.address}
          </p>
  
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded p-2"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;