export function Contact() {
  return (
    <section id="kontak" className="card contact section">
      <div className="contact-copy">
        <span className="eyebrow">{"05 / MARI TERHUBUNG"}</span>
        <h2>
          {"Ide berikutnya,"}
          <br />
          {"kita bangun bersama"}
          <span>{"?"}</span>
        </h2>
        <p>{"Terbuka untuk penempatan di Jawa, Sumatra, dan Kalimantan."}</p>
        <a className="email" href="mailto:akbar.kasyfurrahman24@gmail.com">
          {"akbar.kasyfurrahman24@gmail.com "}
          <span aria-hidden="true">{"↗"}</span>
        </a>
      </div>
      <div className="contact-links">
        <a
          href="https://linkedin.com/in/akbarksfrhmn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"LinkedIn "}
          <span aria-hidden="true">{"↗"}</span>
        </a>
        <a
          href="https://github.com/akbarksfrhmn24"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"GitHub "}
          <span aria-hidden="true">{"↗"}</span>
        </a>
        <a href="tel:+6285318545593">
          {"+62 853 1854 5593 "}
          <span aria-hidden="true">{"↗"}</span>
        </a>
        <a href="/cv-akbar.pdf" download>
          {"Unduh curriculum vitae "}
          <span aria-hidden="true">{"↓"}</span>
        </a>
      </div>
    </section>
  );
}
