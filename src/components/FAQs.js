'use client'

import { useState } from "react";
import { useTranslations } from "next-intl";

const FAQS = [
	{ q: "q1", a: "a1" },
	{ q: "q2", a: "a2" },
	{ q: "q3", a: "a3" },
	{ q: "q4", a: "a4" },
	{ q: "q5", a: "a5" },
	{ q: "q6", a: "a6" }
];

function FAQItem({ q, a, open, onClick }) {
	return (
		<div className="w-10/12 md:w-full mx-auto rounded-xl bg-primary-foreground shadow mb-4  transition-all hover:bg-primary-foreground/80 hover:scale-105 hover:shadow-xl">
			<button
				className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-primary focus:outline-none text-left"
				onClick={onClick}
				aria-expanded={open}
			>
				<span>{q}</span>
				<span
					className={`ml-4 transition-transform ${
						open ? "rotate-90" : ""
					}`}
				>
					▶
				</span>
			</button>
			{open && (
				<div className="px-6 py-4 text-base text-primary border-t border-primary/10">
					{a}
				</div>
			)}
		</div>
	);
}

export default function FAQs() {
	const t = useTranslations('FAQs');
	const [openIdx, setOpenIdx] = useState(null);
	const [showAll, setShowAll] = useState(false);
	const visibleFaqs = showAll ? FAQS : FAQS.slice(0, 8);

	return (
		<section
			id="faqs-section"
			className="w-full max-w-3xl mx-auto py-16 relative"
		>
			<h2 className="text-3xl font-bold mb-8 text-center">
				{t('title')}
			</h2>
			<div className="relative">
				{visibleFaqs.map((faq, idx) => (
					<FAQItem
						key={idx}
						q={t(faq.q)}
						a={t(faq.a)}
						open={openIdx === idx}
						onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
					/>
				))}
				{!showAll && FAQS.length > 8 && (
					<div className="absolute left-0 right-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-background via-background/80 to-transparent rounded-b-xl" />
				)}
			</div>
			{!showAll && FAQS.length > 8 && (
				<div className="flex justify-center mt-2">
					<button
						className="px-6 py-2 rounded-full bg-primary text-background font-semibold shadow hover:bg-primary/80 hover:scale-110 hover:shadow-xl transition-all"
						onClick={() => setShowAll(true)}
					>
						{t('showMore')}
					</button>
				</div>
			)}
		</section>
	);
}
