"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CSSProperties } from 'react';
import classNames from 'classnames';

const Stagethird: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const styles = {
        loginContainer: {
            display: 'flex',
            alignItems: 'flex-start',
            marginLeft: 'auto',
        } as CSSProperties,
        loginText: {
            color: 'black',
            fontSize: '12px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
        } as CSSProperties,
        arrow: {
            marginLeft: '8px',
            transition: 'transform 0.2s ease',
        } as CSSProperties,
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        } as CSSProperties,
        card: {
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center' as 'center',
            margin: '10px',
            width: 'calc(100% - 20px)', // Full width with margin
            height: '130px', // Adjust the height as needed
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid gray', // Default border color
            transition: 'border-color 0.3s ease',
            maxWidth: '400px', // Max width to ensure cards don't stretch excessively
        } as CSSProperties,
        image: {
            width: '70px',
            height: '70px',
            marginLeft: '10px', // Margin left for the image
        } as CSSProperties,
        checkboxContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column', // Column direction for mobile view
            marginTop: '10px', // Margin top for mobile layout
        } as CSSProperties,
        checkbox: {
            width: '20px',
            height: '20px',
            marginBottom: '5px', // Margin bottom for the checkbox
        } as CSSProperties,
        footer: {
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        } as CSSProperties,
    };

    const handleMouseEnter = (index: number) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div>
            <div className="absolute top-1 left-0 z-40 p-4">
                <Image
                    src="/four.png"
                    alt="Logo"
                    width={16}
                    height={50}
                />
            </div>
            <div className='absolute top-0 right-0 mt-3 z-40 p-4'>
                <div style={styles.loginContainer}>
                    <Link href="/login">
                        <div style={styles.loginText}>
                            Skip to dashboard
                            <span style={styles.arrow}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-right">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
            <center>
                <h1 className='mt-14 text-2xl'>What&apos;s your goal with Franchain?</h1>
                <p className='text-1xl mt-1'>No wrong answers here. And it doesn&apos;t matter if you change your mind later.</p>
                <br /><br />
                <div className="hidden md:flex" style={styles.cardContainer}>
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className={classNames("card img p-10", { "border-blue-400": hoveredCard === index })}
                            style={{ ...styles.card, borderColor: hoveredCard === index ? 'blue' : 'gray' }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                                <Image
                                    src="/image.png"
                                    alt='image'
                                    width={60}
                                    height={60}
                                    style={styles.image}
                                />
                                <p className='font-semibold text-1xl' style={{ margin: '0 10px' }}>Reduce failed payments</p>
                                <input type="checkbox" style={styles.checkbox} />
                            </div>
                        </div>
                    ))}
                </div> 
                <div style={styles.footer}>
                    <button className="button text-white w-full md:w-fit py-2 text-sm mt-3" type="submit">Continue</button>
                </div>
            </center>
        </div>
    );
}

export default Stagethird;
