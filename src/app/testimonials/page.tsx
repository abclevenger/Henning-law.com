"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/constants/languages';

interface Testimonial {
    id: number;
    quote: Record<string, string>;
    author: Record<string, string>;
    location: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: {
            en: "I was referred to Norma Henning by my CPA, who spoke highly about her knowledge when it comes to visa and immigration matters. I wanted to move from Germany to the US and was looking for the right approach. Now I have my own consulting firm and enjoy the flexibility that permanent residence brings. She navigated all matters of the process at a very high standard.",
            de: "Mein Steuerberater hat mich an Norma Henning verwiesen und ihre Kompetenz in Visa- und Einwanderungsfragen sehr gelobt. Ich wollte von Deutschland in die USA ziehen und suchte den richtigen Ansatz. Heute habe ich mein eigenes Beratungsunternehmen und genieße die Flexibilität der dauerhaften Aufenthaltsgenehmigung. Sie hat alle Angelegenheiten auf sehr hohem Niveau bearbeitet.",
            es: "Mi contador me recomendó a Norma Henning, hablando muy bien de su conocimiento en asuntos de visas e inmigración. Quería mudarme de Alemania a EE.UU. y buscaba el enfoque correcto. Ahora tengo mi propia firma de consultoría y disfruto de la flexibilidad que trae la residencia permanente.",
            fr: "Mon comptable m'a recommandé Norma Henning, parlant très bien de ses connaissances en matière de visas et d'immigration. Je voulais déménager d'Allemagne aux États-Unis et cherchais la bonne approche. Maintenant j'ai ma propre société de conseil et je profite de la flexibilité de la résidence permanente.",
            zh: "我的会计师向我推荐了Norma Henning，对她在签证和移民事务方面的知识赞不绝口。我想从德国搬到美国，正在寻找正确的方法。现在我有了自己的咨询公司，享受着永久居留带来的灵活性。",
            ja: "私の会計士がNorma Henningを紹介してくれ、ビザと移民問題に関する彼女の知識を高く評価していました。ドイツからアメリカに移住したいと思い、正しいアプローチを探していました。今では自分のコンサルティング会社を持ち、永住権がもたらす柔軟性を享受しています。",
            ar: "أحالني محاسبي إلى نورما هينينغ، وتحدث بشكل كبير عن معرفتها في مسائل التأشيرات والهجرة. أردت الانتقال من ألمانيا إلى الولايات المتحدة وكنت أبحث عن النهج الصحيح. الآن لدي شركتي الاستشارية الخاصة وأستمتع بالمرونة التي توفرها الإقامة الدائمة.",
        },
        author: {
            en: "German Business Professional",
            de: "Deutscher Geschäftsmann",
            es: "Profesional de negocios alemán",
            fr: "Professionnel des affaires allemand",
            zh: "德国商业专业人士",
            ja: "ドイツのビジネスプロフェッショナル",
            ar: "محترف أعمال ألماني",
        },
        location: "Florida"
    },
    {
        id: 2,
        quote: {
            en: "The immigration process can be a stressful and challenging journey. Norma was able to prepare everything and supported me throughout the entire process. After receiving my green card and citizenship, I referred Norma to my parents to apply for their green cards. It was such a relief knowing they were in good hands.",
            de: "Der Einwanderungsprozess kann eine stressige und herausfordernde Reise sein. Norma hat alles vorbereitet und mich während des gesamten Prozesses unterstützt. Nach Erhalt meiner Green Card und Staatsbürgerschaft habe ich Norma meinen Eltern für ihre Green Card-Anträge empfohlen. Es war eine solche Erleichterung zu wissen, dass sie in guten Händen waren.",
            es: "El proceso de inmigración puede ser un viaje estresante y desafiante. Norma pudo preparar todo y me apoyó durante todo el proceso. Después de recibir mi tarjeta verde y ciudadanía, referí a Norma a mis padres para solicitar sus tarjetas verdes.",
            fr: "Le processus d'immigration peut être un voyage stressant et difficile. Norma a pu tout préparer et m'a soutenu tout au long du processus. Après avoir reçu ma carte verte et ma citoyenneté, j'ai recommandé Norma à mes parents pour leurs demandes de carte verte.",
            zh: "移民过程可能是一段充满压力和挑战的旅程。Norma准备好了一切并在整个过程中支持我。在获得绿卡和公民身份后，我把Norma推荐给了我的父母申请他们的绿卡。",
            ja: "移民プロセスはストレスが多く困難な旅になることがあります。Normaはすべてを準備し、プロセス全体を通じてサポートしてくれました。グリーンカードと市民権を取得した後、両親のグリーンカード申請のためにNormaを紹介しました。",
            ar: "يمكن أن تكون عملية الهجرة رحلة مرهقة وصعبة. استطاعت نورما إعداد كل شيء ودعمتني طوال العملية بأكملها. بعد حصولي على البطاقة الخضراء والمواطنة، أحلت نورما إلى والدي للتقدم بطلب للحصول على بطاقاتهم الخضراء.",
        },
        author: {
            en: "Naturalized U.S. Citizen",
            de: "Eingebürgerter US-Staatsbürger",
            es: "Ciudadano estadounidense naturalizado",
            fr: "Citoyen américain naturalisé",
            zh: "入籍美国公民",
            ja: "帰化した米国市民",
            ar: "مواطن أمريكي متجنس",
        },
        location: "Tampa, FL"
    },
    {
        id: 3,
        quote: {
            en: "It was a pleasure to work with Mrs. Henning from the initial consultation until the day our case was approved. She was always very accessible, responsive, and reliable, and was a knowledgeable resource on timelines, procedures, and current immigration laws.",
            de: "Es war eine Freude, mit Frau Henning zu arbeiten – von der ersten Beratung bis zur Genehmigung unseres Falls. Sie war immer sehr zugänglich, reaktionsschnell und zuverlässig sowie eine kompetente Ansprechpartnerin für Fristen, Verfahren und aktuelle Einwanderungsgesetze.",
            es: "Fue un placer trabajar con la Sra. Henning desde la consulta inicial hasta el día en que se aprobó nuestro caso. Siempre fue muy accesible, receptiva y confiable, y fue un recurso conocedor en plazos, procedimientos y leyes de inmigración actuales.",
            fr: "Ce fut un plaisir de travailler avec Mme Henning depuis la consultation initiale jusqu'au jour où notre cas a été approuvé. Elle était toujours très accessible, réactive et fiable, et était une ressource compétente sur les délais, les procédures et les lois actuelles sur l'immigration.",
            zh: "从最初的咨询到我们的案件获批，与Henning女士合作是一种荣幸。她总是非常容易联系、反应迅速且可靠，并且是时间表、程序和当前移民法的知识丰富的资源。",
            ja: "最初の相談から私たちのケースが承認された日まで、Henning夫人と仕事をするのは喜びでした。彼女は常に非常にアクセスしやすく、反応が良く、信頼でき、タイムライン、手続き、現行の移民法について知識豊富なリソースでした。",
            ar: "كان من دواعي سروري العمل مع السيدة هينينغ من الاستشارة الأولية حتى يوم الموافقة على قضيتنا. كانت دائمًا سهلة الوصول وسريعة الاستجابة وموثوقة، وكانت مصدرًا معرفيًا في المواعيد والإجراءات وقوانين الهجرة الحالية.",
        },
        author: {
            en: "Green Card Recipient",
            de: "Green Card-Empfänger",
            es: "Beneficiario de tarjeta verde",
            fr: "Bénéficiaire de la carte verte",
            zh: "绿卡获得者",
            ja: "グリーンカード取得者",
            ar: "حامل البطاقة الخضراء",
        },
        location: "Minnesota"
    },
    {
        id: 4,
        quote: {
            en: "Mrs. Henning was efficient and timely in preparing the paperwork for every stage of the application and was diligent and thorough in creating a comprehensive package. She was on top of things every step of the way and we felt confident throughout the process.",
            de: "Frau Henning war bei der Vorbereitung der Unterlagen für jede Phase des Antrags effizient und pünktlich sowie sorgfältig und gründlich bei der Erstellung eines umfassenden Pakets. Sie hatte alles im Griff und wir fühlten uns während des gesamten Prozesses sicher.",
            es: "La Sra. Henning fue eficiente y oportuna en la preparación del papeleo para cada etapa de la solicitud y fue diligente y minuciosa en la creación de un paquete completo. Estuvo al tanto de todo en cada paso del camino.",
            fr: "Mme Henning a été efficace et ponctuelle dans la préparation des documents pour chaque étape de la demande et a été diligente et minutieuse dans la création d'un dossier complet. Elle a tout maîtrisé à chaque étape.",
            zh: "Henning女士在为申请的每个阶段准备文件时都非常高效及时，在创建全面的材料包时也非常勤勉和彻底。她在每一步都掌控着一切，我们在整个过程中都感到很有信心。",
            ja: "Henning夫人は申請の各段階の書類作成において効率的かつタイムリーで、包括的なパッケージの作成において勤勉で徹底的でした。彼女はあらゆる段階で物事を把握しており、私たちはプロセス全体を通じて自信を持っていました。",
            ar: "كانت السيدة هينينغ فعالة وفي الوقت المناسب في إعداد الأوراق لكل مرحلة من مراحل الطلب وكانت مجتهدة ودقيقة في إنشاء حزمة شاملة. كانت على دراية بكل شيء في كل خطوة من الطريق.",
        },
        author: {
            en: "Family Immigration Client",
            de: "Mandant für Familieneinwanderung",
            es: "Cliente de inmigración familiar",
            fr: "Client en immigration familiale",
            zh: "家庭移民客户",
            ja: "家族移民クライアント",
            ar: "عميل الهجرة العائلية",
        },
        location: "United States"
    }
];

