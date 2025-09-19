// src/components/SmartBandBanner.js Import file CSS

const SmartBandBanner = () =>
{
    return (
        <section className="smart-band-banner">
            <div className="container1">
                <div className="banner-content">
                    <img
                        src="https://www.pngall.com/wp-content/uploads/14/Messi-PNG-Images.png"
                        alt="Lionel Messi"
                        className="messi-image"
                    />
                    <div className="product-info">
                        <h4>Exclusively Available on RedStore</h4>
                        <h1>Smart Band 4</h1>
                        <p>The Mi Smart Band 4 Features a 39.9% Larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.</p>
                        <a href="#" className="btn">Buy Now &#8594;</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartBandBanner;

