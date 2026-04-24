export default function Services() {
    return (
        <div>
            <h2>Services Offered</h2>
            <div>
                <h2>House Cleaning</h2>
                <img 
                    src="/house-cleaning.webp" 
                    style={{ width: '100%' }}
                    alt="gloved hands spraying cleaner on surface" 
                />
                <div>
                    <p>Price: <span>$50/cleaning</span></p>
                </div>
            </div>
            <div>
                <h2>Deep Clean</h2>
                <img 
                    src="/vacuum.webp" 
                    style={{ width: '100%' }} 
                    alt="vacuum cleaner being used on a dirty carpet"
                />
                <div>
                    <p>Price: <span>$100/cleaning</span></p>
                </div>
            </div>
            <div>
                <h2>Moving In / Moving Out Cleaning</h2>
                <img 
                    src="/clean-kitchen.webp" 
                    style={{ width: '100%' }} 
                    alt="spotless clean kitchen sink and faucet"
                />
                <div>
                    <p>Price: <span>$125/cleaning</span></p>
                </div>
            </div>
            <button style={{ padding: '8px 16px' }}>Contact Us</button>
        </div>
    )
}