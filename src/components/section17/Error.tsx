export default function Error({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <>
      <div role="alert">
        <h1>에러가 발생했습니다.</h1>
        <p style={{ color: "red" }}>{error.message}</p>
        <button onClick={resetErrorBoundary}>다시 시도</button>
      </div>
    </>
  );
}