// UI Translations
const uiText = {
    pageTitle: {
        en: "Client Testimonials",
        de: "Mandantenstimmen",
        es: "Testimonios de clientes",
        fr: "Témoignages de clients",
        zh: "客户评价",
        ja: "お客様の声",
        ar: "شهادات العملاء",
    },
    heroSubtitle: {
        en: "Hear from clients who have successfully navigated their U.S. immigration journey with our guidance.",
        de: "Erfahren Sie von Mandanten, die ihren Weg in die USA mit unserer Begleitung erfolgreich gemeistert haben.",
        es: "Escuche de clientes que han navegado con éxito su viaje de inmigración a EE.UU. con nuestra orientación.",
        fr: "Découvrez les témoignages de clients qui ont réussi leur parcours d'immigration aux États-Unis avec notre accompagnement.",
        zh: "聆听在我们指导下成功完成美国移民之旅的客户的心声。",
        ja: "私たちのガイダンスで米国移民の旅を成功させたお客様の声をお聞きください。",
        ar: "استمع إلى العملاء الذين نجحوا في رحلة الهجرة إلى الولايات المتحدة بتوجيهاتنا.",
    },
    ctaTitle: {
        en: "Ready to Start Your Journey?",
        de: "Bereit, Ihre Reise zu beginnen?",
        es: "¿Listo para comenzar su viaje?",
        fr: "Prêt à commencer votre voyage ?",
        zh: "准备好开始您的旅程了吗？",
        ja: "旅を始める準備はできましたか？",
        ar: "هل أنت مستعد لبدء رحلتك؟",
    },
    ctaSubtitle: {
        en: "Contact us today to discuss your immigration goals and learn how we can help.",
        de: "Kontaktieren Sie uns noch heute, um Ihre Einwanderungsziele zu besprechen.",
        es: "Contáctenos hoy para discutir sus metas de inmigración y saber cómo podemos ayudar.",
        fr: "Contactez-nous aujourd'hui pour discuter de vos objectifs d'immigration et découvrir comment nous pouvons vous aider.",
        zh: "立即联系我们，讨论您的移民目标，了解我们如何提供帮助。",
        ja: "今すぐお問い合わせいただき、移民の目標についてご相談ください。",
        ar: "اتصل بنا اليوم لمناقشة أهداف الهجرة الخاصة بك ومعرفة كيف يمكننا المساعدة.",
    },
    ctaButton: {
        en: "Schedule a Consultation",
        de: "Beratung vereinbaren",
        es: "Programar una consulta",
        fr: "Planifier une consultation",
        zh: "预约咨询",
        ja: "相談を予約する",
        ar: "حدد موعداً للاستشارة",
    },
};

