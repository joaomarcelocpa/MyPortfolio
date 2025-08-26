export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_oi14gt4',
    TEMPLATE_ID: 'template_uno8ivp',
    PUBLIC_KEY: 'X0VlQJAw7cCy4okKR'
}

export function validateEmailJSConfig(): boolean {
    return !!(
        EMAILJS_CONFIG.SERVICE_ID &&
        EMAILJS_CONFIG.TEMPLATE_ID &&
        EMAILJS_CONFIG.PUBLIC_KEY
    )
}