// src/lib/emailjs.ts
import emailjs from '@emailjs/browser';

// Configuração do EmailJS usando variáveis de ambiente
export const emailConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_fhm8ren',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx', // Você vai pegar este ID
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'user_xxxxxxxxx', // Você vai pegar esta chave
};

// Inicializar o EmailJS
emailjs.init(emailConfig.publicKey);

export interface EmailData {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
    try {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
        };

        const response = await emailjs.send(
            emailConfig.serviceId,
            emailConfig.templateId,
            templateParams,
            emailConfig.publicKey
        );

        console.log('Email enviado com sucesso:', response.status, response.text);
        return true;
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return false;
    }
};