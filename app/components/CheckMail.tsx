"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from './Navbar';
import React, { useState } from 'react';
import Link from 'next/link';

const Home = () => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState('');
    const [password, setPassword] = useState('');
    const [inputErrorMessage, setInputErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const handleInputChange = (e: any) => {
        const value = e.target.value;
        setInputValue(value);

        if (value.length > 0 && value.length < 7) {
            setInputErrorMessage('Input must be at least 7 characters');
        } else {
            setInputErrorMessage('');
        }
    };

    const handlePasswordChange = (e: any) => {
        const value = e.target.value;
        setPassword(value);

        if (value.length > 0 && value.length < 12) {
            setPasswordErrorMessage('Password must be at least 12 characters');
        } else {
            setPasswordErrorMessage('');
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (password.length < 12) {
            setPasswordErrorMessage('Password must be at least 12 characters');
        }
    };

    const styles = {
        loginContainer: {
            display: 'flex',
            alignItems: 'flex-start', // Align items to the top
            marginLeft: 'auto', // Push to the right
        },
        loginText: {
            color: 'black',
            fontSize: '12px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
        },
        arrow: {
            marginLeft: '8px',
            transition: 'transform 0.2s ease',
        },
        checkEmailContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
        },
        checkEmailText: {
            color: 'black',
            fontSize: '12px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
        },
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="left-top flex h-full">
                <div className=" left-section w-full md:w-1/2 relative flex items-center justify-center ">
                    <Image
                        src="/one.png"
                        alt="background"
                        className="image1"
                        layout="fill"
                    />
                    <div className="absolute top-1 left-0 z-40 p-4">
                        <Image
                            src="/four.png"
                            alt="Logo"
                            width={16}
                            height={50}
                        />
                    </div>
                    <div className="right-section absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <Image
                            src="/two.svg"
                            alt="overlay"
                            className="overlayImage"
                            layout="intrinsic"
                            width={427.62}
                            height={327}
                        />
                        <h1 className="textt1">
                            Royalty collections,<br /> simplified. It&apos;s next level!
                        </h1>
                        <p className="textt2 mt-2">
                            Revenue based invoice collection to <br /> make royalty collection as easy as...
                        </p>
                    </div>
                </div>
                <div className="margin-l h-full md:w-1/2 flex items-center ml-20">
                    <div className="logo-hide hidden absolute top-1 left-0 z-40 p-4">
                        <Image
                            src="/four.png"
                            alt="Logo"
                            width={16}
                            height={50}
                        />
                    </div>
                    <div className='absolute top-0 right-0 mt-3 z-40 p-4'>
                        <div style={styles.loginContainer}>
                            <Link href="/">
                                <div style={styles.loginText}>
                                    Return to login
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
                    <div className="box p-4 w-full max-w-sm">
                        <center>
                            <h2 className="text1 mb-2 text-lg">Check your email</h2>
                        </center>
                        <p className="hi  text-gray-700 mt-3 text-left mb-14 ">
                        Thanks! If <span className='underline'>email</span>  matches an email address we have on file, then we&apos;ve sent you an email containing further instructions for resetting your password.
                        <br />
                        <br />
                        If you haven&apos;t received an email in 5 minutes, check your spam <span className='text-blue-400'>resend</span> or <span className='text-blue-400'>try a different email address.</span> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
