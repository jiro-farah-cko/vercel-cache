import { useRouter } from "next/router";

const DynamicRoute = ({ currentTime }) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <p>
      Dynamic Page: {pid} : {currentTime}
    </p>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { dynamicRoute: [user.id.toString()] },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return { props: { user, currentTime: new Date().toISOString() } };
}
export default DynamicRoute;
