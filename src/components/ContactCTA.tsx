"use client";

import Link from 'next/link';
import { useLanguage, Language } from '@/contexts/LanguageContext';

interface ContactCTAProps {
    variant?: 'full' | 'compact' | 'inline';
    showTestimonial?: boolean;
    className?: string;
}

const ctaText = {
    title: {
        en: "Ready to Take the Next Step?",
        de: "Bereit für den nächsten Schritt?",
        es: "¿Listo para dar el siguiente paso?",
        fr: "Prêt à passer à l'étape suivante ?",
        zh: "准备好迈出下一步了吗？",
        ja: "次のステップに進む準備はできましたか？",
        ar: "هل أنت مستعد لاتخاذ الخطوة التالية؟",
    },
    subtitle: {
        en: "Schedule a consultation to discuss your goals and explore your options.",
        de: "Vereinbaren Sie eine Beratung, um Ihre Ziele zu besprechen und Ihre Optionen zu erkunden.",
        es: "Programe una consulta para discutir sus objetivos y explorar sus opciones.",
        fr: "Planifiez une consultation pour discuter de vos objectifs et explorer vos options.",
        zh: "预约咨询，讨论您的目标并探索您的选择。",
        ja: "ご相談を予約して、目標についてお話しし、オプションを検討しましょう。",
        ar: "حدد موعدًا للاستشارة لمناقشة أهدافك واستكشاف خياراتك.",
    },
    primaryButton: {
        en: "Start Your Consultation",
        de: "Beratung starten",
        es: "Iniciar su consulta",
        fr: "Commencer votre consultation",
        zh: "开始咨询",
        ja: "相談を始める",
        ar: "ابدأ استشارتك",
    },
    secondaryButton: {
        en: "Call (239) 821-6504",
        de: "Anrufen: (239) 821-6504",
        es: "Llamar (239) 821-6504",
        fr: "Appeler (239) 821-6504",
        zh: "致电 (239) 821-6504",
        ja: "電話する (239) 821-6504",
        ar: "اتصل (239) 821-6504",
    },
    testimonialQuote: {
        en: '"She was always very accessible, responsive, and reliable throughout the entire process."',
        de: '"Sie war immer sehr zugänglich, reaktionsschnell und zuverlässig während des gesamten Prozesses."',
        es: '"Siempre fue muy accesible, receptiva y confiable durante todo el proceso."',
        fr: '"Elle a toujours été très accessible, réactive et fiable tout au long du processus."',
        zh: '"在整个过程中，她一直非常容易联系、反应迅速且可靠。"',
        ja: '"プロセス全体を通じて、彼女は常に非常にアクセスしやすく、反応が良く、信頼できました。"',
        ar: '"كانت دائمًا سهلة الوصول وسريعة الاستجابة وموثوقة طوال العملية بأكملها."',
    },
    testimonialAuthor: {
        en: "— Green Card Recipient, Minnesota",
        de: "— Green Card-Empfänger, Minnesota",
        es: "— Beneficiario de tarjeta verde, Minnesota",
        fr: "— Bénéficiaire de la carte verte, Minnesota",
        zh: "— 绿卡获得者，明尼苏达州",
        ja: "— グリーンカード取得者、ミネソタ州",
        ar: "— حامل البطاقة الخضراء، مينيسوتا",
    },
    inlineText: {
        en: "Have questions? ",
        de: "Haben Sie Fragen? ",
        es: "¿Tiene preguntas? ",
        fr: "Des questions ? ",
        zh: "有问题？",
        ja: "ご質問がありますか？",
        ar: "هل لديك أسئلة؟ ",
    },
    inlineLink: {
        en: "Get in touch",
        de: "Kontaktieren Sie uns",
        es: "Contáctenos",
        fr: "Contactez-nous",
        zh: "联系我们",
        ja: "お問い合わせ",
        ar: "تواصل معنا",
    },
};

const ContactCTA = ({ variant = 'full', showTestimonial = false, className = '' }: ContactCTAProps) => {
    const { language, t } = useLanguage();

    if (variant === 'inline') {
        return (
            <p className={`contact-cta-inline ${className}`} style={{ 
                fontSize: '1.05rem',
                color: 'var(--color-text-light)',
                marginTop: '1.5rem',
                marginBottom: '1.5rem',
            }}>
                {ctaText.inlineText[language]}
                <Link href="/contact" style={{ 
                    color: 'var(--color-secondary)', 
                    fontWeight: 600,
                    textDecoration: 'none',
                }}>
                    {ctaText.inlineLink[language]} →
                </Link>
            </p>
        );
    }

    if (variant === 'compact') {
        return (
            <div className={`contact-cta-compact ${className}`} style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                backgroundColor: 'var(--color-bg-light)',
                borderRadius: '8px',
                marginTop: '2rem',
                marginBottom: '2rem',
            }}>
                <Link href="/contact" className="btn btn-primary">
                    {ctaText.primaryButton[language]}
                </Link>
                <a href="tel:2398216504" className="btn btn-outline">
                    {ctaText.secondaryButton[language]}
                </a>
            </div>
        );
    }

    // Full variant
    return (
        <section className={`contact-cta-section ${className}`} style={{
            textAlign: 'center',
            padding: '3rem',
            backgroundColor: 'var(--color-bg-light)',
            borderRadius: '12px',
            marginTop: '3rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                {ctaText.title[language]}
            </h3>
            <p style={{ 
                fontSize: '1.1rem', 
                marginBottom: '2rem', 
                maxWidth: '600px', 
                marginLeft: 'auto', 
                marginRight: 'auto', 
                color: 'var(--color-text-light)' 
            }}>
                {ctaText.subtitle[language]}
            </p>

            {showTestimonial && (
                <div style={{
                    maxWidth: '500px',
                    margin: '0 auto 2rem',
                    padding: '1.5rem',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--color-secondary)',
                }}>
                    <p style={{ 
                        fontStyle: 'italic', 
                        color: 'var(--color-text-light)', 
                        marginBottom: '0.75rem',
                        fontSize: '1rem',
                        lineHeight: '1.6',
                    }}>
                        {ctaText.testimonialQuote[language]}
                    </p>
                    <p style={{ 
                        fontWeight: 600, 
                        color: 'var(--color-primary)', 
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem',
                    }}>
                        {ctaText.testimonialAuthor[language]}
                    </p>
                    <p style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--color-text-light)',
                        margin: 0,
                    }}>
                        {t('legal.resultsDisclaimer')}
                    </p>
                </div>
            )}

            <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                <Link href="/contact" className="btn btn-primary">
                    {ctaText.primaryButton[language]}
                </Link>
                <a href="tel:2398216504" className="btn btn-outline">
                    {ctaText.secondaryButton[language]}
                </a>
            </div>
        </section>
    );
};

export default ContactCTA;
