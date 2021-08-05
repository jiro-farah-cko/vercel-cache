import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ currentDateTime }) {
  return (
    <div className={styles.container}>
      <h2>{currentDateTime}</h2>
    </div>
  );
}

export async function getStaticProps() {
  const currentDateTime = new Date().toISOString();
  const targetMinDateTime = "2021-08-05T11:25:14.645Z";
  const targetMaxDateTime = "2021-08-05T11:30:14.645Z";

  console.log(`Current Date time: ${currentDateTime}`);
  console.log(`Current Target min Date time: ${targetMinDateTime}`);
  console.log(`Current Target max Date time: ${targetMaxDateTime}`);

  if (
    currentDateTime > targetMaxDateTime ||
    currentDateTime < targetMinDateTime
  ) {
    return {
      props: {
        currentDateTime,
      },
      revalidate: 1,
    };
  }

  return {
    notFound: true,
  };
}
