'use client'

import { Box, Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from "./form.module.scss"
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';

function NotifySucess(): any {
    toast.success("Sucesso em enviar o email!")
}

function NotifyError(): any {
    toast.error("O e-mail não foi enviado!")
}

const Form: React.FC = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Subject, setSubject] = useState('');
    const [Message, setMessage] = useState('');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            from_name: Name,
            Phone: Phone,
            message: Message,
            Email: Email
        }

        emailjs.send("gmailMessage", "template_rl05lcs", templateParams, "RP6IBi56LHJ4pdCQr")
            .then((result) => {
                NotifySucess();
                setName('')
                setEmail('')
                setPhone('')
                setSubject('')
                setMessage('')
            })
            .catch((error) => {
                NotifyError();
            });
    }

    return (
        <Box className={styles.container}>
            <FormControl component="form" className={styles.form} onSubmit={sendEmail}>
                <Box className={styles.formDataOne}>
                    <Box className={styles.containerInputName}>
                        <p className={styles.nameInput}>Seu nome:</p>
                        <TextField className={styles.inputs} id="outlined-required" type='text' value={Name} onChange={(e) => setName(e.target.value)} variant="outlined" placeholder='Nome' required />
                    </Box>
                    <Box className={styles.containerInputName}>
                        <p className={styles.nameInput}>Seu Email:</p>
                        <TextField className={styles.inputs} id="outlined-required" type='email' value={Email} onChange={(e) => setEmail(e.target.value)} variant="outlined" placeholder='Email' required />
                    </Box>
                </Box>
                <Box className={styles.formDataOne}>
                    <Box className={styles.containerInputName}>
                        <p className={styles.nameInput}>Seu Telefone:</p>
                        <TextField className={styles.inputs} id="outlined-required" type='tel' value={Phone} onChange={(e) => setPhone(e.target.value)} variant="outlined" placeholder='(__) _ ____-____' />
                    </Box>
                    <Box className={styles.containerInputName}>
                        <p className={styles.nameInput}>Assunto do contato:</p>
                        <TextField className={styles.inputs} id="outlined-required" type='text' value={Subject} onChange={(e) => setSubject(e.target.value)} variant="outlined" placeholder='Assunto' required />
                    </Box>
                </Box>
                <Box className={styles.containerInputName}>
                    <p className={styles.nameInput}>Mensagem:</p>
                    <TextField className={styles.inputs} id="outlined-multiline-flexible" multiline type='text' value={Message} onChange={(e) => setMessage(e.target.value)} variant="outlined" placeholder='Mensagem' minRows={3} maxRows={6} required />
                </Box>
                <Box className={styles.btnForm}>
                    <Button type='submit' className={styles.btnSubmit} variant="outlined"> <EmailIcon /> &nbsp; Enviar</Button>
                </Box>
            </FormControl>
        </Box>
    )
}

export default Form;