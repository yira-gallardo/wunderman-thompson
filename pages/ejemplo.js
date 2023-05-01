import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";

export default function Ejemplo() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <>
      <Head>
        <title>Movistar | Ejemplo de subpagina</title>
        <meta name="description" content="Todo comienza con un sí" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpg" />
      </Head>
      {/* MENU DESKTOP */}
      <nav className="my-nav">
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="col">
                <Link href="/" className="link">
                  Particulares
                </Link>
                <Link href="/" className="link">
                  Emprendedores
                </Link>
                <Link href="/" className="link">
                  Empresas
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-1">
                <div className="left">
                  <Link href="/" className="link">
                    <Image
                      src="/icon.jpg"
                      width={100}
                      height={100}
                      alt="logo"
                      className="image"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-9 text-center pt-3">
                <div className="center ">
                  <Link href="/" className="link">
                    Smartphones
                  </Link>
                  <Link href="/" className="link">
                    Planes
                  </Link>
                  <Link href="/" className="link">
                    Prepago
                  </Link>
                  <Link href="/" className="link">
                    Movistar Libre
                  </Link>
                  <Link href="/" className="link">
                    Atención al Cliente
                  </Link>
                  <Link href="/" className="link">
                    Servicios digitales
                  </Link>
                </div>
              </div>
              <div className="col-md-2 pt-2">
                <div className="right">
                  <Link href="/" className="link">
                    <Button>Mi Movistar</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* MENU MOBILE */}
      <nav className="my-nav-mobile">
        <div className="row">
          <div className="col-6">
            <Link href="/" className="link">
              <Image
                src="/icon.jpg"
                width={100}
                height={100}
                alt="logo"
                className="image"
              />
            </Link>
          </div>
          <div className="col-6 text-right">
            <div className="icons">
              <div className="icon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  fill="currentColor"
                  className="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              <div className="icon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </div>
              <div
                className="burger"
                onClick={() =>
                  setMobileMenuActive((estadoPrevio) => !estadoPrevio)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {mobileMenuActive && (
          <div className="menu-mobile">
            <Link href="/" className="link">
              Smartphones
            </Link>
            <Link href="/" className="link">
              Planes
            </Link>
            <Link href="/" className="link">
              Prepago
            </Link>
            <Link href="/" className="link">
              Movistar Libre
            </Link>
            <Link href="/" className="link">
              Atención al Cliente
            </Link>
            <Link href="/" className="link">
              Servicios digitales
            </Link>
          </div>
        )}
      </nav>
      <main>
        <section className="promociones">
          <div className="container">
            <div className="contentBox">
              <div className="titulo">
                Ejemplo de página
                <span className="cursiva"> Interna</span>
              </div>
            </div>
            ¡
          </div>
        </section>
      </main>
      {/* FOOTER DESKTOP */}
      <footer className="footer footer-desktop">
        <div className="top">
          <div className="container">
            Información importante para clientes{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-bar-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"
              />
            </svg>
          </div>
        </div>
        <div className="middle">
          <div className="container">
            <Image
              src="/footer-middle.jpg"
              width={686}
              height={96}
              alt="footer"
              className="middleImg"
            />
          </div>
        </div>
        <div className="bottom columnas">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="columna">
                  <div className="titulo">Sobre</div>
                  <div className="box">
                    <Link href="/" className="link">
                      Quienes Somos
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Información para clientes
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Fundación telefónica
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Soluciones empresas
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Personas con discapacidad
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Dialogando
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Contrato de adhesión móvil
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Aviso de privacidad proveedores
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Centro de transparencia
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="columna">
                  <div className="titulo">Teléfonos</div>
                  <div className="box">
                    <Link href="/" className="link">
                      Catálogos
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Apple
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Huawei
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Motorola
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Samsung
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Xiaomi
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="columna">
                  <div className="titulo">Planes</div>
                  <div className="box">
                    <Link href="/" className="link">
                      Contrata un Plan Movistar
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Planes con equipo
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Planes sin equipo
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Cámbiate de plan
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="columna">
                  <div className="titulo">Ayuda</div>
                  <div className="box">
                    <Link href="/" className="link">
                      Atención al cliente
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Mi Movistar
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Preguntas frecuentes
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Centro de atención
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Chat de ayuda
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Robo o extravío
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Cobertura Movistar
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Campañas vigentes
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="columna">
                  <div className="titulo">Síguenos en</div>
                  <div className="box">
                    <Link href="/" className="link">
                      Facebook
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Twitter
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/" className="link">
                      Youtube
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="patrocinadores">
          <div className="container">
            <Image
              src="/footer.jpg"
              width={2548}
              height={175}
              alt="patrocinadores"
              className="patrocinadoresImg"
            />
          </div>
        </div>
      </footer>
      {/* FOOTER MOBILE */}
      <footer className="footer footer-mobile">
        <div className="top">
          <div className="container">
            Información importante para clientes{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-bar-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"
              />
            </svg>
          </div>
        </div>
        <div className="middle">
          <div className="container">
            <Image
              src="/footer-middle.jpg"
              width={686}
              height={96}
              alt="footer"
              className="middleImg"
            />
          </div>
        </div>
        <div className="bottom columnas">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Sobre</Accordion.Header>
              <Accordion.Body>
                <div className="box">
                  <Link href="/" className="link">
                    Quienes Somos
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Información para clientes
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Fundación telefónica
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Soluciones empresas
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Personas con discapacidad
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Dialogando
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Contrato de adhesión móvil
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Aviso de privacidad proveedores
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Centro de transparencia
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Teléfonos</Accordion.Header>
              <Accordion.Body>
                <div className="box">
                  <Link href="/" className="link">
                    Catálogos
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Apple
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Huawei
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Motorola
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Samsung
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Xiaomi
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Planes</Accordion.Header>
              <Accordion.Body>
                <div className="box">
                  <Link href="/" className="link">
                    Contrata un Plan Movistar
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Planes con equipo
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Planes sin equipo
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Cámbiate de plan
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Ayuda</Accordion.Header>
              <Accordion.Body>
                <div className="box">
                  <Link href="/" className="link">
                    Atención al cliente
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Mi Movistar
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Preguntas frecuentes
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Centro de atención
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Chat de ayuda
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Robo o extravío
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Cobertura Movistar
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Campañas vigentes
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Síguenos en</Accordion.Header>
              <Accordion.Body>
                <div className="box">
                  <Link href="/" className="link">
                    Facebook
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Twitter
                  </Link>
                </div>
                <div className="box">
                  <Link href="/" className="link">
                    Youtube
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="patrocinadores">
          <div className="container">
            <Image
              src="/footer.jpg"
              width={2548}
              height={175}
              alt="patrocinadores"
              className="patrocinadoresImg"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
