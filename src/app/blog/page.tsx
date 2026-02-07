"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/constants/languages';

interface BlogPost {
    id: number;
    title: Record<string, string>;
    excerpt: Record<string, string>;
    category: Record<string, string>;
    date: Record<string, string>;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: {
            en: "Understanding the E-2 Treaty Investor Visa", de: "Das E-2 Investorenvisum verstehen", es: "Entendiendo la visa de inversionista E-2",
            ru: "Виза инвестора E-2 по договору", fr: "Comprendre le visa investisseur E-2", zh: "了解E-2条约投资者签证", ja: "E-2条約投資家ビザを理解する", ar: "فهم تأشيرة المستثمر E-2",
        },
        excerpt: {
            en: "The E-2 visa allows citizens of treaty countries to invest in and operate a U.S. business. Learn about eligibility requirements, investment thresholds, and the application process.",
            de: "Das E-2-Visum ermöglicht Bürgern von Vertragsländern, in ein US-Unternehmen zu investieren und es zu betreiben. Erfahren Sie mehr über Voraussetzungen und den Antragsprozess.",
            es: "La visa E-2 permite a ciudadanos de países con tratado invertir y operar un negocio en EE.UU. Conozca los requisitos de elegibilidad y el proceso de solicitud.",
            ru: "Виза E-2 позволяет гражданам стран-участниц договора инвестировать и вести бизнес в США. Требования и процесс подачи.",
            fr: "Le visa E-2 permet aux citoyens des pays signataires d'investir et d'exploiter une entreprise américaine. Découvrez les conditions d'éligibilité et le processus de demande.",
            zh: "E-2签证允许条约国公民投资和经营美国企业。了解资格要求、投资门槛和申请流程。", ja: "E-2ビザは条約国の市民が米国企業に投資し運営することを可能にします。資格要件、投資額、申請プロセスについて学びましょう。", ar: "تسمح تأشيرة E-2 لمواطني الدول الموقعة على المعاهدة بالاستثمار وتشغيل عمل تجاري أمريكي. تعرف على متطلبات الأهلية وعملية التقديم.",
        },
        category: { en: "Visas", de: "Visa", es: "Visas", ru: "Визы", fr: "Visas", zh: "签证", ja: "ビザ", ar: "التأشيرات" },
        date: { en: "Coming Soon", de: "Demnächst", es: "Próximamente", ru: "Скоро", fr: "Bientôt", zh: "即将推出", ja: "近日公開", ar: "قريباً" }
    },
    {
        id: 2,
        title: {
            en: "EB-5 Investor Program: What You Need to Know", de: "EB-5 Investorenprogramm: Was Sie wissen müssen", es: "Programa de inversionistas EB-5: Lo que necesita saber",
            ru: "Программа EB-5 для инвесторов: что нужно знать", fr: "Programme investisseur EB-5 : Ce que vous devez savoir", zh: "EB-5投资者计划：您需要了解的内容", ja: "EB-5投資家プログラム：知っておくべきこと", ar: "برنامج المستثمر EB-5: ما تحتاج إلى معرفته",
        },
        excerpt: {
            en: "The EB-5 program offers a path to permanent residency through substantial investment in U.S. businesses. Explore the requirements and recent program changes.",
            de: "Das EB-5-Programm bietet einen Weg zur dauerhaften Aufenthaltsgenehmigung durch erhebliche Investitionen in US-Unternehmen.",
            es: "El programa EB-5 ofrece un camino hacia la residencia permanente a través de una inversión sustancial en negocios estadounidenses.",
            ru: "Программа EB-5 даёт путь к постоянному проживанию через существенные инвестиции в американский бизнес.",
            fr: "Le programme EB-5 offre une voie vers la résidence permanente grâce à un investissement substantiel dans des entreprises américaines.",
            zh: "EB-5计划通过在美国企业的大量投资提供获得永久居留权的途径。", ja: "EB-5プログラムは、米国企業への多額の投資を通じて永住権への道を提供します。", ar: "يوفر برنامج EB-5 طريقًا للإقامة الدائمة من خلال استثمار كبير في الشركات الأمريكية.",
        },
        category: { en: "Green Cards", de: "Green Cards", es: "Tarjetas verdes", ru: "Green Card", fr: "Cartes vertes", zh: "绿卡", ja: "グリーンカード", ar: "البطاقات الخضراء" },
        date: { en: "Coming Soon", de: "Demnächst", es: "Próximamente", ru: "Скоро", fr: "Bientôt", zh: "即将推出", ja: "近日公開", ar: "قريباً" }
    },
    {
        id: 3,
        title: {
            en: "Marriage-Based Green Cards: A Step-by-Step Guide", de: "Ehepartner-Green Card: Schritt-für-Schritt-Anleitung", es: "Tarjetas verdes basadas en matrimonio: Guía paso a paso",
            ru: "Green Card по браку: пошаговое руководство", fr: "Carte verte par mariage : Guide étape par étape", zh: "基于婚姻的绿卡：分步指南", ja: "結婚に基づくグリーンカード：ステップバイステップガイド", ar: "البطاقة الخضراء القائمة على الزواج: دليل خطوة بخطوة",
        },
        excerpt: {
            en: "Navigating the process of sponsoring your spouse for a green card can be complex. This guide breaks down the timeline, documents, and interview preparation.",
            de: "Das Sponsoring Ihres Ehepartners für eine Green Card kann komplex sein. Dieser Leitfaden erklärt Zeitrahmen, Dokumente und Interviewvorbereitung.",
            es: "Navegar el proceso de patrocinar a su cónyuge para una tarjeta verde puede ser complejo. Esta guía desglosa el cronograma y la preparación.",
            ru: "Оформление Green Card для супруга может быть сложным. В руководстве — сроки, документы и подготовка к собеседованию.",
            fr: "Le processus de parrainage de votre conjoint pour une carte verte peut être complexe. Ce guide détaille le calendrier et la préparation.",
            zh: "为配偶申请绿卡的过程可能很复杂。本指南详细介绍时间表、文件和面试准备。", ja: "配偶者のグリーンカードをスポンサーするプロセスは複雑な場合があります。このガイドでは、タイムライン、書類、面接準備について説明します。", ar: "يمكن أن تكون عملية كفالة زوجك للحصول على البطاقة الخضراء معقدة. يوضح هذا الدليل الجدول الزمني والوثائق والتحضير للمقابلة.",
        },
        category: { en: "Family Immigration", de: "Familieneinwanderung", es: "Inmigración familiar", ru: "Семейная иммиграция", fr: "Immigration familiale", zh: "家庭移民", ja: "家族移民", ar: "الهجرة العائلية" },
        date: { en: "Coming Soon", de: "Demnächst", es: "Próximamente", ru: "Скоро", fr: "Bientôt", zh: "即将推出", ja: "近日公開", ar: "قريباً" }
    },
    {
        id: 4,
        title: {
            en: "Starting a Business in the U.S. as a Foreign National", de: "Unternehmensgründung in den USA als Ausländer", es: "Iniciar un negocio en EE.UU. como extranjero",
            ru: "Ведение бизнеса в США для иностранцев", fr: "Créer une entreprise aux États-Unis en tant qu'étranger", zh: "作为外国人在美国创业", ja: "外国人として米国でビジネスを始める", ar: "بدء عمل تجاري في الولايات المتحدة كأجنبي",
        },
        excerpt: {
            en: "Learn about entity formation, visa considerations, and legal requirements for international entrepreneurs looking to establish a U.S. presence.",
            de: "Erfahren Sie mehr über Unternehmensgründung, Visa-Überlegungen und rechtliche Anforderungen für internationale Unternehmer.",
            es: "Conozca la formación de entidades, consideraciones de visa y requisitos legales para empresarios internacionales.",
            ru: "Создание компании, визы и правовые требования для международных предпринимателей в США.",
            fr: "Découvrez la création d'entité, les considérations de visa et les exigences légales pour les entrepreneurs internationaux.",
            zh: "了解希望在美国建立业务的国际企业家的实体设立、签证考虑和法律要求。", ja: "米国でのプレゼンスを確立しようとする国際的な起業家のための法人設立、ビザの考慮事項、法的要件について学びましょう。", ar: "تعرف على تكوين الكيانات واعتبارات التأشيرة والمتطلبات القانونية لرواد الأعمال الدوليين.",
        },
        category: { en: "Business", de: "Geschäft", es: "Negocios", ru: "Бизнес", fr: "Affaires", zh: "商业", ja: "ビジネス", ar: "الأعمال" },
        date: { en: "Coming Soon", de: "Demnächst", es: "Próximamente", ru: "Скоро", fr: "Bientôt", zh: "即将推出", ja: "近日公開", ar: "قريباً" }
    },
    {
        id: 5,
        title: {
            en: "The Path to U.S. Citizenship: Naturalization Requirements", de: "Der Weg zur US-Staatsbürgerschaft: Einbürgerungsvoraussetzungen", es: "El camino a la ciudadanía estadounidense: Requisitos de naturalización",
            ru: "Путь к гражданству США: требования к натурализации", fr: "Le chemin vers la citoyenneté américaine : Exigences de naturalisation", zh: "通往美国公民身份之路：入籍要求", ja: "米国市民権への道：帰化要件", ar: "الطريق إلى الجنسية الأمريكية: متطلبات التجنس",
        },
        excerpt: {
            en: "For permanent residents ready to become U.S. citizens, understanding the naturalization process is essential. Learn about eligibility, the civics test, and interview tips.",
            de: "Für Daueraufenthaltsberechtigte, die US-Staatsbürger werden möchten, ist das Verständnis des Einbürgerungsprozesses wesentlich.",
            es: "Para residentes permanentes listos para convertirse en ciudadanos estadounidenses, comprender el proceso de naturalización es esencial.",
            ru: "Для постоянных жителей, готовящихся к гражданству США, важно понимать процесс натурализации.",
            fr: "Pour les résidents permanents prêts à devenir citoyens américains, comprendre le processus de naturalisation est essentiel.",
            zh: "对于准备成为美国公民的永久居民来说，了解入籍流程至关重要。", ja: "米国市民になる準備ができている永住者にとって、帰化プロセスを理解することは不可欠です。", ar: "بالنسبة للمقيمين الدائمين المستعدين ليصبحوا مواطنين أمريكيين، فإن فهم عملية التجنس أمر ضروري.",
        },
        category: { en: "Citizenship", de: "Staatsbürgerschaft", es: "Ciudadanía", ru: "Гражданство", fr: "Citoyenneté", zh: "公民身份", ja: "市民権", ar: "الجنسية" },
        date: { en: "Coming Soon", de: "Demnächst", es: "Próximamente", ru: "Скоро", fr: "Bientôt", zh: "即将推出", ja: "近日公開", ar: "قريباً" }
    },
    {
        id: 6,
        title: {
            en: "Buying Property in the U.S. as a Non-Resident", de: "Immobilienkauf in den USA als Nicht-Resident", es: "Comprar propiedad en EE.UU. como no residente",
            ru: "Покупка недвижимости в США для нерезидентов", fr: "Acheter une propriété aux États-Unis en tant que non-résident", zh: "非居民在美国购买房产", ja: "非居住者として米国で不動産を購入する", ar: "شراء عقار في الولايات المتحدة كغير مقيم",
        },
        excerpt: {
            en: "Non-residents can purchase U.S. real estate, but there are important tax and legal considerations. Discover what you need to know before investing.",
            de: "Nicht-Residenten können US-Immobilien kaufen, aber es gibt wichtige steuerliche und rechtliche Überlegungen.",
            es: "Los no residentes pueden comprar bienes raíces en EE.UU., pero hay consideraciones fiscales y legales importantes.",
            ru: "Нерезиденты могут покупать недвижимость в США; важно учитывать налоговые и правовые аспекты.",
            fr: "Les non-résidents peuvent acheter des biens immobiliers américains, mais il y a des considérations fiscales et juridiques importantes.",
            zh: "非居民可以购买美国房地产，但有重要的税务和法律考虑。", ja: "非居住者は米国の不動産を購入できますが、重要な税務および法的考慮事項があります。", ar: "يمكن لغير المقيمين شراء العقارات الأمريكية، ولكن هناك اعتبارات ضريبية وقانونية مهمة.",
        },
        category: { en: "Real Estate", de: "Immobilien", es: "Bienes raíces", ru: "Недвижимость", fr: "Immobilier", zh: "房地产", ja: "不動産", ar: "العقارات" },
        date: { en: "Coming Soon", de: "Demnächst", es: "Próximamente", ru: "Скоро", fr: "Bientôt", zh: "即将推出", ja: "近日公開", ar: "قريباً" }
    }
];

