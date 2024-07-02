import React from 'react';// eslint-disable-line no-unused-vars
import Container from 'react-bootstrap/Container';

function Home() {
  const customJumbotronStyle = {
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '0.3rem',
    textAlign: 'center',
    minHeight: 'calc(100vh - 56px)', // Adjust for the height of the navbar (56px is the default height of Bootstrap navbar)
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="home-container" style={customJumbotronStyle}>
      <Container>
        <h1>Welcome to My Personal Portfolio</h1>
        <p>This is the home page of my awesome website.</p>
      </Container>
    </div>
  );
}

export default Home;
