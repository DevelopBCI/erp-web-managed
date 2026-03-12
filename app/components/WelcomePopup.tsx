'use client';

import { useState, useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;
const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_URL;

export default function WelcomePopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        // Check if popup was already shown in this session
        const popupShown = sessionStorage.getItem('welcomePopupShown');
        if (popupShown) return;

        // Fetch active welcome popup from API
        const fetchActivePopup = async () => {
            try {
                const res = await fetch(`${API_BASE}/welcome-popup/active.php`);
                const data = await res.json();
                if (data.status === 'success' && data.data) {
                    setImageSrc(`${IMAGE_BASE}${data.data.welcome_img}`);
                    // Show popup after a small delay for better UX
                    setTimeout(() => setIsOpen(true), 500);
                }
            } catch (error) {
                console.error('Failed to fetch welcome popup:', error);
            }
        };

        fetchActivePopup();
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        // Mark popup as shown for this session
        sessionStorage.setItem('welcomePopupShown', 'true');
    };

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closePopup();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !imageSrc) return null;

    return (
        <div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300"
            onClick={closePopup}
        >
            {/* Close button */}
            <button
                onClick={closePopup}
                className="absolute top-4 right-4 z-10000 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 group"
                aria-label="Close popup"
            >
                <svg
                    className="w-8 h-8 text-white group-hover:scale-110 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            {/* Image container */}
            <div
                className="relative max-w-[90vw] max-h-[90vh] animate-popup-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imageSrc}
                    alt="Welcome Popup"
                    className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-pointer"
                    onClick={closePopup}
                />
            </div>

            {/* Custom animation styles */}
            <style jsx global>{`
                @keyframes popup-in {
                    0% {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-popup-in {
                    animation: popup-in 0.3s ease-out forwards;
                }
            `}
            </style>
        </div>
    );
}
