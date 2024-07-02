import React from 'react';// eslint-disable-line no-unused-vars

const Contact = () => {
  return (
    <form action="https://formspree.io/f/mqazzown" method="POST" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Your Name:
        <input type="text" name="name" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Your Email:
        <input type="email" name="_replyto" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Message:
        <textarea name="message" required style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '100px' }}></textarea>
      </label>
      <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>Send</button>
    </form>
  );
};

export default Contact;
