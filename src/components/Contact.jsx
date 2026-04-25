export default function Contact() {
    return (
        <div className="contact-container">
            <h2 className="contact-headline">Contact Us!</h2>
            <div className="form-container">
                <form action="" className="form">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-input" placeholder="Name" />
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="text" id="phone" className="form-input" placeholder="Phone Number" />
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-input" placeholder="email" />
                    <label htmlFor="service" className="form-label">Service Requested</label>
                    <input type="text" id="service" className="form-input" placeholder="service requested" />
                    <button className="btn submit-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}