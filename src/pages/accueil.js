import React from 'react'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import prezImage from '../../public/assets/img/accueil/facade-angle.png'
// import videoTheme from '../../public/assets/video/accueilDemo.mp4'
import buttonExploreDown from '../../public/assets/icones/icon-explore-down.png'
import styles from '../styles/Accueil.module.css'
import { useTranslation } from 'react-i18next';
//Components
import AccordeonPlus from '../Component/AccordeonPlus/AccordeonPlus'
import Gallery from '../Component/Gallery/Gallery'
import BoutonLink from '../Component/BoutonLink/BoutonLink'

export default function accueil(props) {

  // Traduction
  const { t } = useTranslation();
  //  State Accordeon 
  const [accordeonStates, setAccordeonStates] = useState([true, false, false]);

  const handleAccordeonChange = (index) => {
    const newStates = accordeonStates.map((state, i) => (i === index ? !state : false));
    setAccordeonStates(newStates);
  };

  return (
    <>
      <Head>
        <title>Coté Design Beta</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Section principale */}
      <main className={styles.main}>
        <section className={styles.mainSection}>
          <video className={styles.videoBackground} autoPlay muted loop>
            <source src='/assets/video/accueilDemo.mp4' type="video/mp4" />
          </video>
          <button className={styles.buttonExplore} onClick={() => {
            window.scrollBy(0, window.innerHeight);
          }}>
            <Image className={styles.buttonExploreImg} src={buttonExploreDown} alt="boutton explore" /><span>Explore</span></button>
        </section>

        {/* Section presentation  */}
        <section className={styles.prezSection}>
          <div className={styles.containerPrezImg}>
            <Image className={styles.prezImg} src={prezImage} alt='présentation illustration' />
          </div>
          <div className={styles.prezText}>
            <h2 className={styles.prezContent}>{t("accueil.prezSectionTextH2")}</h2>
            <span className={styles.prezContent}>{t("accueil.prezSectionText1")} </span>
            <span className={styles.prezContent}>{t("accueil.prezSectionText2")}</span>
            <span className={styles.prezContent}>{t("accueil.prezSectionText3")}</span>
            <BoutonLink link='agence' textButton={t("accueil.prezSectionButton")} />

          </div>
        </section>

        {/* Section gallerie projet  */}

        <section className={styles.gallerySection}>
          <Gallery />
          <BoutonLink link='/projects/' textButton={t("accueil.gallerySectionButton")} />
        </section>

        {/* Section Savoir faire (accordeon)  */}
        <section className={styles.accordeonPlusSection}>
          <div className={styles.containerAccordeonSectionImgPlus}></div>
          <div className={styles.containerAccordeonSectionPlus}>
            <h2>{t("accueil.accordeonSectionMainTitle")}</h2>
            <AccordeonPlus
              title={t("accueil.accordeonSectionTitle1")}
              content={t("accueil.accordeonSectionContent1").split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
              style={{ whiteSpace: 'pre-line' }}
              active={accordeonStates[0]}
              onChange={() => handleAccordeonChange(0)}
            />
            <AccordeonPlus
              title={t("accueil.accordeonSectionTitle2")}
              content={t("accueil.accordeonSectionContent2").split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
              style={{ whiteSpace: 'pre-line' }}
              active={accordeonStates[1]}
              onChange={() => handleAccordeonChange(1)}
            />
            <AccordeonPlus
              title={t("accueil.accordeonSectionTitle3")}
              content={t("accueil.accordeonSectionContent3").split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
              style={{ whiteSpace: 'pre-line' }}
              active={accordeonStates[2]}
              onChange={() => handleAccordeonChange(2)}
            />
          </div>
        </section>

        <div className={styles.contactSection}>
          <BoutonLink link='contact' textButton={t("accueil.contactSectionButton")} />
        </div>
      </main>



    </>
  )
}