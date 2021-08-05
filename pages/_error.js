const Error = ({ statusCode }) => (
  <div>
    <h1>{statusCode}</h1>
  </div>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode;
  return { statusCode };
};

export default Error;
