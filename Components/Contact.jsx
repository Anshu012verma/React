import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendemail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_e636psl',
      'template_e18wyd7',
      form.current,
      'HB4vwSdMZXv-Uh9RT'
    )
      .then((result) => {
        console.log(result.text);
        alert("Message sent!");
      },
        (error) => {
          console.log(error.text);
        });
    e.target.reset();
  };

  return (
    <Contactpart id="Contact" onSubmit={sendemail}>
      <Title>Contact me</Title>
      <Form ref={form}>
        <Input type="text" name="name" placeholder="Name..." />
        <Input type="email" name="email" placeholder="abc@gmail.com" />
        <Textarea name="message" placeholder="Your Message..." rows="5" />
        <Button text="Send Message" type="submit"/>
      </Form>
    </Contactpart>
  )
}

export default Contact

const Contactpart = styled.div`
    justify-content: center;
    max-width: 500px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    scroll-margin-top: 80px; 
`

const Title = styled.p`
    background: linear-gradient(to right, #1e90ff, #00ffff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const Input = styled.input`
    padding: 12px;
    border: none;
    background-color: #111;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
`
const Textarea = styled.textarea`
    padding: 12px;
    border: none;
    background-color: #111;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
`