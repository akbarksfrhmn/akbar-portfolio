export function Header() {
  return (
    <header className="nav shell">
      <a className="brand" href="#" aria-label="Akbar, beranda">
        {"akbar"}
        <span>{"✳"}</span>
      </a>
      <nav aria-label="Navigasi utama">
        <a href="#tentang">{"Tentang"}</a>
        <a href="#proyek">{"Proyek"}</a>
        <a href="#pengalaman">{"Pengalaman"}</a>
      </nav>
      <a className="nav-contact" href="#kontak">
        {"Mari terhubung "}
        <span aria-hidden="true">{"↗"}</span>
      </a>
    </header>
  );
}
