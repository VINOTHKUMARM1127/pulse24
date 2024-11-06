import './notFound.css'

const notFound = ({ val }) => {
  
    return (
    <div className="container">
      <div className="section">
      <h1>Contact Us</h1>
      <p>We're here to help and would love to hear from you! Please use the appropriate contact information below to reach out.</p>
      </div>

      <div className="section">
        <h2>Customer Support</h2>
        <p>For assistance with subscriptions, website issues, or account questions, contact our customer support team:</p>
        <h4>Email: <a href="mailto:support@newssite.com">support@worldnews360.com</a><br />
           Phone: <a href="tel:1234567892">(123) 456-7892</a></h4>
      </div>

  
    </div>

    )
}

export default notFound