import { CurrentYear } from "./current-year";

export function Footer() {
  return (
    <footer className="shell">
      <a className="brand" href="#">
        {"akbar"}
        <span>{"✳"}</span>
      </a>
      <span>
        {"© "}
        <CurrentYear />
        {" Muhammad Akbar Kasyfurrahman"}
      </span>
      <a href="#">{"Kembali ke atas ↑"}</a>
    </footer>
  );
}
