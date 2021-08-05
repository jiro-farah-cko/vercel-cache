import Head from "next/head";
import {
  getBannerCovidAPI,
  getHomepageAPI,
  getFooterAPI,
  getMenuAPI,
} from "./api";
import Error from "./_error";
import { isValidFooterResponse } from "../dataValidators";
import Hero from "../components/HomepageHero";
import Footer from "../components/Footer";
import HomepageLayout from "../components/HomepageLayout";

/* this is the '/' - homepage basically */
/* were using content={} for the data passed in all the components */

const Home = (props) => {
  const { homepageHero, currentTime, statusCode, noContent, footerData } =
    props;

  if (statusCode || noContent) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <>
      <Head>
        <title>Vercel cache test</title>
      </Head>
      <HomepageLayout>
        <h2>{currentTime}</h2>
        {homepageHero?.length > 0 && <Hero />}

        {footerData && <Footer dataFooter={footerData || {}} />}
      </HomepageLayout>
    </>
  );
};

export async function getStaticProps(context) {
  const footerData = await getFooterAPI();
  const response = await getHomepageAPI();

  const currentTime = new Date().toISOString();
  const menuData = await getMenuAPI(currentTime);
  console.log(currentTime);

  if (!response || !isValidFooterResponse(footerData) || !menuData) {
    context.statusCode = 404;

    return {
      notFound: true,
    };
  }

  const data = response.data || null;
  const homepageHero = data?.homepage_hero || null;

  const noContent = data?.body?.length === 0;

  return {
    props: {
      data: response?.data || null,
      homepageHero,
      menuData: menuData?.data || null,
      footerData: footerData?.data || null,
      noContent,
      id: response?.id || null,
      currentTime,
    },
    revalidate: 1,
  };
}

export default Home;
