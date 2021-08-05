import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ currentDateTime }) {
  return (
    <div className={styles.container}>
      <h2>{currentDateTime}</h2>
    </div>
  );
}

export async function getStaticProps(context) {
  const currentDateTime = new Date().toISOString();
  const targetDateTime = "2021-08-05T10:50:14.645Z";

  console.log(`Current Date time: ${currentDateTime}`);
  console.log(`Current Target Date time: ${targetDateTime}`);

  if (currentDateTime < targetDateTime) {
    return {
      props: {
        currentDateTime,
      },
    };
  }
  return {
    notFound: true,
  };
}
