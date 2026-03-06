'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function PageViewTracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Function to detect device type
        const getDeviceType = () => {
            const ua = navigator.userAgent;
            if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
                return 'tablet';
            }
            if (
                /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                    ua
                )
            ) {
                return 'mobile';
            }
            return 'desktop';
        };

        // Function to get or create unique visitor ID
        const getVisitorId = () => {
            let vid = localStorage.getItem('visitor_id');
            if (!vid) {
                vid = crypto.randomUUID();
                localStorage.setItem('visitor_id', vid);
            }
            return vid;
        };

        const trackPageView = async () => {
            try {
                const deviceType = getDeviceType();
                const visitorId = getVisitorId();
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;

                if (!apiUrl) {
                    console.warn('API URL not configured');
                    return;
                }

                await fetch(`${apiUrl}/stats/collect.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        page: pathname,
                        device_type: deviceType,
                        visitor_id: visitorId,
                    }),
                });
            } catch (error) {
                console.error('Failed to track page view:', error);
            }
        };

        trackPageView();

    }, [pathname]);

    return null;
}
