export default function Contact() {
    return (
        <div>
            <h2>Contact Us!</h2>
            <div>
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" style={{ padding: '12px 24px' }} />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" style={{ padding: '12px 24px' }} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" style={{ padding: '12px 24px' }} />
                    <label htmlFor="service">Service Requested</label>
                    <input type="text" id="service" style={{ padding: '12px 24px' }} />
                    <button style={{ padding: '8px 16px' }}>Submit</button>
                </form>
            </div>
        </div>
    )
}