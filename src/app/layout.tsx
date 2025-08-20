import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';
import BackToTopButton from '../components/BackToTopButton';
import { ExamProvider } from './context/ExamContext';

const roboto = Roboto({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
	metadataBase: new URL('https://section-library.com'),
	title: 'مكتبة سيكشن | Section Library - بيع وشراء الكتب',
	description:
		'مكتبة سيكشن - وجهتك لاقتناء أحدث وأهم الكتب في مختلف المجالات: الأدب، التاريخ، التنمية البشرية، الكتب العلمية، والدراسية. نوفر كتبًا أصلية بأسعار مناسبة مع خدمة التوصيل لجميع المحافظات.',
	openGraph: {
		title: 'مكتبة سيكشن | Section Library',
		description:
			'اكتشف مكتبة سيكشن — مكتبتك الشاملة التي تضم آلاف الكتب والروايات العربية والعالمية. نوفر روايات حديثة وكلاسيكيات، مراجع علمية، وكتب للأطفال. تسوق الآن بسهولة عبر موقعنا الإلكتروني.',
		type: 'website',
		locale: 'ar_EG',
		url: 'https://section-library.com/',
		images: [
			{
				url: 'https://section-library.com/favicon.png',
				alt: 'مكتبة سيكشن - كتب وروايات في جميع المجالات',
				width: 800,
				height: 600,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'مكتبة سيكشن | Section Library',
		description:
			'مكتبة سيكشن - مكانك المثالي لاقتناء الكتب والروايات. تشكيلة واسعة من الأدب العربي والعالمي، الكتب التعليمية، وكتب الأطفال. تسوق الآن عبر الإنترنت بسهولة وأمان.',
		images: ['/favicon.png'],
	},
	icons: {
		icon: '/favicon.png',
		shortcut: '/favicon.ico',
		apple: '/favicon.png',
		other: {
			rel: 'manifest',
			url: '/manifest.json',
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ar'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='author'
					content='مكتبة سيكشن | Section Library'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
				<meta
					name='application-name'
					content='مكتبة سيكشن - بيع وشراء الكتب'
				/>
				<meta
					name='image'
					content='https://section-library.com/favicon.png'
				/>
				<link
					rel='canonical'
					href='https://section-library.com/'
				/>

				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon.png'
				/>
				<link
					rel='shortcut icon'
					href='/favicon.ico'
					type='image/x-icon'
				/>
				<link
					rel='manifest'
					href='/manifest.json'
				/>

				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify([
							{
								'@context': 'https://schema.org',
								'@type': 'Organization',
								name: 'مكتبة سيكشن | Section Library',
								url: 'https://section-library.com/',
								logo: 'https://section-library.com/favicon.png',
								sameAs: [
									'https://www.facebook.com/sectionlibrary',
									'https://wa.me/201000000000',
								],
								description:
									'مكتبة سيكشن وجهتك لاقتناء الكتب والروايات في مختلف المجالات: الأدب، التاريخ، التنمية البشرية، العلوم، الكتب الدراسية وكتب الأطفال. نوفر كتبًا أصلية بأسعار مناسبة مع خدمة توصيل لجميع المحافظات.',
								address: {
									'@type': 'PostalAddress',
									addressLocality: 'القاهرة',
									addressRegion: 'مصر',
									addressCountry: 'EG',
								},
								contactPoint: {
									'@type': 'ContactPoint',
									telephone: '+20-100-000-0000',
									contactType: 'خدمة العملاء',
									areaServed: 'EG',
									availableLanguage: ['ar', 'en'],
								},
							},
							{
								'@context': 'https://schema.org',
								'@type': 'WebSite',
								url: 'https://section-library.com/',
								name: 'مكتبة سيكشن | Section Library',
								potentialAction: {
									'@type': 'SearchAction',
									target: 'https://section-library.com/?s={search_term_string}',
									'query-input': 'required name=search_term_string',
								},
							},
							{
								'@context': 'https://schema.org',
								'@type': 'ImageObject',
								contentUrl: 'https://section-library.com/favicon.png',
								url: 'https://section-library.com/favicon.png',
								width: 800,
								height: 600,
								name: 'شعار مكتبة سيكشن',
							},
						]),
					}}
				/>
			</head>

			<body
				className={`bg-gradient-to-r relative ${roboto.className} text-darkprimary dark:text-primary custom-scroll overflow-x-hidden bg-primary dark:bg-darkprimary`}>
				<div className='fixed top-0 z-50'>
					<Header />
				</div>
				<div className='pt-32 pb-28  overflow-x-hidden xl:w-10/12 m-auto container px-4'>
					<ExamProvider>{children}</ExamProvider>
				</div>
				<Footer />
				<BackToTopButton />
			</body>
		</html>
	);
}
