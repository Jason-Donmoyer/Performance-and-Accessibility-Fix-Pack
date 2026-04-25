export default function Services() {
    return (
        <div className="services-container">
            <h2 className="services-headline">Services Offered</h2>
            <div className="services-card-container">
                <div className="service-card">
                    <h3>House Cleaning</h3>
                    <img 
                        src="/house-cleaning.webp" 
                        className="service-card-img"
                        alt="gloved hands spraying cleaner on surface" 
                    />
                    <div>
                        <p>Price: <span>$50/cleaning</span></p>
                    </div>
                </div>
                <div className="service-card">
                    <h3>Deep Clean</h3>
                    <img 
                        src="/vacuum.webp" 
                        className="service-card-img" 
                        alt="vacuum cleaner being used on a dirty carpet"
                    />
                    <div>
                        <p>Price: <span>$100/cleaning</span></p>
                    </div>
                </div>
                <div className="service-card">
                    <h3>Moving In / Moving Out Cleaning</h3>
                    <img 
                        src="/clean-kitchen.webp" 
                        className="service-card-img" 
                        alt="spotless clean kitchen sink and faucet"
                    />
                    <div>
                        <p>Price: <span>$125/cleaning</span></p>
                    </div>
                </div>
            </div>
            
            <button className="btn">Contact Us</button>
        </div>
    )
}