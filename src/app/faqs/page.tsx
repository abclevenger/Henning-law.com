"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/constants/languages';

interface FAQ {
    id: number;
    category: Record<string, string>;
    question: Record<string, string>;
    answer: Record<string, string>;
}

const faqs: FAQ[] = [
    {
        id: 1,
        category: {
            en: "General", de: "Allgemein", es: "General", fr: "Général", zh: "一般", ja: "一般", ar: "عام"
        },
        question: {
            en: "Do you work with clients outside the U.S.?",
            de: "Arbeiten Sie auch mit Mandanten außerhalb der USA?",
            es: "¿Trabajan con clientes fuera de EE.UU.?",
            fr: "Travaillez-vous avec des clients en dehors des États-Unis ?",
            zh: "您是否与美国境外的客户合作？",
            ja: "米国外のクライアントとも仕事をしていますか？",
            ar: "هل تعملون مع عملاء خارج الولايات المتحدة؟",
        },
        answer: {
            en: "Yes. We regularly assist clients abroad through virtual consultations and strategic planning. Our clients come from around the world, and we are experienced in coordinating across time zones and international requirements.",
            de: "Ja. Wir beraten regelmäßig Mandanten im Ausland per Videokonferenz und strategischer Planung. Unsere Mandanten kommen aus der ganzen Welt, und wir sind erfahren in der Koordination über Zeitzonen und internationale Anforderungen hinweg.",
            es: "Sí. Asistimos regularmente a clientes en el extranjero a través de consultas virtuales y planificación estratégica. Nuestros clientes vienen de todo el mundo.",
            fr: "Oui. Nous assistons régulièrement des clients à l'étranger par des consultations virtuelles et une planification stratégique. Nos clients viennent du monde entier.",
            zh: "是的。我们定期通过虚拟咨询和战略规划为海外客户提供帮助。我们的客户来自世界各地。",
            ja: "はい。バーチャル相談と戦略的計画を通じて、海外のクライアントを定期的に支援しています。",
            ar: "نعم. نساعد العملاء في الخارج بانتظام من خلال الاستشارات الافتراضية والتخطيط الاستراتيجي.",
        }
    },
    {
        id: 2,
        category: {
            en: "General", de: "Allgemein", es: "General", fr: "Général", zh: "一般", ja: "一般", ar: "عام"
        },
        question: {
            en: "How do we start a consultation?",
            de: "Wie starten wir eine Beratung?",
            es: "¿Cómo iniciamos una consulta?",
            fr: "Comment commencer une consultation ?",
            zh: "我们如何开始咨询？",
            ja: "相談はどのように始めますか？",
            ar: "كيف نبدأ الاستشارة؟",
        },
        answer: {
            en: "Start by contacting us with a short summary of your goals. We will outline the next steps and required documents. You can reach us through our contact form, by phone, or by email.",
            de: "Beginnen Sie mit einer kurzen Zusammenfassung Ihrer Ziele. Wir skizzieren die nächsten Schritte und benötigten Unterlagen. Sie erreichen uns über unser Kontaktformular, telefonisch oder per E-Mail.",
            es: "Comience contactándonos con un breve resumen de sus objetivos. Le indicaremos los próximos pasos y documentos requeridos.",
            fr: "Commencez par nous contacter avec un bref résumé de vos objectifs. Nous décrirons les prochaines étapes et les documents requis.",
            zh: "首先联系我们，简要说明您的目标。我们将概述下一步和所需文件。",
            ja: "まず、目標の簡単な概要を添えてご連絡ください。次のステップと必要書類をご案内します。",
            ar: "ابدأ بالاتصال بنا مع ملخص قصير لأهدافك. سنحدد الخطوات التالية والوثائق المطلوبة.",
        }
    },
    {
        id: 3,
        category: {
            en: "Visas & Immigration", de: "Visa & Einwanderung", es: "Visas e Inmigración", fr: "Visas et Immigration", zh: "签证和移民", ja: "ビザと移民", ar: "التأشيرات والهجرة"
        },
        question: {
            en: "Which visa categories are common for professionals and companies?",
            de: "Welche Visakategorien sind für Fachkräfte und Unternehmen üblich?",
            es: "¿Qué categorías de visa son comunes para profesionales y empresas?",
            fr: "Quelles catégories de visa sont courantes pour les professionnels et entreprises ?",
            zh: "专业人士和公司常用哪些签证类别？",
            ja: "専門家や企業に一般的なビザカテゴリーは何ですか？",
            ar: "ما هي فئات التأشيرات الشائعة للمحترفين والشركات؟",
        },
        answer: {
            en: "Common options include E-1/E-2 treaty visas for traders and investors, L-1 intra-company transfers for multinational employees, O-1 visas for individuals with extraordinary ability, and EB categories for permanent residency through employment.",
            de: "Häufige Optionen sind E-1/E-2 Investorvisa, L-1 für firmeninterne Transfers, O-1 für Personen mit außergewöhnlichen Fähigkeiten sowie EB-Kategorien für die dauerhafte Aufenthaltsgenehmigung durch Beschäftigung.",
            es: "Las opciones comunes incluyen visas de tratado E-1/E-2 para comerciantes e inversores, transferencias intraempresariales L-1, visas O-1 para personas con habilidad extraordinaria y categorías EB para residencia permanente.",
            fr: "Les options courantes comprennent les visas de traité E-1/E-2 pour les commerçants et investisseurs, les transferts intra-entreprise L-1, les visas O-1 pour les personnes aux capacités extraordinaires et les catégories EB pour la résidence permanente.",
            zh: "常见选项包括E-1/E-2条约签证、L-1公司内部调动签证、O-1杰出人才签证，以及通过就业获得永久居留的EB类别。",
            ja: "一般的な選択肢には、E-1/E-2条約ビザ、L-1企業内転勤、O-1卓越した能力を持つ個人向けビザ、およびEBカテゴリーがあります。",
            ar: "تشمل الخيارات الشائعة تأشيرات المعاهدة E-1/E-2 للتجار والمستثمرين، والتحويلات داخل الشركة L-1، وتأشيرات O-1 للأفراد ذوي القدرات الاستثنائية، وفئات EB للإقامة الدائمة.",
        }
    },
    {
        id: 4,
        category: {
            en: "Visas & Immigration", de: "Visa & Einwanderung", es: "Visas e Inmigración", fr: "Visas et Immigration", zh: "签证和移民", ja: "ビザと移民", ar: "التأشيرات والهجرة"
        },
        question: {
            en: "How long does the visa application process take?",
            de: "Wie lange dauert der Visumantragsprocess?",
            es: "¿Cuánto tiempo toma el proceso de solicitud de visa?",
            fr: "Combien de temps prend le processus de demande de visa ?",
            zh: "签证申请流程需要多长时间？",
            ja: "ビザ申請プロセスはどのくらいかかりますか？",
            ar: "كم من الوقت تستغرق عملية طلب التأشيرة؟",
        },
        answer: {
            en: "Processing times vary significantly depending on the visa category, USCIS workload, and whether premium processing is available. During your consultation, we will provide realistic timeline estimates based on current processing times.",
            de: "Die Bearbeitungszeiten variieren je nach Visakategorie, USCIS-Arbeitsbelastung und Verfügbarkeit der Premium-Bearbeitung. In der Beratung geben wir realistische Zeitschätzungen basierend auf aktuellen Bearbeitungszeiten.",
            es: "Los tiempos de procesamiento varían significativamente según la categoría de visa, la carga de trabajo de USCIS y si está disponible el procesamiento premium.",
            fr: "Les délais de traitement varient considérablement selon la catégorie de visa, la charge de travail de l'USCIS et la disponibilité du traitement premium.",
            zh: "处理时间因签证类别、USCIS工作量以及是否提供加急处理而有很大差异。",
            ja: "処理時間はビザカテゴリー、USCISの作業負荷、プレミアム処理の利用可否によって大きく異なります。",
            ar: "تختلف أوقات المعالجة بشكل كبير حسب فئة التأشيرة وعبء عمل USCIS وما إذا كانت المعالجة المتميزة متاحة.",
        }
    },
    {
        id: 5,
        category: {
            en: "Business & Corporate", de: "Unternehmen", es: "Empresas", fr: "Affaires", zh: "商业", ja: "ビジネス", ar: "الأعمال"
        },
        question: {
            en: "Do you advise on entity formation or corporate structure for U.S. operations?",
            de: "Beraten Sie zu Unternehmensgründung oder -struktur in den USA?",
            es: "¿Asesoran sobre formación de entidades o estructura corporativa para operaciones en EE.UU.?",
            fr: "Conseillez-vous sur la création d'entités ou la structure d'entreprise pour les opérations aux États-Unis ?",
            zh: "你们是否就美国业务的实体组建或公司结构提供建议？",
            ja: "米国での事業のための法人設立や企業構造についてアドバイスしていますか？",
            ar: "هل تقدمون المشورة بشأن تكوين الكيانات أو الهيكل المؤسسي للعمليات في الولايات المتحدة؟",
        },
        answer: {
            en: "We advise on entity formation and corporate structure in connection with immigration objectives—for example, when a visa or residency strategy requires a U.S. entity. Immigration counsel only; we do not provide investment, tax, or financial advice.",
            de: "Wir beraten zu Unternehmensgründung und -struktur im Zusammenhang mit Einwanderungszielen. Nur Einwanderungsberatung—keine Anlage-, Steuer- oder Finanzberatung.",
            es: "Sí. Asesoramos sobre formación de entidades y estructura corporativa en relación con objetivos migratorios. Solo asesoría migratoria; no brindamos asesoría de inversión, impuestos o financiera.",
            fr: "Nous conseillons sur la création d'entités et la structure d'entreprise en lien avec les objectifs d'immigration. Conseil en immigration uniquement.",
            zh: "我们就与移民目标相关的实体组建和公司结构提供建议。仅移民咨询；不提供投资、税务或财务建议。",
            ja: "移民の目的に関連する法人設立や企業構造についてアドバイスします。移民相談のみ。投資、税務、金融のアドバイスは行いません。",
            ar: "نقدم المشورة بشأن تكوين الكيانات والهيكل المؤسسي فيما يتعلق بأهداف الهجرة. استشارات الهجرة فقط.",
        }
    },
    {
        id: 6,
        category: {
            en: "Business & Property", de: "Geschäft & Immobilien", es: "Negocios y Propiedad", fr: "Affaires et Propriété", zh: "商业与房产", ja: "ビジネスと不動産", ar: "الأعمال والعقارات"
        },
        question: {
            en: "Do I need a visa to buy property in the United States?",
            de: "Brauche ich ein Visum, um Immobilien in den USA zu kaufen?",
            es: "¿Necesito una visa para comprar propiedad en Estados Unidos?",
            fr: "Ai-je besoin d'un visa pour acheter une propriété aux États-Unis ?",
            zh: "在美国购买房产需要签证吗？",
            ja: "米国で不動産を購入するにはビザが必要ですか？",
            ar: "هل أحتاج إلى تأشيرة لشراء عقار في الولايات المتحدة؟",
        },
        answer: {
            en: "No, you do not need a visa to purchase property in the United States. We can advise on legal and ownership-structure considerations for non-resident owners in connection with immigration or residency objectives. We do not provide tax or financial advice.",
            de: "Nein, Sie benötigen kein Visum, um Immobilien in den USA zu kaufen. Es gibt jedoch wichtige steuerliche, erbschaftsrechtliche und eigentumsstrukturelle Überlegungen für nicht-residente Immobilieneigentümer, bei denen wir Sie unterstützen können.",
            es: "No, no necesita una visa para comprar propiedad en Estados Unidos. Sin embargo, hay consideraciones importantes de impuestos, planificación patrimonial y estructura de propiedad para propietarios no residentes.",
            fr: "Non, vous n'avez pas besoin d'un visa pour acheter une propriété aux États-Unis. Cependant, il y a des considérations importantes en matière fiscale, de planification successorale et de structure de propriété pour les propriétaires non-résidents.",
            zh: "不，您不需要签证即可在美国购买房产。但是，非居民房产所有者需要考虑重要的税务、遗产规划和所有权结构问题。",
            ja: "いいえ、米国で不動産を購入するためにビザは必要ありません。ただし、非居住者の不動産所有者には、税務、相続計画、所有権構造に関する重要な考慮事項があります。",
            ar: "لا، لا تحتاج إلى تأشيرة لشراء عقار في الولايات المتحدة. ومع ذلك، هناك اعتبارات ضريبية مهمة وتخطيط للتركة وهيكل الملكية لأصحاب العقارات غير المقيمين.",
        }
    },
    {
        id: 7,
        category: {
            en: "Family Immigration", de: "Familieneinwanderung", es: "Inmigración Familiar", fr: "Immigration Familiale", zh: "家庭移民", ja: "家族移民", ar: "الهجرة العائلية"
        },
        question: {
            en: "Can I sponsor my spouse for a green card?",
            de: "Kann ich meinen Ehepartner für eine Green Card sponsern?",
            es: "¿Puedo patrocinar a mi cónyuge para una tarjeta verde?",
            fr: "Puis-je parrainer mon conjoint pour une carte verte ?",
            zh: "我可以为配偶申请绿卡吗？",
            ja: "配偶者のグリーンカードをスポンサーできますか？",
            ar: "هل يمكنني كفالة زوجي/زوجتي للحصول على البطاقة الخضراء؟",
        },
        answer: {
            en: "U.S. citizens and permanent residents can sponsor their spouses for green cards. The process and timeline differ depending on your immigration status. We guide families through the entire process, from petition filing to interview preparation.",
            de: "US-Staatsbürger und Daueraufenthaltsberechtigte können ihre Ehepartner für Green Cards sponsern. Der Prozess und die Zeitrahmen unterscheiden sich je nach Ihrem Einwanderungsstatus. Wir begleiten Familien durch den gesamten Prozess.",
            es: "Los ciudadanos estadounidenses y residentes permanentes pueden patrocinar a sus cónyuges para tarjetas verdes. El proceso y el cronograma difieren según su estatus migratorio.",
            fr: "Les citoyens américains et résidents permanents peuvent parrainer leurs conjoints pour des cartes vertes. Le processus et le calendrier diffèrent selon votre statut d'immigration.",
            zh: "美国公民和永久居民可以为配偶申请绿卡。流程和时间因您的移民身份而异。",
            ja: "米国市民と永住者は配偶者のグリーンカードをスポンサーできます。プロセスとタイムラインは移民ステータスによって異なります。",
            ar: "يمكن للمواطنين الأمريكيين والمقيمين الدائمين كفالة أزواجهم للحصول على البطاقات الخضراء. تختلف العملية والجدول الزمني حسب حالة الهجرة الخاصة بك.",
        }
    },
    {
        id: 8,
        category: {
            en: "Family Immigration", de: "Familieneinwanderung", es: "Inmigración Familiar", fr: "Immigration Familiale", zh: "家庭移民", ja: "家族移民", ar: "الهجرة العائلية"
        },
        question: {
            en: "How long does family-based immigration take?",
            de: "Wie lange dauert familienbasierte Einwanderung?",
            es: "¿Cuánto tiempo toma la inmigración basada en familia?",
            fr: "Combien de temps prend l'immigration familiale ?",
            zh: "家庭移民需要多长时间？",
            ja: "家族ベースの移民にはどのくらい時間がかかりますか？",
            ar: "كم من الوقت تستغرق الهجرة القائمة على الأسرة؟",
        },
        answer: {
            en: "For immediate relatives of U.S. citizens (spouses, parents, unmarried children under 21), there is no wait for a visa number, though processing still takes several months to over a year. Other family categories have longer waits due to annual limits.",
            de: "Für unmittelbare Verwandte von US-Staatsbürgern (Ehepartner, Eltern, unverheiratete Kinder unter 21) gibt es keine Wartezeit für eine Visumnummer, obwohl die Bearbeitung mehrere Monate bis über ein Jahr dauert. Andere Familienkategorien haben längere Wartezeiten.",
            es: "Para parientes inmediatos de ciudadanos estadounidenses (cónyuges, padres, hijos solteros menores de 21 años), no hay espera para un número de visa, aunque el procesamiento aún toma varios meses a más de un año.",
            fr: "Pour les parents proches des citoyens américains (conjoints, parents, enfants célibataires de moins de 21 ans), il n'y a pas d'attente pour un numéro de visa, bien que le traitement prenne encore plusieurs mois à plus d'un an.",
            zh: "对于美国公民的直系亲属（配偶、父母、21岁以下未婚子女），无需等待签证号码，但处理仍需要几个月到一年以上的时间。",
            ja: "米国市民の近親者（配偶者、両親、21歳未満の未婚の子供）の場合、ビザ番号の待機はありませんが、処理には数ヶ月から1年以上かかります。",
            ar: "بالنسبة للأقارب المباشرين للمواطنين الأمريكيين (الأزواج والآباء والأطفال غير المتزوجين الذين تقل أعمارهم عن 21 عامًا)، لا يوجد انتظار لرقم التأشيرة، على الرغم من أن المعالجة لا تزال تستغرق عدة أشهر إلى أكثر من عام.",
        }
    }
];

