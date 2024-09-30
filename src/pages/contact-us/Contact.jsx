import './contact.css'

const Contact = () => {
  return (
    <section className='contact'>
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-house-fill"></i>
            Address
          </div>
          <p className="contact-item-text">Palestine - Gaza - TelAlhowa</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-telephone-fill"></i>
            Phone
          </div>
          <p className="contact-item-text">123-456-789</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-envelope-fill"></i>
            Email
          </div>
          <p className="contact-item-text">bookstore@gmail.com</p>
        </div>
      </div>
      <form onSubmit={e => e.preventDefault()} className='contact-form'>
        <h2 className="contact-form-title">Contact Us</h2>
        <div className='contact-inputs-wrapper'>
          <input className='contact-input' type="text" placeholder='Name' required/>
          <input className='contact-input' type="text" placeholder='Subject' required/>
          <input className='contact-input' type="text" placeholder='Email' required/>
        </div>
        <textarea rows={5} placeholder='Your Explantion' className='contact-textarea' required></textarea>
        <button type='submit' className='contact-btn'>Send</button>  
      </form>
    </section>
  )
}

export default Contact