// UI Translations (include all site languages: en, de, es, ru, fr; extra zh, ja, ar for future)
const uiText: Record<string, Record<string, string>> = {
    pageTitle: {
        en: "Blog & Resources", de: "Blog & Ressourcen", es: "Blog y recursos",
        ru: "Блог и ресурсы", fr: "Blog et ressources", zh: "博客与资源", ja: "ブログとリソース", ar: "المدونة والموارد"
    },
    heroSubtitle: {
        en: "Insights and guidance on U.S. immigration, visas, and related legal topics.",
        de: "Einblicke und Orientierung zu US-Einwanderung, Visa und verwandten Rechtsthemen.",
        es: "Perspectivas y orientación sobre inmigración a EE.UU., visas y temas legales relacionados.",
        ru: "Материалы и консультации по иммиграции в США, визам и смежным правовым темам.",
        fr: "Aperçus et conseils sur l'immigration américaine, les visas et les sujets juridiques connexes.",
        zh: "关于美国移民、签证和相关法律主题的见解和指导。", ja: "米国移民、ビザ、関連する法的トピックに関する洞察とガイダンス。", ar: "رؤى وإرشادات حول الهجرة إلى الولايات المتحدة والتأشيرات والموضوعات القانونية ذات الصلة.",
    },
    comingSoonTitle: {
        en: "Blog Coming Soon", de: "Blog demnächst verfügbar", es: "Blog próximamente",
        ru: "Блог скоро", fr: "Blog bientôt disponible", zh: "博客即将推出", ja: "ブログ近日公開", ar: "المدونة قريباً"
    },
    comingSoonText: {
        en: "We're preparing informative articles and resources to help you navigate U.S. immigration. Check back soon for updates, or contact us directly for personalized guidance.",
        de: "Wir bereiten informative Artikel und Ressourcen vor, die Ihnen bei der US-Einwanderung helfen. Schauen Sie bald wieder vorbei oder kontaktieren Sie uns für eine persönliche Beratung.",
        es: "Estamos preparando artículos informativos y recursos para ayudarle a navegar la inmigración a EE.UU. Vuelva pronto o contáctenos directamente.",
        ru: "Мы готовим статьи и материалы по иммиграции в США. Зайдите позже или свяжитесь с нами для персональной консультации.",
        fr: "Nous préparons des articles informatifs et des ressources pour vous aider à naviguer dans l'immigration américaine. Revenez bientôt ou contactez-nous directement.",
        zh: "我们正在准备信息丰富的文章和资源，以帮助您了解美国移民。请稍后回来查看更新，或直接联系我们获取个性化指导。",
        ja: "米国移民をナビゲートするための有益な記事とリソースを準備しています。更新をお待ちいただくか、直接お問い合わせください。", ar: "نحن نعد مقالات وموارد إعلامية لمساعدتك في التنقل في الهجرة إلى الولايات المتحدة. تحقق مرة أخرى قريبًا أو اتصل بنا مباشرة.",
    },
    upcomingTopics: {
        en: "Upcoming Topics", de: "Kommende Themen", es: "Temas próximos",
        ru: "Предстоящие темы", fr: "Sujets à venir", zh: "即将推出的主题", ja: "今後のトピック", ar: "المواضيع القادمة"
    },
    ctaTitle: {
        en: "Need Answers Now?", de: "Brauchen Sie jetzt Antworten?", es: "¿Necesita respuestas ahora?",
        ru: "Нужны ответы сейчас?", fr: "Besoin de réponses maintenant ?", zh: "现在需要答案吗？", ja: "今すぐ答えが必要ですか？", ar: "هل تحتاج إلى إجابات الآن؟"
    },
    ctaSubtitle: {
        en: "Don't wait for our blog posts. Schedule a consultation to discuss your specific situation.",
        de: "Warten Sie nicht auf unsere Blog-Beiträge. Vereinbaren Sie eine Beratung, um Ihre spezifische Situation zu besprechen.",
        es: "No espere nuestras publicaciones. Programe una consulta para discutir su situación específica.",
        ru: "Не ждите публикаций. Запишитесь на консультацию, чтобы обсудить вашу ситуацию.",
        fr: "N'attendez pas nos articles. Planifiez une consultation pour discuter de votre situation spécifique.",
        zh: "不要等待我们的博客文章。预约咨询以讨论您的具体情况。", ja: "ブログ記事をお待ちにならないでください。ご相談を予約して、具体的な状況についてお話しください。", ar: "لا تنتظر منشورات مدونتنا. حدد موعدًا للاستشارة لمناقشة حالتك المحددة.",
    },
    ctaButton: {
        en: "Contact Us", de: "Kontakt", es: "Contáctenos", fr: "Contactez-nous",
        ru: "Связаться с нами", zh: "联系我们", ja: "お問い合わせ", ar: "اتصل بنا"
    },
};