// UI Text translations
const uiText = {
    pageTitle: {
        en: "Frequently Asked Questions", de: "Häufig gestellte Fragen", es: "Preguntas frecuentes", 
        fr: "Questions fréquemment posées", zh: "常见问题", ja: "よくある質問", ar: "الأسئلة الشائعة"
    },
    heroSubtitle: {
        en: "Find answers to common questions about U.S. immigration, visas, and our services.",
        de: "Finden Sie Antworten auf häufige Fragen zu US-Einwanderung, Visa und unseren Leistungen.",
        es: "Encuentre respuestas a preguntas comunes sobre inmigración a EE.UU., visas y nuestros servicios.",
        fr: "Trouvez des réponses aux questions courantes sur l'immigration américaine, les visas et nos services.",
        zh: "查找有关美国移民、签证和我们服务的常见问题解答。",
        ja: "米国移民、ビザ、当事務所のサービスに関するよくある質問への回答をご覧ください。",
        ar: "اعثر على إجابات للأسئلة الشائعة حول الهجرة إلى الولايات المتحدة والتأشيرات وخدماتنا.",
    },
    allCategories: {
        en: "All", de: "Alle", es: "Todos", fr: "Tous", zh: "全部", ja: "すべて", ar: "الكل"
    },
    ctaTitle: {
        en: "Still Have Questions?", de: "Noch Fragen?", es: "¿Todavía tiene preguntas?",
        fr: "Vous avez encore des questions ?", zh: "还有问题吗？", ja: "まだ質問がありますか？", ar: "لا تزال لديك أسئلة؟"
    },
    ctaSubtitle: {
        en: "Contact us for personalized guidance on your immigration journey.",
        de: "Kontaktieren Sie uns für eine individuelle Beratung zu Ihrer Einwanderung.",
        es: "Contáctenos para orientación personalizada en su viaje de inmigración.",
        fr: "Contactez-nous pour un accompagnement personnalisé dans votre parcours d'immigration.",
        zh: "联系我们获取个性化的移民指导。",
        ja: "移民の旅についての個別ガイダンスについてお問い合わせください。",
        ar: "اتصل بنا للحصول على إرشادات شخصية في رحلة الهجرة الخاصة بك.",
    },
    ctaButton: {
        en: "Contact Us", de: "Kontakt", es: "Contáctenos", fr: "Contactez-nous", 
        zh: "联系我们", ja: "お問い合わせ", ar: "اتصل بنا"
    },
};

