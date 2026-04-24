export default function Contact() {
    return (
        <div>
            <h2>Contact Us!</h2>
            <div>
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                    <label htmlFor="service">Service Requested</label>
                    <input type="text" id="service" />
                    <div>Submit</div>
                </form>
            </div>
        </div>
    )
}