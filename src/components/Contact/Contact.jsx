import {useRef} from 'react';
import ring from '../../assets/images/pattern-rings.svg';
import './Contact.scss';
import emailjs from '@emailjs/browser';

//write form validation code:
// - Receive an error message when the `form` is submitted if:
//   - Any field is empty
//   - The email address is not formatted correctly
// - **Bonus**: Hook the form up so it sends and stores the user's enquiry (you can use a spreadsheet or Airtable to save the enquiries)




function Contact() {


    const form = useRef();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    

    const sendEmail = (e) => {
        e.preventDefault();


        const userName = e.target.name.value;
        const userEmail = e.target.email.value;
        const userMessage = e.target.message.value;


        if (!userName || !userEmail || !userMessage) {
            return alert("Please ensure all fields are completed");
        }

        if (userEmail)

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                alert("Your Message Has Been Sent! We will contact you shortly.")
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <div id="contact" className='contacts'>
            <section className='contacts__left-section'>
                <h1 className='contacts__title'>contact</h1>
                <p className='contacts__description'>I would love to hear about your project and how I could help. Please
                    fill in the form, and I’ll get back to you as soon as possible.</p>
                <img className='contacts__rings-desktop' src={ring} alt="rings" />
            </section>
            <form onSubmit={sendEmail} ref={form} className='form' action="submit">
                <input className='form__input' placeholder='NAME' type="text" name='name'/>
                <input type="email" name='email' placeholder='EMAIL' className='form__input'/>
                <textarea name="message" className="form__message" placeholder='MESSAGE'></textarea>
                <button className='btn form__cta'>send message</button>
                <img className='contacts__rings-tablet' src={ring} alt="rings" />

            </form>
        </div>
    )
}

export default Contact