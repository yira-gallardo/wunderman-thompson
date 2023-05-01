import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [tabActive, putTabActive] = useState(1);

  const activarTab = (numero) => {
    putTabActive(numero);
  };

  return (
    <>
      <Head>
        <title>Movistar | Landing Page</title>
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
                <Link href="/ejemplo" className="link">
                  Particulares
                </Link>
                <Link href="/ejemplo" className="link">
                  Emprendedores
                </Link>
                <Link href="/ejemplo" className="link">
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
                  <Link href="/ejemplo" className="link">
                    Smartphones
                  </Link>
                  <Link href="/ejemplo" className="link">
                    Planes
                  </Link>
                  <Link href="/ejemplo" className="link">
                    Prepago
                  </Link>
                  <Link href="/ejemplo" className="link">
                    Movistar Libre
                  </Link>
                  <Link href="/ejemplo" className="link">
                    Atención al Cliente
                  </Link>
                  <Link href="/ejemplo" className="link">
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
            <Link href="/ejemplo" className="link">
              Smartphones
            </Link>
            <Link href="/ejemplo" className="link">
              Planes
            </Link>
            <Link href="/ejemplo" className="link">
              Prepago
            </Link>
            <Link href="/ejemplo" className="link">
              Movistar Libre
            </Link>
            <Link href="/ejemplo" className="link">
              Atención al Cliente
            </Link>
            <Link href="/ejemplo" className="link">
              Servicios digitales
            </Link>
          </div>
        )}
      </nav>
      <main>
        {/* BOOTSTRAP CAROUSEL BANNER DESKTOP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <Carousel className="banner-desktop">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/banner-1.png"
                alt="Banner imagen 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/banner-2.png"
                alt="Banner imagen 2"
              />
            </Carousel.Item>
          </Carousel>
        </motion.div>
        {/* BOOTSTRAP CAROUSEL BANNER MOBILE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <Carousel className="banner-mobile">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/banner-mobile-1.jpg"
                alt="Banner imagen 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/banner-mobile-2.jpg"
                alt="Banner imagen 2"
              />
            </Carousel.Item>
          </Carousel>
        </motion.div>
        <section className="promociones">
          <div className="container">
            <div className="contentBox">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              >
                <div className="my-top">
                  <div className="row">
                    <div className="col-6 col-md-3 p-0">
                      <div
                        className={`infoBox ${tabActive === 1 && `verde`}`}
                        onClick={() => putTabActive(1)}
                      >
                        <div className="icon">
                          <Image
                            src="/icon-1.png"
                            width={39}
                            height={39}
                            alt="icon"
                            className="image"
                          />
                        </div>
                        <div className="text">Comprar un Smartphone</div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 p-0">
                      <div
                        className={`infoBox ${tabActive === 2 && `verde`}`}
                        onClick={() => putTabActive(2)}
                      >
                        <div className="icon">
                          <Image
                            src="/icon-2.png"
                            width={39}
                            height={39}
                            alt="icon"
                            className="image"
                          />
                        </div>
                        <div className="text">Nueva línea en Prepago</div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 p-0">
                      <div
                        className={`infoBox ${tabActive === 3 && `verde`}`}
                        onClick={() => putTabActive(3)}
                      >
                        <div className="icon">
                          <Image
                            src="/icon-3.png"
                            width={39}
                            height={39}
                            alt="icon"
                            className="image"
                          />
                        </div>
                        <div className="text">Contrata un Plan</div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 p-0">
                      <div
                        className={`infoBox ${tabActive === 4 && `verde`}`}
                        onClick={() => putTabActive(4)}
                      >
                        <div className="icon">
                          <Image
                            src="/icon-4.png"
                            width={39}
                            height={39}
                            alt="icon"
                            className="image"
                          />
                        </div>
                        <div className="text">Renueva tu Plan</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              {tabActive === 1 && (
                <div className="content-1">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  >
                    <div className="titulo">
                      El amor está en el aire y en tu nuevo
                      <span className="cursiva">Smartphone</span>, ¡cómpralo en
                      línea a precio especial!
                    </div>
                  </motion.div>
                  <div className="iconos">
                    <div className="row">
                      <div className="col-3 col-md-3 text-center">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2 }}
                        >
                          <div className="icono">
                            <div className="imagen">
                              <Image
                                src="/iconos2-1.png"
                                width={63}
                                height={63}
                                alt="Meses"
                                className="image"
                              />
                            </div>
                            <div className="texto">Meses Sin Intereses</div>
                          </div>
                        </motion.div>
                      </div>

                      <div className="col-3 col-md-3 text-center">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 0.3 }}
                        >
                          <div className="icono">
                            <div className="imagen">
                              <Image
                                src="/iconos-3.png"
                                width={63}
                                height={63}
                                alt="Envío gratis"
                                className="image"
                              />
                            </div>
                            <div className="texto">Envío gratis</div>
                          </div>
                        </motion.div>
                      </div>

                      <div className="col-3 col-md-3 text-center">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 0.5 }}
                        >
                          <div className="icono">
                            <div className="imagen">
                              <Image
                                src="/iconos-4.png"
                                width={63}
                                height={63}
                                alt="recoleccion"
                                className="image"
                              />
                            </div>
                            <div className="texto">
                              Recolección en Tiendas Movistar
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      <div className="col-3 col-md-3 text-center">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 0.7 }}
                        >
                          <div className="icono">
                            <div className="imagen">
                              <Image
                                src="/iconos-5.png"
                                width={63}
                                height={63}
                                alt="garantia"
                                className="image"
                              />
                            </div>
                            <div className="texto">
                              Año de garantía por defecto de fábrica
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  {/* TELEFONOS DESKTOP */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  >
                    <Carousel className="telefonos-desktop">
                      <Carousel.Item>
                        <div className="telefonos">
                          <div className="telefono">
                            <div className="imagen">
                              <Image
                                src="/telefono-1.png"
                                width={111}
                                height={235}
                                alt="banner"
                                className="image"
                              />
                            </div>
                            <div className="precio">$1,839.00</div>
                            <div className="comprar">
                              <Link
                                href="https://www.movistar.com.mx/"
                                className="boton"
                              >
                                Comprar
                              </Link>
                            </div>
                          </div>
                          <div className="telefono">
                            <div className="imagen">
                              <Image
                                src="/telefono-1.png"
                                width={111}
                                height={235}
                                alt="banner"
                                className="image"
                              />
                            </div>
                            <div className="precio">$2,245.00</div>
                            <div className="comprar">
                              <Link
                                href="https://www.movistar.com.mx/"
                                className="boton"
                              >
                                Comprar
                              </Link>
                            </div>
                          </div>
                          <div className="telefono">
                            <div className="imagen">
                              <Image
                                src="/telefono-1.png"
                                width={111}
                                height={235}
                                alt="banner"
                                className="image"
                              />
                            </div>
                            <div className="precio">$5,699.00</div>
                            <div className="comprar">
                              <Link
                                href="https://www.movistar.com.mx/"
                                className="boton"
                              >
                                Comprar
                              </Link>
                            </div>
                          </div>
                          <div className="telefono">
                            <div className="imagen">
                              <Image
                                src="/telefono-1.png"
                                width={111}
                                height={235}
                                alt="banner"
                                className="image"
                              />
                            </div>
                            <div className="precio">$5,699.00</div>
                            <div className="comprar">
                              <Link
                                href="https://www.movistar.com.mx/"
                                className="boton"
                              >
                                Comprar
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="telefonos">
                          <div className="telefono">
                            <div className="imagen">
                              <Image
                                src="/telefono-1.png"
                                width={111}
                                height={235}
                                alt="banner"
                                className="image"
                              />
                            </div>
                            <div className="precio">$1,839.00</div>
                            <div className="comprar">
                              <Link
                                href="https://www.movistar.com.mx/"
                                className="boton"
                              >
                                Comprar
                              </Link>
                            </div>
                          </div>
                          <div className="telefono">
                            <div className="imagen">
                              <Image
                                src="/telefono-1.png"
                                width={111}
                                height={235}
                                alt="banner"
                                className="image"
                              />
                            </div>
                            <div className="precio">$2,245.00</div>
                            <div className="comprar">
                              <Link
                                href="https://www.movistar.com.mx/"
                                className="boton"
                              >
                                Comprar
                              </Link>
                            </div>
                          </div>
                          <div className="telefono">
                            <div className="imagen">
                              <Image
                                src="/telefono-1.png"
                                width={111}
                                height={235}
                                alt="banner"
                                className="image"
                              />
                            </div>
                            <div className="precio">$5,699.00</div>
                            <div className="comprar">
                              <Link
                                href="https://www.movistar.com.mx/"
                                className="boton"
                              >
                                Comprar
                              </Link>
                            </div>
                          </div>
                          <div className="telefono">
                            <div className="imagen">
                              <Image
                                src="/telefono-1.png"
                                width={111}
                                height={235}
                                alt="banner"
                                className="image"
                              />
                            </div>
                            <div className="precio">$5,699.00</div>
                            <div className="comprar">
                              <Link
                                href="https://www.movistar.com.mx/"
                                className="boton"
                              >
                                Comprar
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </motion.div>
                  {/* TELEFONOS MOBILE */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  >
                    <Carousel className="telefonos-mobile">
                      <Carousel.Item>
                        <div className="telefonos">
                          <div className="telefono">
                            <div className="imagen">
                              <Image
                                src="/telefono-1.png"
                                width={111}
                                height={235}
                                alt="banner"
                                className="image"
                              />
                            </div>
                            <div className="precio">$1,839.00</div>
                            <div className="comprar">
                              <Link
                                href="https://www.movistar.com.mx/"
                                className="boton"
                              >
                                Comprar
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="telefonos">
                          <div className="telefono">
                            <div className="imagen">
                              <Image
                                src="/telefono-1.png"
                                width={111}
                                height={235}
                                alt="banner"
                                className="image"
                              />
                            </div>
                            <div className="precio">$2,245.00</div>
                            <div className="comprar">
                              <Link
                                href="https://www.movistar.com.mx/"
                                className="boton"
                              >
                                Comprar
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="telefonos">
                          <div className="telefono">
                            <div className="imagen">
                              <Image
                                src="/telefono-1.png"
                                width={111}
                                height={235}
                                alt="banner"
                                className="image"
                              />
                            </div>
                            <div className="precio">$5,699.00</div>
                            <div className="comprar">
                              <Link
                                href="https://www.movistar.com.mx/"
                                className="boton"
                              >
                                Comprar
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="telefonos">
                          <div className="telefono">
                            <div className="imagen">
                              <Image
                                src="/telefono-1.png"
                                width={111}
                                height={235}
                                alt="banner"
                                className="image"
                              />
                            </div>
                            <div className="precio">$5,699.00</div>
                            <div className="comprar">
                              <Link
                                href="https://www.movistar.com.mx/"
                                className="boton"
                              >
                                Comprar
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  >
                    <div className="bottom">
                      <div className="image">
                        <Image
                          src="/oxxo.png"
                          width={77}
                          height={69}
                          alt="oxxo"
                          className="oxxoImg"
                        />
                      </div>
                      <div className="texto">
                        Paga en efectivo Smartphones de hasta $10,000
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
              {tabActive === 2 && (
                <div className="content-ejemplo">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  >
                    <div className="bottom">
                      <div className="texto">Ejemplo de contenido de tab</div>
                    </div>
                  </motion.div>
                </div>
              )}
              {tabActive === 3 && (
                <div className="content-ejemplo">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  >
                    <div className="bottom">
                      <div className="image">
                        <Image
                          src="/oxxo.png"
                          width={77}
                          height={69}
                          alt="oxxo"
                          className="oxxoImg"
                        />
                      </div>
                      <div className="texto">Ejemplo de contenido de tab</div>
                    </div>
                  </motion.div>
                </div>
              )}
              {tabActive === 4 && (
                <div className="content-ejemplo">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  >
                    <div className="titulo">Ejemplo de contenido de tab</div>
                  </motion.div>
                </div>
              )}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              <div className="aprovecha">
                Aprovecha las <span className="cursiva">promociones</span> de tu
                banco
              </div>
            </motion.div>
            <div className="bancosBox">
              {/* BANCOS DESKTOP */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.2 }}
              >
                <Carousel className="bancos-desktop">
                  <Carousel.Item>
                    <div className="bancos">
                      <div className="banco">
                        <Image
                          src="/banco-1.png"
                          width={257}
                          height={150}
                          alt="banco Amex"
                          className="bancoImg"
                        />
                      </div>
                      <div className="banco">
                        <Image
                          src="/banco-2.png"
                          width={257}
                          height={150}
                          alt="banco banorte"
                          className="bancoImg"
                        />
                      </div>
                      <div className="banco">
                        <Image
                          src="/banco-3.png"
                          width={257}
                          height={150}
                          alt="banco bbva"
                          className="bancoImg"
                        />
                      </div>
                      <div className="banco">
                        <Image
                          src="/banco-4.png"
                          width={257}
                          height={150}
                          alt="banco city"
                          className="bancoImg"
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="bancos">
                      <div className="banco">
                        <Image
                          src="/banco-1.png"
                          width={257}
                          height={150}
                          alt="banco Amex"
                          className="bancoImg"
                        />
                      </div>
                      <div className="banco">
                        <Image
                          src="/banco-2.png"
                          width={257}
                          height={150}
                          alt="banco banorte"
                          className="bancoImg"
                        />
                      </div>
                      <div className="banco">
                        <Image
                          src="/banco-3.png"
                          width={257}
                          height={150}
                          alt="banco bbva"
                          className="bancoImg"
                        />
                      </div>
                      <div className="banco">
                        <Image
                          src="/banco-4.png"
                          width={257}
                          height={150}
                          alt="banco city"
                          className="bancoImg"
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </motion.div>
              {/* BANCOS MOBILE */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              >
                <Carousel className="bancos-mobile">
                  <Carousel.Item>
                    <div className="bancos">
                      <div className="banco">
                        <Image
                          src="/banco-1.png"
                          width={257}
                          height={150}
                          alt="banco Amex"
                          className="bancoImg"
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="bancos">
                      <div className="banco">
                        <Image
                          src="/banco-2.png"
                          width={257}
                          height={150}
                          alt="banco banorte"
                          className="bancoImg"
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="bancos">
                      <div className="banco">
                        <Image
                          src="/banco-3.png"
                          width={257}
                          height={150}
                          alt="banco bbva"
                          className="bancoImg"
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="bancos">
                      <div className="banco">
                        <Image
                          src="/banco-4.png"
                          width={257}
                          height={150}
                          alt="banco city"
                          className="bancoImg"
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      {/* FOOTER DESKTOP */}
      <footer className="footer footer-desktop">
        <div className="top">
          <div className="container">
            Información importante para clientes
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
                    <Link href="/ejemplo" className="link">
                      Quienes Somos
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Información para clientes
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Fundación telefónica
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Soluciones empresas
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Personas con discapacidad
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Dialogando
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Contrato de adhesión móvil
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Aviso de privacidad proveedores
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Centro de transparencia
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="columna">
                  <div className="titulo">Teléfonos</div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Catálogos
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Apple
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Huawei
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Motorola
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Samsung
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Xiaomi
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="columna">
                  <div className="titulo">Planes</div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Contrata un Plan Movistar
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Planes con equipo
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Planes sin equipo
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Cámbiate de plan
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="columna">
                  <div className="titulo">Ayuda</div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Atención al cliente
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Mi Movistar
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Preguntas frecuentes
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Centro de atención
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Chat de ayuda
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Robo o extravío
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Cobertura Movistar
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Campañas vigentes
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="columna">
                  <div className="titulo">Síguenos en</div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Facebook
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
                      Twitter
                    </Link>
                  </div>
                  <div className="box">
                    <Link href="/ejemplo" className="link">
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
                  <Link href="/ejemplo" className="link">
                    Quienes Somos
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Información para clientes
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Fundación telefónica
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Soluciones empresas
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Personas con discapacidad
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Dialogando
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Contrato de adhesión móvil
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Aviso de privacidad proveedores
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Centro de transparencia
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Teléfonos</Accordion.Header>
              <Accordion.Body>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Catálogos
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Apple
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Huawei
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Motorola
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Samsung
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Xiaomi
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Planes</Accordion.Header>
              <Accordion.Body>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Contrata un Plan Movistar
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Planes con equipo
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Planes sin equipo
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Cámbiate de plan
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Ayuda</Accordion.Header>
              <Accordion.Body>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Atención al cliente
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Mi Movistar
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Preguntas frecuentes
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Centro de atención
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Chat de ayuda
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Robo o extravío
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Cobertura Movistar
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Campañas vigentes
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Síguenos en</Accordion.Header>
              <Accordion.Body>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Facebook
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
                    Twitter
                  </Link>
                </div>
                <div className="box">
                  <Link href="/ejemplo" className="link">
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