export default function BlogPage() {
    const { language } = useLanguage();
    
    return (
        <>
            <section className="blog-page">
                <section className="blog-hero">
                    <div className="container">
                        <h1>{uiText.pageTitle[language]}</h1>
                        <p className="hero-subtitle">
                            {uiText.heroSubtitle[language]}
                        </p>
                    </div>
                </section>

                <section className="blog-content">
                    <div className="container">
                        <div className="coming-soon-notice">
                            <h2>{uiText.comingSoonTitle[language]}</h2>
                            <p>{uiText.comingSoonText[language]}</p>
                        </div>

                        <h3 className="section-title">{uiText.upcomingTopics[language]}</h3>
                        <div className="blog-grid">
                            {blogPosts.map((post) => (
                                <article key={post.id} className="blog-card">
                                    <div className="blog-card-image">
                                        <span className="category-badge">{post.category[language]}</span>
                                    </div>
                                    <div className="blog-card-content">
                                        <span className="blog-date">{post.date[language]}</span>
                                        <h4>{post.title[language]}</h4>
                                        <p>{post.excerpt[language]}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="blog-cta">
                    <div className="container">
                        <h2>{uiText.ctaTitle[language]}</h2>
                        <p>{uiText.ctaSubtitle[language]}</p>
                        <Link href="/contact" className="btn btn-primary">{uiText.ctaButton[language]}</Link>
                    </div>
                </section>
            </section>

            <style jsx>{`
                .blog-page {
                    min-height: 100vh;
                }

                .blog-hero {
                    background: linear-gradient(135deg, var(--color-primary) 0%, #1a3a5c 100%);
                    color: white;
                    padding: 5rem 0;
                    text-align: center;
                }

                .blog-hero h1 {
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

                .blog-content {
                    padding: 4rem 0;
                    background: var(--color-background);
                }

                .coming-soon-notice {
                    background: white;
                    padding: 3rem;
                    border-radius: 12px;
                    text-align: center;
                    margin-bottom: 4rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    border-left: 4px solid var(--color-secondary);
                }

                .coming-soon-notice h2 {
                    color: var(--color-primary);
                    margin-bottom: 1rem;
                }

                .coming-soon-notice p {
                    color: var(--color-text);
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .section-title {
                    text-align: center;
                    color: var(--color-primary);
                    margin-bottom: 2rem;
                    font-size: 1.75rem;
                }

                .blog-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
                
                @media (min-width: 640px) {
                    .blog-grid {
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    }
                }

                .blog-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .blog-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                }

                .blog-card-image {
                    height: 160px;
                    background: linear-gradient(135deg, var(--color-primary) 0%, #1a3a5c 100%);
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 1rem;
                }

                .category-badge {
                    background: var(--color-secondary);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                .blog-card-content {
                    padding: 1.5rem;
                }

                .blog-date {
                    color: var(--color-secondary);
                    font-size: 0.85rem;
                    font-weight: 500;
                }

                .blog-card-content h4 {
                    color: var(--color-primary);
                    margin: 0.5rem 0 1rem;
                    font-size: 1.2rem;
                    line-height: 1.4;
                }

                .blog-card-content p {
                    color: var(--color-text);
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin: 0;
                }

                .blog-cta {
                    background: var(--color-primary);
                    color: white;
                    padding: 4rem 0;
                    text-align: center;
                }

                .blog-cta h2 {
                    color: white;
                    margin-bottom: 1rem;
                }

                .blog-cta p {
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

                @media (max-width: 768px) {
                    .blog-hero h1 {
                        font-size: 2rem;
                    }

                    .blog-grid {
                        grid-template-columns: 1fr;
                    }

                    .coming-soon-notice {
                        padding: 2rem;
                    }
                }
            `}</style>
        </>
    );
}
