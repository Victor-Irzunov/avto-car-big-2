'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

export default function BackToPrev({ className = '', fallback = '/' }) {
	const router = useRouter();

	const onBack = () => {
		try {
			if (typeof window !== 'undefined' && window.history.length > 1) {
				router.back();
			} else {
				router.push(fallback);
			}
		} catch {
			router.push(fallback);
		}
	};

	return (
		<>
			<button
				type="button"
				onClick={onBack}
				aria-label="Назад"
				className={`${className} flex items-center space-x-2`}
			>
				<span className="inline-flex" style={{ willChange: 'transform' }}>
					<Image src="/svg/arrow-up-right.svg" alt="Назад" width={20} height={20} className='rotate-[225deg]' />
				</span>
				<span className="sd:text-xs xz:text-[9px] uppercase font-medium font-system">Назад</span>
			</button>
		</>
	);
}
