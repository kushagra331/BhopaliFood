import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err=useRouteError();
    const {status,statusText}=err;
    return (
        <>
            <h1>Opsssssss !</h1>
            <h2>Somthing went wrong !!</h2>
            <h3>{status+" : "+statusText}</h3>
        </>
    )
}

export default ErrorPage;