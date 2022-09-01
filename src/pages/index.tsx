import React from 'react'
import styles from './styles.module.scss'

import { RiUser3Fill } from "react-icons/ri";
import { FaLaptopCode } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import Slider from "react-slick";

import { useRef } from 'react';

export default function Home() {

  const blog = useRef(null)
  const serviços = useRef(null)
  const quemSomos = useRef(null)
  const contato = useRef(null)
  const button = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container}>
      <header ref={button} className={styles.header}>
        <img src="logo.svg" alt="" />
        <div className={styles.nav}>
          <a onClick={() => scrollToSection(blog)}>Blog</a>
          <a onClick={() => scrollToSection(serviços)}>Serviços</a>
          <a onClick={() => scrollToSection(quemSomos)}>Quem Somos</a>
          <a onClick={() => scrollToSection(contato)}>Contato</a>
        </div>
      </header>

      <div className={styles.sectionBlog} ref={quemSomos}>
        <img className="img" src="banner.jpg" alt="" />
        <div className={styles.divImg}>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
            Tempora totam sunt amet ipsa. Non officiis sapiente <br /> incidunt
            elitat impedit necessitatibus odio similique voluptate <br />
            blanditiis, enim consequuntur atque doloremque laudantium <br />
            ipsa? Nisi quia incidunt obcaecati impedit reprehenderit,
            <br /> necessitatibus deserunt commodi aspernatur. necessitatibus
            <br />
            deserunt commodi aspernatur.
          </p>
        </div>
      </div>

      <section className={styles.services} ref={serviços}>
        <div className={styles.developerServices}>
          <FaLaptopCode size={86} />
          <h1>Desenvolvimento</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            voluptate officiis cum dolor rerum molestiae id hic tenetur
            architecto autem obcaecati ex, laboriosam asperiores, ut facilis
            quia maiores. Nemo voluptates mollitia impedit eligendi aliquam
            optio quod ducimus. Exercitationem, saepe aliquam?
          </p>
        </div>
        <div className={styles.developerServices}>
          <img src="support.svg" alt="" />
          <h1>Manutenção</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            voluptate officiis cum dolor rerum molestiae id hic tenetur
            architecto autem obcaecati ex, laboriosam asperiores, ut facilis
            quia maiores. Nemo voluptates mollitia impedit eligendi aliquam
            optio quod ducimus. Exercitationem, saepe aliquam?
          </p>
        </div>
        <div className={styles.developerServices}>
          <RiUser3Fill size={86} />
          <h1>
            Alocação de <strong> profissional</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            voluptate officiis cum dolor rerum molestiae id hic tenetur
            architecto autem obcaecati ex, laboriosam asperiores, ut facilis
            quia maiores. Nemo voluptates mollitia impedit eligendi aliquam
            optio quod ducimus. Exercitationem, saepe aliquam?
          </p>
        </div>
        <div className={styles.developerServices}>
          <img src="equip.svg" alt="" />
          <h1>
            Alocação de uma <strong> equipe</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            voluptate officiis cum dolor rerum molestiae id hic tenetur
            architecto autem obcaecati ex, laboriosam asperiores, ut facilis
            quia maiores. Nemo voluptates mollitia impedit eligendi aliquam
            optio quod ducimus. Exercitationem, saepe aliquam?
          </p>
        </div>
      </section>

      <div className={styles.contatoImg}>
        <img src="contato.png" alt="" />
        <div className={styles.inputsArea}>
          <div className={styles.inputs}>
            <RiUser3Fill size={28} fill="#00074a" />
            <input placeholder="Nome" type="name" />
          </div>

          <div className={styles.inputs}>
            <MdEmail size={28} fill="#00074a" />
            <input placeholder="Email" type="email" />
          </div>

          <textarea
            className={styles.textarea}
            name=""
            id=""
            cols="80"
            rows="9"
          />

          <div className={styles.buttonArea}>
            <button className={styles.submit} type="submit">
              Enviar mensagem
            </button>
            <button className={styles.imgSubmit} type="submit">
              <img src="envelop.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <footer ref={contato} className={styles.footer}>
        <img className={styles.logo} src="logo-horizontal.svg" alt="" />

        <nav>
          <a href="">Blog</a>
          <a href="">Serviços</a>
          <a href="">Quem Somos</a>
          <a href="">Contato</a>
        </nav>

        <div>
          <a target="_blank" href="https://www.facebook.com/lab510Company/">
            <img className={styles.socialMedia} src="facebook.svg" alt="" />
          </a>
          <a target="_blank" href="https://www.instagram.com/lab_510/">
            <img className={styles.socialMedia} src="instagram.svg" alt="" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/lab510/">
            <img className={styles.socialMedia} src="linkedin.svg" alt="" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCYGm2S-glUw56-j4ExwKE8Q"
            target="_blank"
          >
            <img className={styles.socialMedia} src="youtube.svg" alt="" />
          </a>
        </div>
        <img className={styles.line} src="divisao-2.png" alt="" />
        <div className={styles.copy}>
          <span>Lab510 - © Copyright 2022</span>
        </div>
      </footer>
    </div>
  );
  
}