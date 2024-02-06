import logo from "./assets/logo-nlw-expert.svg";

export const App = () => {
  return (
    <div>
      <img src={logo} alt="nlw-experts-logo" />;
      <input type="text" placeholder="Busque em suas notas..." />
    </div>
  );
};
