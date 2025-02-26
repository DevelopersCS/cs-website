import Head from 'next/head';

const SEO = ({ title, description }: {
    title: string,
    description: string
}) => {
    return (
        <Head>
            <title>{title} | Cybersecur</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="Segurança Cibernética, Proteção Digital, Cyber Security" />
            <meta name="author" content="Cybersecur Angola" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://cybersecur.co.ao" />
            <meta property="og:image" content="https://cybersecur.co.ao/og-image.jpg" />
        </Head>
    );
};

export default SEO;