export default function TestimonialsPage() {
    const { language, t } = useLanguage();
    
    return (
        <>
            <section className="testimonials-page">
                <section className="testimonials-hero">
                    <div className="container">
                        <h1>{uiText.pageTitle[language]}</h1>
                        <p className="hero-subtitle">
                            {uiText.heroSubtitle[language]}
                        </p>
                    </div>
                </section>

                <section className="testimonials-grid">
                    <div className="container">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-card">
                                <div className="quote-icon">"</div>
                                <blockquote>{testimonial.quote[language]}</blockquote>
                                <div className="testimonial-author">
                                    <strong>{testimonial.author[language]}</strong>
                                    <span>{testimonial.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="container" style={{ marginTop: '2rem' }}>
                        <p className="testimonial-disclaimer">
                            {t('legal.testimonialDisclaimer')}
                        </p>
                    </div>
                </section>

                <section className="testimonials-cta">
                    <div className="container">
                        <h2>{uiText.ctaTitle[language]}</h2>
                        <p>{uiText.ctaSubtitle[language]}</p>
                        <Link href="/contact" className="btn btn-primary">{uiText.ctaButton[language]}</Link>
                    </div>
                </section>
            </section>

            <style jsx>{`
                .testimonials-page {
                    min-height: 100vh;
                }

                .testimonials-hero {
                    background: linear-gradient(135deg, var(--color-primary) 0%, #1a3a5c 100%);
                    color: white;
                    padding: 5rem 0;
                    text-align: center;
                }

                .testimonials-hero h1 {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                    color: white;
                }

                .hero-subtitle {
                    font-size: 1.25rem;
                    opacity: 0.9;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .testimonials-grid {
                    padding: 5rem 0;
                    background: var(--color-background);
                }

                .testimonials-grid .container {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
                
                @media (min-width: 768px) {
                    .testimonials-grid .container {
                        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    }
                }

                .testimonial-card {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    position: relative;
                }

                .quote-icon {
                    font-size: 5rem;
                    color: var(--color-secondary);
                    opacity: 0.3;
                    position: absolute;
                    top: 1rem;
                    left: 1.5rem;
                    line-height: 1;
                    font-family: Georgia, serif;
                }

                .testimonial-card blockquote {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: var(--color-text);
                    margin: 0 0 1.5rem 0;
                    padding-top: 2rem;
                    font-style: italic;
                }

                .testimonial-author {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    border-top: 1px solid var(--color-border);
                    padding-top: 1rem;
                }

                .testimonial-author strong {
                    color: var(--color-primary);
                    font-size: 1rem;
                }

                .testimonial-author span {
                    color: var(--color-text-light);
                    font-size: 0.9rem;
                }

                .testimonials-cta {
                    background: var(--color-primary);
                    color: white;
                    padding: 4rem 0;
                    text-align: center;
                }

                .testimonials-cta h2 {
                    color: white;
                    margin-bottom: 1rem;
                }

                .testimonials-cta p {
                    margin-bottom: 2rem;
                    opacity: 0.9;
                }

                .btn-primary {
                    display: inline-block;
                    background: var(--color-secondary);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .btn-primary:hover {
                    background: white;
                    color: var(--color-primary);
                }

                .testimonial-disclaimer {
                    text-align: center;
                    padding: 1.5rem;
                    background: rgba(0,0,0,0.03);
                    border-radius: 8px;
                    font-size: 0.85rem;
                    color: var(--color-text-light);
                    line-height: 1.6;
                    max-width: 800px;
                    margin: 0 auto;
                }

                @media (max-width: 768px) {
                    .testimonials-hero h1 {
                        font-size: 2rem;
                    }

                    .testimonials-grid .container {
                        grid-template-columns: 1fr;
                    }

                    .testimonial-card {
                        padding: 2rem;
                    }
                }
            `}</style>
        </>
    );
}
