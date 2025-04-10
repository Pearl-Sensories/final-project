import React from 'react'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router';



function Termscondi() {
  return (
    <div className='border-4 border-gray-500 p-5'>
        <section className=''>
        <h1 className='text-4xl mt-5 mb-10'>📄 Terms and Conditions</h1>

<p className='text-xl'>Welcome to Edumatch! Please read these Terms and Conditions ("Terms") carefully before using our app. By signing up or logging in, you agree to be bound by these Terms. </p>

<h1 className='text-2xl mt-5'>1. Acceptance of Terms</h1>
<p className='text-xl'>By creating an account, accessing, or using Edumatch, you agree to comply with and be legally bound by these Terms. If you do not agree to these Terms, please do not use the application. </p>

<h1 className='text-2xl mt-5'>2. User Eligibility </h1>
<p className='text-xl'>To use Edumatch, you must:

Be at least 13 years old or have permission from a parent or guardian.

Provide accurate and complete information during signup.

Register as either a Student or Teacher, and optionally provide your institution name and subject area. 
</p>

<h1 className='text-2xl mt-5'>3. User Information </h1>
<p className='text-xl'>During registration, you may be asked to provide:

Full Name

Email Address

Password

Role (Student or Teacher)

Location (City, State)

Optional details like Institution, Grade Level/Subject, Interests, Profile Picture, and Phone Number.

You agree that:

You are responsible for keeping your login credentials secure.

You are solely responsible for any activity on your account. </p>

<h1 className='text-2xl mt-5'>4. Privacy Policy </h1>
<p className='text-xl'>By agreeing to these Terms, you also accept our Privacy Policy which explains how your data is collected, used, and protected. </p>

<h1 className='text-2xl mt-5'>5. Use of Profile Information </h1>
<p className='text-xl'>We may use your provided interests and location to personalize your experience on the platform (e.g., content suggestions, relevant teacher-student connections). This data will not be sold or shared with third parties without your consent. </p>

<h1 className='text-2xl mt-5'>6. Account Security </h1>
<p className='text-xl'>You are responsible for:

Keeping your account credentials confidential.

Using a strong password (password strength is validated on sign-up).

Notifying us immediately if you suspect any unauthorized use of your account. </p>

<h1 className='text-2xl mt-5'>7. Termination </h1>
<p className='text-xl'>We reserve the right to suspend or terminate accounts that:

Violate these Terms.

Provide false or misleading information.

Are used for malicious, illegal, or inappropriate activity. </p>

<h1 className='text-2xl mt-5'>8. Content and Conduct </h1>
<p className='text-xl'>You agree to use the platform for educational purposes only.

Offensive, inappropriate, or unlawful content is strictly prohibited.

We reserve the right to remove any content or user accounts that violate community standards. </p>

<h1 className='text-2xl mt-5'>9. Intellectual Property </h1>
<p className='text-xl'>All materials, designs, logos, and content provided by Edumatch are protected by intellectual property laws. You may not reproduce, distribute, or modify any part of the platform without prior written permission. </p>

<h1 className='text-2xl mt-5'>10. Modifications to the Terms </h1>
<p className='text-xl'>We may update these Terms from time to time. You will be notified of any significant changes. Continued use of the app after such updates constitutes acceptance of the new terms. </p>

<h1 className='text-2xl mt-5'>11. Contact Us </h1>
<p className='text-xl'>If you have any questions about these Terms or your account, please contact us at:
📧 [support@edumatchapp.com] (replace with your actual contact email) </p>
        </section>

       
        <Link to="/createaccount/<signup/>" className='text-4xl'>
  <IoArrowBackCircleSharp />
</Link>

    </div>
  )
}

export default Termscondi;