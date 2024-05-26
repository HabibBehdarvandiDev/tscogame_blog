
import Animation from "./Animation";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-white xl:bg-primary min-h-screen min-w-screen flex">
      <div className="login w-full bg-white xl:w-1/2 xl:m-4 xl:rounded-xl xl:p-3 flex justify-center items-center align-middle">
        <LoginForm />
      </div>
      <div className="animation hidden xl:flex xl:w-1/2 justify-center align-middle items-center">
        <Animation />
      </div>
    </div>
  );
};

export default LoginPage;
