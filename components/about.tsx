import { TiltCard } from "./tilt-card";

export function About() {
  return (
    <section id="tentang" className="bento" aria-label="Tentang Akbar">
      <TiltCard className="card hero tilt">
        <div className="eyebrow">
          <span className="mini-icon" aria-hidden="true">
            {"</>"}
          </span>
          {" BACKEND · FULL-STACK · AI/ML"}
        </div>
        <h1>
          {"Halo, saya Akbar."}
          <br />
          {"Membangun sistem,"}
          <br />
          <span>{"menghubungkan ide."}</span>
        </h1>
        <p>
          {
            "Lulusan Teknik Informatika yang mengembangkan backend, aplikasi web, dan solusi AI—dari REST API hingga model computer vision di cloud."
          }
        </p>
        <div className="hero-actions">
          <a className="button dark" href="#proyek">
            {"Jelajahi proyek "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a className="text-link" href="/cv-akbar.pdf" download>
            {"Unduh CV "}
            <span aria-hidden="true">{"↓"}</span>
          </a>
        </div>
        <div className="hero-bottom">
          <span className="full-name">{"Muhammad Akbar Kasyfurrahman"}</span>
          <span>{"01 / TENTANG SAYA"}</span>
        </div>
      </TiltCard>
      <TiltCard
        className="card lab tilt"
        aria-label="Fokus pengembangan: backend dan kecerdasan buatan"
      >
        <div className="lab-head">
          <span>{"IDE → SISTEM → SOLUSI"}</span>
          <span className="pill-outline">{"ENGINEERING"}</span>
        </div>
        <div className="system-scene" aria-hidden="true">
          <div className="system-layer layer-data">
            <span className="layer-no">{"03"}</span>
            <div>
              <small>{"DATA LAYER"}</small>
              <strong>
                {"PostgreSQL "}
                <b>{"✳"}</b>
              </strong>
            </div>
          </div>
          <div className="system-layer layer-api">
            <span className="layer-no">{"02"}</span>
            <div>
              <small>{"API LAYER"}</small>
              <strong>
                {"FastAPI "}
                <b>{"↗"}</b>
              </strong>
            </div>
          </div>
          <div className="system-layer layer-ai">
            <span className="layer-no">{"01"}</span>
            <div>
              <small>{"INTELLIGENCE LAYER"}</small>
              <strong>
                {"AI & Machine Learning "}
                <b>{"✦"}</b>
              </strong>
            </div>
          </div>
        </div>
        <div className="lab-bottom">
          <div>
            <h2>
              {"Built with logic."}
              <br />
              {"Driven by curiosity."}
            </h2>
            <p>{"Backend, model, dan infrastruktur."}</p>
          </div>
          <span className="round-icon" aria-hidden="true">
            {"↗"}
          </span>
        </div>
      </TiltCard>
      <TiltCard className="card education tilt">
        <div className="eyebrow">{"PENDIDIKAN"}</div>
        <div className="education-row">
          <div>
            <h2>
              {"Sarjana"}
              <br />
              {"Teknik Informatika"}
            </h2>
            <p>{"Universitas Perjuangan Tasikmalaya"}</p>
            <span className="meta">{"Sep 2021 — Agu 2025"}</span>
          </div>
          <div className="gpa">
            <strong>
              {"3.78"}
              <span>{"/4"}</span>
            </strong>
            <span>{"INDEKS PRESTASI KUMULATIF"}</span>
          </div>
        </div>
      </TiltCard>
      <TiltCard className="card focus tilt">
        <div className="eyebrow">
          {"FOKUS TEKNOLOGI "}
          <span aria-hidden="true">{"⌘"}</span>
        </div>
        <h2>
          {"Satu ide."}
          <br />
          {"Banyak kemungkinan."}
        </h2>
        <div className="tags">
          <span>{"Node.js"}</span>
          <span>{"Python"}</span>
          <span>{"FastAPI"}</span>
          <span>{"Laravel"}</span>
          <span>{"React.js"}</span>
          <span>{"Docker"}</span>
        </div>
      </TiltCard>
      <TiltCard className="card leadership tilt">
        <div className="eyebrow">{"LEADERSHIP"}</div>
        <strong className="big-number">
          {"20"}
          <span>{"orang"}</span>
        </strong>
        <h2>{"Belajar & bertumbuh bersama."}</h2>
        <p>
          {
            "Memimpin dan melatih tim mahasiswa di bidang robotika, Arduino, dan IoT."
          }
        </p>
      </TiltCard>
    </section>
  );
}
