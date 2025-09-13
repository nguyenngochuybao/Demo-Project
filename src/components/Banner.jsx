
const Banner = () =>
{
    return (
        <div className="banner-section">
            <div className="container"> {/* Hoặc dùng một div riêng cho nội dung nếu không muốn giới hạn chiều rộng */ }
                <div className="banner-content">
                    <h1>Give Your Workout <br /> A New Style</h1>
                    <p>Success isn't always about greatness. It's about consistency. Consistent hard work gains Success. greatness will come.</p>
                    <a href="#" className="btn">Explore Now &#8594;</a>
                </div>
                <div className="banner-image-wrapper">
                    <img src="https://i.pinimg.com/originals/7b/15/18/7b15180507f98560fbd7af375d46cbcc.png" alt="Lionel Messi" className="banner-main-image" />
                    {/* Nếu có chữ "SUBHAN RENDERS" thì đặt ở đây */ }

                </div>
            </div>
        </div>
    );
};

export default Banner;