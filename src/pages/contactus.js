import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MainLayoutSection from "../components/maincommonlayout/MainCommonLayoutSection";
import NavigationCommonLayout  from "../components/navigationcommonlayout/NavigationCommonLayout";
import { Container, Row, Col } from "react-bootstrap";
import {  BsFillArrowRightCircleFill } from "react-icons/bs";
import OurFocusCardDeck from "../components/ourfocuscarddeck/OurFocusCardDeck";
import { aboutUsList } from "../data/commonLayoutNavigationData";

export default function AboutUs() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
    <div className='skeleton'>
      <Head>
        <title>Contact Us</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="international institute of theravada" />
      </Head>

      <div className='navbarCarouselWrapper contact'>
        <Header />
      </div>

      <MainLayoutSection 
        title="Contact Us" 
        description="Comprehensive training institute aimed at facilitating spiritual and academic development of Buddhist monks and nuns, based on Theravada teachings."
        photo="/monk-hike-deep-forest-reflection-with-lake-buddha-religion-concept.png"
      /> 

      <div className="contactDataWrapper">
        <div className="contactLeftContainer paddingHorizontal30">
            <div className="nameContainer">
                <div className="lineHeight1">International Institute of</div>
                <div className="lineHeight1">Terawada</div>
            </div>
            <div className="addressContainer mb-25 pl-20">
                <div className="addressImageCont mr-24">
                    <img
                        className="d-block w-100 pin-img-max-width"
                        src="/Address.svg"
                        alt="Address.svg"
                        width="24px"
                    />
                </div>
                <div className="addressNameContainer">
                    <div>
                        Hinetikalma Watta Road
                    </div>
                    <div>
                        Kaluwaragas wewa
                    </div>
                    <div>
                        Sri Lanka
                    </div>
                </div>
            </div>
            <div className="commMethodContainer mb-25 pl-20">
                <div className="contactImageCont mr-18">
                    <img
                        className="d-block w-100 contact-img-max-width"
                        src="/contact.svg"
                        alt="Contact.svg"
                        width="36px"
                    />
                </div>
                <div className="contactDetailsContainer">
                    <div>
                        info@iit.lk
                    </div>
                    <div>
                        +94 112 897 8899
                    </div>
                </div>
            </div>
            <div className="directionsContainer mb-25 pl-20">
                <div className="directionsImageCont mr-24">
                    <img
                        className="d-block w-100 pin-img-max-width"
                        src="/Directions.svg"
                        alt="Directions.svg"
                        width="24px"
                    />
                </div>
                <div className="directionDetailsContainer">
                    <a>Get Directions</a>
                </div>
            </div>
        </div>
        <div className="contactRightContainer paddingHorizontal30">
            <form className="contactUsForm">
                <div className="mb-26 flex">
                    <div className="mr-32">
                        <label for="contactName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="contactName"/>
                    </div>
                    <div>
                        <label for="contactEmail" class="form-label">Email</label>
                        <input type="email" class="form-control" id="contactEmail" placeholder="name@example.com"/>
                    </div>
                </div>
                <div className="mb-26 flex">
                    <div className="mr-32">
                        <label for="contactPhone" class="form-label">Phone</label>
                        <input type="text" class="form-control" id="contactPhone"/>
                    </div>
                    <div>
                        <label for="contactSubject" class="form-label">Subject</label>
                        <input type="text" class="form-control" id="contactSubject"/>
                    </div>
                </div>
                <div className="mb-26">
                    <label for="contactMessage" class="form-label">Message</label>
                    <textarea class="form-control" id="contactMessage" rows="3"></textarea>
                </div>
            </form>
        </div>
      </div>

      {/* <Footer/> */}
    </div>

    
  );
}

export async function getServerSideProps(context) {
  // const products = await fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json());

  return {
    props: {
      //products
    }
  }
}