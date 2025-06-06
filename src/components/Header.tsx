"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { fetchProjectData } from '@/utils/api';
import { useState, useEffect } from 'react';

export default function Header() {

    const pathname      = usePathname();
    const isProjectPage = pathname.includes("/projects/");

    const [title, setTitle] = useState("Kaki Kagatan");

    useEffect(()=>{
        if (isProjectPage) {
            const projectId = pathname.split('/projects/')[1];
            fetchProjectData(projectId).then(res => {
                setTitle(res.title.rendered);
            }).catch(err => {
                console.error("Error fetching project data:", err);
            });
        } else {
            setTitle("Kaki Kagatan");
        }
    },[pathname])

    return (
        <header className={`
            card-coloured w-full h-full flex items-center z-100 ${pathname.includes("/projects/") ? "col-span-2" : ""}`}>
            <Link href={"/"}>
                <p className='screen-reader-text'>Home</p>
                <svg viewBox="0 0 512 512" className='link-icons w-10'>
                    <g>
                        <path d="M46.82,20.5l-0.29,228.23c0,0,13.49,112.1,129.47,110.38l0.29-231.96C176.29,127.15,154.76,16.62,46.82,20.5z"
                        />
                        <path d="M436.04,10.02c9-4.07,19.54,0.56,22.57,9.96c3.89,12.06,7.46,33.66,6.77,72.15
            c-1.37,76.29-142.27,119.95-202.6,159.37c-4.54,2.96-4.2,7.25,0.73,9.5c37.44,17.08,144.92,66.42,171.44,97.83
            c32.73,38.76,30.4,61.19,30.4,61.19l-0.12,38.94c0.04,9.77-1.74,19.48-5.32,28.57c-1.23,3.12-2.72,6.48-4.52,9.97
            c-2.77,5.38-9.38,7.51-14.78,4.77c-33.54-17.07-149.17-76.54-197.33-109.25c-7.89-5.36-14.87-11.93-20.66-19.5
            c-9.82-12.82-23.24-34.3-23.79-56.46l0.22-125.09c0,0-2.82-60.21,114.3-114.73c5.27-2.45,10.42-5.14,15.42-8.09
            C349.73,56.74,407.7,22.84,436.04,10.02z"/>
                    </g>
                </svg>
            </Link>
            <h1 className='font-gabarito text-center text-2xl mobile-s:text-xl w-full'>{title}</h1>
        </header>
    );
}