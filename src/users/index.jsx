
const AccountPage = () =>
{
    return (
        <div className="container">
            <div className="image-section">
                <img src="https://png.pngtree.com/png-clipart/20250531/original/pngtree-messi-magic-png-image_21101995.png" alt="Lionel Messi playing soccer" />
            </div>
            <div className="form-section">
                <div className="tabs">
                    <div className="tab">Login</div>
                    <div className="tab active">Register</div>
                </div>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="UserName" />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="register-button">Register</button>
                </form>
            </div>
        </div>
    );
};

export default AccountPage;