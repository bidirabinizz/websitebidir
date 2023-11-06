/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiReact, SiSvelte, SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import "./LandingPage.css";
// import FaceSvg from "../assets/mf-avatar.svg";
import About from "../assets/about-us.png.svg";
import div_befor from "../assets/div_before.svg";
// import Logo from "../assets/logo.png.svg";
import Logo3 from "../assets/logo3.png.svg";
import s1 from "../assets/s1.png.svg";
import s2 from "../assets/s2.png.svg";
import s3 from "../assets/s3.png.svg";
import s4 from "../assets/s4.png.svg";
import Home_avtar from "../assets/home-right.png.svg";
import { Typewriter } from "react-simple-typewriter";
import React, { useEffect } from "react";

var navbar = document.querySelector("header");
window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const LandingPage = () => {
  return (
    <>
      <header className="header">
        <div className="content navbar">
          <div className="logo">
            {/* <img src={Logo} alt={" not found"} /> */}
            <h1>BayNoSatis</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#hero">home</a>
              </li>
              <li>
                <a href="#intro">about</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#services">service</a>
              </li>
              <li>
                <a href="#">pages</a>
              </li>
              <div className="drop">
                <li>
                  <a href="https://instagram.com/bidircikk">blog</a>
                </li>
              </div>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="content landingpage" id="hero">
        <div className="left left-content">
          <div className="head">
            <div className="hii">
              <h3>Hello</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="name">
            <h1>
              <Typewriter
                words={["Bıdır Abiniz"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={80}
              />
            </h1>
            <h5 className="about1">
              <Typewriter
                words={[
                  "I'm Full-Stack Developer",
                  "Kendi Biom",
                  "Freelancer",
                  "&",
                  "Designer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </h5>
          </div>
          {/* <div className="about1">
            <h5>Full Stack Developer</h5>
          </div> */}
          <div className="btn">
            <button>Hakkımda</button>
            <div className="hire">
              <button>Get CV</button>
            </div>
          </div>
        </div>
        <div className="right forgot">
          <img src={Home_avtar} alt="" />
        </div>
      </section>
      <section className="intro" id="intro">
        <div className="left forgot">
          <img src={About} alt="" />
        </div>
        <div className="right">
          <div className="about">
            <div className="about-text">
              <h2>
                bıdır <br />
                hakkında bütün <br />
                herşey
              </h2>
              <p>
                Adım Bahadır ve web üzerinde tam yığın geliştirici olarak altı
                yılı aşkın bir süredir çalışma deneyimim var. Hem ön uç hem de
                arka uç geliştirme konusunda kapsamlı uzmanlığa sahibim.
                JavaScript ve TypeScript'i iki yılı aşkın bir süredir
                profesyonel olarak kullanıyorum. Ayrıca, ReactJS, NextJS, VueJS,
                Gatsby gibi ön uç çatıları kullanarak tüm cihazlar için optimize
                edilmiş tamamen duyarlı web siteleri tasarlamada uzmanım.
                Ayrıca, en son çağdaş UI trendlerini anlıyorum ve UI/UX
                tasarımında sağlam bir temele sahibim. Arka uç için NodeJS ve
                ExpressJS'yi, Koa, Django ve Laravel gibi diğer araçları da
                biliyorum. Ayrıca, API'ler oluşturma konusunda geniş deneyime
                sahibim ve veritabanı tasarımı ve geliştirme için hopscotch,
                insomnia ve postman gibi araçları kullanıyorum. SQL ve NoSQL
                veritabanları olmak üzere iki tür veritabanıyla da tanışığım.
                MySQL, PostgreSQL, MongoDB, CrateDB, Cassandra, MS SQL, Redis ve
                Neo4j konularında bilgim var. AWS (Amazon Web Services), Google
                Cloud, MS Azure ve Digital Ocean için DevOps'u anlıyorum.
                Ayrıca, bulut mimarisi için serverless yapı ve mikro hizmetlerle
                tanışığım ve öncelikli olarak aşağıda listelenen araçları
                kullanıyorum (Kubernetes, Jenkins, Jira, GitLab, Github Action,
                AWS Lambda ve S3). Takım işbirliği konusunda konuşurken Git,
                Sürüm Kontrolü ve Github konusunda da çok iyi bilgim var. Proje
                yönetimi ve ürün tasarımı konusundaki uzmanlığım da oldukça
                güçlüdür. Ayrıca, zorlukları çözme konusunda çok iyiyim ve kendi
                kendime bilgi edinme yeteneğine sahibim.
              </p>
            </div>
            <div className="download-btn">
              <button>CV indir</button>
            </div>
          </div>
        </div>
      </section>
      <section className="content content-logo" id="portfolio">
        <div className="left">
          <div className="top">
            <div className="image">
              <a href="#">
                <AiOutlineHtml5 style={{ color: "orange", fontSize: "70px" }} />
                <p>HTML 5</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <FaCss3Alt style={{ color: "blue", fontSize: "70px" }} />
                <p>css 3</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <TbBrandJavascript
                  style={{ color: "yellow", fontSize: "70px" }}
                />
                <p>javascript</p>
              </a>
            </div>
          </div>
          <div className="top">
            <div className="image">
              <a href="#">
                <FaBootstrap style={{ color: "purple", fontSize: "70px" }} />
                <p>bootstrap</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiTailwindcss
                  style={{ color: "light-blue", fontSize: "70px" }}
                />
                <p>tailwindcss</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiReact style={{ color: "blue", fontSize: "70px" }} />
                <p>react</p>
              </a>
            </div>
          </div>
          <div className="top">
            <div className="image">
              <a href="#">
                <SiSvelte style={{ color: "red  ", fontSize: "50px" }} />
                <p>svelte</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiMongodb style={{ color: "green", fontSize: "60px" }} />
                <p>mongodb</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <img src={Logo3} alt="" />
                <p>HTML 5</p>
              </a>
            </div>
          </div>
        </div>
        <div className="right Experience">
          <div className="sk wid">
            <div className="div-image">
              <img src={div_befor} alt="" />
            </div>
            <div className="contact wid">
              <div className="year wid">
                <h1>6+</h1>
                <h3>
                  Years
                  <br />
                  Experience
                  <br />
                  Working
                </h3>
              </div>

              <div className="no wid">
                <div className="sub-no">
                  <p>call us now</p>
                  <h2 type="tel">(+90) 543835****</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offers" id="services">
        <div className="headline">
          <h1>Hizmetler</h1>
          <p>
            Sizin için özenle hazırladığımız hizmetlerimiz ile
            <br />
            7/24 destek vermekteyiz.👩‍💻
          </p>
        </div>
        <div className="offer-content">
          <div className="offer-img">
            <img src={s1} alt="" />
            <h2>Web Hizmetleri</h2>
            <p>
              Sizler için <br />
              site
              <br />
              yapabilirim.
            </p>
          </div>

          <div className="offer-img">
            <img src={s2} alt="" />
            <h2>kalite</h2>
            <p>
              Sizler için <br />
              script <br />
              yazabilirim.
            </p>
          </div>

          <div className="offer-img">
            <img src={s3} alt="" />
            <h2>Eğitim</h2>
            <p>
              Sizlere yazılım <br />
              eğitimi <br />
              verebilirim.
            </p>
          </div>

          <div className="offer-img">
            <img src={s4} alt="" />
            <h2>iletişim</h2>
            <p>
              Sizler için
              <br />
              sesli & görüntülü <br />
              konuşabilirim.
            </p>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="project">
          <h1>
            Kaliteli İş 🌙 <br />
            En Son Düzenlenen Proje 📢
          </h1>
        </div>
      </section>
      <section className="update-main" id="contact">
        <div className="update">
          <div className="text">
            <h2>Her Zaman Güncellemeden Haberdar Olun</h2>
            <p>Bearing Void, Şu anda dinleniyor ...</p>
          </div>
          <div className="btns">
            <input
              type="email"
              className="email"
              name="email"
              placeholder="email address"
            />
            <button
              onClick={() => {
                window.location.href = "mailto:siper2710@gmail.com";
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="footer">
        <footer>
          <div className="text">
            <h1>Bıdırcık</h1>
            <h2>Takip Et</h2>
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/bahad%C4%B1r-b%C3%BCy%C3%BCktopa%C3%A7-a7b791232/?originalSubdomain=tr"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              <a href="https://instagram.com/bidircikk" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/bidirabinizz" target="_blank">
                {" "}
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>

              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </div>
          </div>
          <p>
            Copyright ©2023 All rights reserved | Bu tema &nbsp;
            <span>
              <a href="https://github.com/bidirabinizz">Bıdır Abiniz</a>
            </span>
            &nbsp; adlı kişiye aittir - 💓
          </p>
        </footer>
      </section>
    </>
  );
};

export default LandingPage;
