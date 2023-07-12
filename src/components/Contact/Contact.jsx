import React from 'react';
import ring from '../../assets/images/pattern-rings.svg';

//write form validation code:
// - Receive an error message when the `form` is submitted if:
//   - Any field is empty
//   - The email address is not formatted correctly
// - **Bonus**: Hook the form up so it sends and stores the user's enquiry (you can use a spreadsheet or Airtable to save the enquiries)

function Contact() {
    return (
        <div className='contacts'>
            <section className='contacts__left-section'>
                <h1 className='contacts__title'>contact</h1>
                <p className='contacts__description'>I would love to hear about your project and how I could help. Please
                    fill in the form, and I’ll get back to you as soon as possible.</p>
                <img className='contacts__rings' src={ring} alt="rings" />
            </section>
            <form className='form' action="submit">
                <input className='form__input' placeholder='NAME' type="text" name='name'/>
                <input type="email" name='email' placeholder='EMAIL' className='from__input'/>
                <textarea name="message" className="form__message"></textarea>
                <button className='form__cta btn'>send message</button>
            </form>
        </div>
    )
}

export default Contact