export default function FAQsPage() {
    const { language } = useLanguage();
    const [openId, setOpenId] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("All");

    // Get unique categories in current language
    const categorySet = new Set(faqs.map(faq => faq.category[language]));
    const categories = [uiText.allCategories[language], ...Array.from(categorySet)];
    
    const filteredFaqs = activeCategory === uiText.allCategories[language]
        ? faqs 
        : faqs.filter(faq => faq.category[language] === activeCategory);

    const toggleFaq = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    // FAQ structured data for SEO (uses current language)
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question[language],
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer[language],
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <section className="faqs-page">
                <section className="faqs-hero">
                    <div className="container">
                        <h1>{uiText.pageTitle[language]}</h1>
                        <p className="hero-subtitle">
                            {uiText.heroSubtitle[language]}
                        </p>
                    </div>
                </section>

                <section className="faqs-content">
                    <div className="container">
                        <div className="category-filters">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="faqs-list">
                            {filteredFaqs.map((faq) => (
                                <div 
                                    key={faq.id} 
                                    className={`faq-item ${openId === faq.id ? 'open' : ''}`}
                                >
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleFaq(faq.id)}
                                        aria-expanded={openId === faq.id}
                                    >
                                        <span className="faq-category-tag">{faq.category[language]}</span>
                                        <span className="question-text">{faq.question[language]}</span>
                                        <span className="faq-icon">{openId === faq.id ? '−' : '+'}</span>
                                    </button>
                                    <div className="faq-answer">
                                        <p>{faq.answer[language]}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="faqs-cta">
                    <div className="container">
                        <h2>{uiText.ctaTitle[language]}</h2>
                        <p>{uiText.ctaSubtitle[language]}</p>
                        <Link href="/contact" className="btn btn-primary">{uiText.ctaButton[language]}</Link>
                    </div>
                </section>
            </section>

            <style jsx>{`
                .faqs-page {
                    min-height: 100vh;
                }

                .faqs-hero {
                    background: linear-gradient(135deg, var(--color-primary) 0%, #1a3a5c 100%);
                    color: white;
                    padding: 5rem 0;
                    text-align: center;
                }

                .faqs-hero h1 {
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

                .faqs-content {
                    padding: 4rem 0;
                    background: var(--color-background);
                }

                .category-filters {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    margin-bottom: 3rem;
                    justify-content: center;
                }

                .filter-btn {
                    background: white;
                    border: 2px solid var(--color-border);
                    padding: 0.75rem 1.5rem;
                    border-radius: 30px;
                    font-size: 0.95rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    color: var(--color-text);
                }

                .filter-btn:hover {
                    border-color: var(--color-secondary);
                    color: var(--color-secondary);
                }

                .filter-btn.active {
                    background: var(--color-secondary);
                    border-color: var(--color-secondary);
                    color: white;
                }

                .faqs-list {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .faq-item {
                    background: white;
                    border-radius: 12px;
                    margin-bottom: 1rem;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                }

                .faq-question {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.5rem;
                    background: none;
                    border: none;
                    cursor: pointer;
                    text-align: left;
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--color-primary);
                    transition: background 0.3s ease;
                }

                .faq-question:hover {
                    background: var(--color-background);
                }

                .faq-category-tag {
                    background: var(--color-secondary);
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 500;
                    white-space: nowrap;
                }

                .question-text {
                    flex: 1;
                }

                .faq-icon {
                    font-size: 1.5rem;
                    color: var(--color-secondary);
                    flex-shrink: 0;
                }

                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease, padding 0.3s ease;
                }

                .faq-item.open .faq-answer {
                    max-height: 500px;
                    padding: 0 1.5rem 1.5rem;
                }

                .faq-answer p {
                    color: var(--color-text);
                    line-height: 1.8;
                    margin: 0;
                }

                .faqs-cta {
                    background: var(--color-primary);
                    color: white;
                    padding: 4rem 0;
                    text-align: center;
                }

                .faqs-cta h2 {
                    color: white;
                    margin-bottom: 1rem;
                }

                .faqs-cta p {
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
                    .faqs-hero h1 {
                        font-size: 2rem;
                    }

                    .faq-question {
                        flex-wrap: wrap;
                        padding: 1rem;
                    }

                    .faq-category-tag {
                        order: -1;
                        width: auto;
                    }

                    .question-text {
                        width: 100%;
                        order: 1;
                        margin-top: 0.5rem;
                    }

                    .faq-icon {
                        position: absolute;
                        right: 1rem;
                        top: 1rem;
                    }

                    .faq-item {
                        position: relative;
                    }
                }
            `}</style>
        </>
    );
}
