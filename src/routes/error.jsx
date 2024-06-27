import { useRouteError } from "react-router-dom";
export default function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div className="flex h-52 flex-col items-center justify-center">
      <h1>Oops! Someting went wrong</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
