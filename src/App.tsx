import logo from "./assets/logo-nlw-expert.svg";

export const App = () => {
  return (
    <div className="mx-auto max-w-6xl my-12">
      <img src={logo} alt="nlw-experts-logo" />;
      <input type="text" placeholder="Busque em suas notas..." />
    </div>
  );
};
