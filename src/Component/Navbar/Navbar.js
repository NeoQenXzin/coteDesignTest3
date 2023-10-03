import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import logoLight from '../../../public/assets/logos/logoLight.png';
import logoDark from '../../../public/assets/logos/logoDark.png';
import style from './Navbar.module.css';
// Librairie Traduction 
import { useTranslation } from "react-i18next"


export default function Navbar(props) {
    // Destructurer
    const router = useRouter();
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    useEffect(() => {
        if (router.pathname === '/accueil') {
            setIsScrolled(false)
            const handleScroll = () => {
                if (window.scrollY < window.innerHeight) {
                    setIsScrolled(false);
                } else {
                    setIsScrolled(true);
                }
            }

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        } else {
            setIsScrolled(true)
        }
    }, [router.pathname]);

    const logoUrl = isScrolled ? logoDark : logoLight;

    return (
        <>
            <Head>
                <title>Coté Design</title>
                <meta name="description design" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`${style.navbar} ${isScrolled ? style.scroll : ''}`}>
                <div className={style.navContainer}>
                    <Link className={style.logo} href={"/"}>
                        <Image src={logoUrl} width="150" height="60" alt="Logo" />
                    </Link>

                    <button
                        className={`${style.menuIcon} ${isNavOpen ? style.open : ""}`}
                        onClick={toggleNav}
                    >
                        <span className={`${isScrolled ? style.scrollIconBar : style.iconBar}`}></span>
                        <span className={`${isScrolled ? style.scrollIconBar : style.iconBar}`}></span>
                        <span className={`${isScrolled ? style.scrollIconBar : style.iconBar}`}></span>
                    </button>
                    <ul className={`${style.navLinks} ${isNavOpen ? style.open : ""}`}             onClick={toggleNav}>
                        <li className={style.navItem}>
                            <Link href={"/accueil"} className={style.navLink}>
                                {t("menu.accueil")}
                            </Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href={"/agence"} className={style.navLink}>
                                {t("menu.agence")}
                            </Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href={"/projects"} className={style.navLink}>
                                {t("menu.projects")}
                            </Link>
                        </li>
                        <li className={style.navItem}>
                            <Link href={"/contact"} className={style.navLink}>
                                {t("menu.contact")}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}