import { useState } from 'react';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulate sending the reset email
        try {
            await sendResetEmail(email);
            alert('Password reset email has been sent!');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const sendResetEmail = async (email) => {
        // Replace with actual API call to send the reset email
        return new Promise((resolve) => setTimeout(resolve, 1000));
    };

    return (
        <>
            <div className='bg-light'>
                <h2>Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Enter your email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Send Reset Email</button>
                </form>
            </div>
        </>
    );
}

export default ForgotPassword;
