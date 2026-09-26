import { TiltCard } from "./tilt-card";

export function Projects() {
  return (
    <section id="proyek" className="section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{"02 / PROYEK PILIHAN"}</span>
          <h2>
            {"Dari eksplorasi, jadi solusi"}
            <span>{"."}</span>
          </h2>
        </div>
        <span className="section-aside">{"BACKEND & INTELLIGENT SYSTEMS"}</span>
      </div>
      <div className="projects">
        <TiltCard className="card project featured tilt">
          <div className="project-top">
            <span className="project-index">{"01 / RAG & LLM"}</span>
            <span className="meta">{"MAR — JUL 2025"}</span>
          </div>
          <div
            className="pipeline"
            aria-label="Alur RAG: pertanyaan, retrieval, LLM, jawaban"
          >
            <div>{"Pertanyaan"}</div>
            <i>{"→"}</i>
            <div>{"Retrieval"}</div>
            <i>{"→"}</i>
            <div className="accent-node">{"LLM"}</div>
            <i>{"→"}</i>
            <div>{"Jawaban"}</div>
          </div>
          <span className="project-kind">
            {"AI-POWERED INFORMATION RETRIEVAL"}
          </span>
          <h3>
            {"Informasi kampus."}
            <br />
            {"Jawaban yang relevan."}
          </h3>
          <p>
            {
              "API Retrieval Augmented Generation untuk layanan penerimaan mahasiswa baru Universitas Perjuangan Tasikmalaya. Dibangun dengan FastAPI dan diterapkan untuk layanan pengguna."
            }
          </p>
          <div className="project-footer">
            <div className="tags">
              <span>{"RAG"}</span>
              <span>{"FastAPI"}</span>
              <span>{"LLM Integration"}</span>
            </div>
            <span className="project-symbol" aria-hidden="true">
              {"✳"}
            </span>
          </div>
        </TiltCard>
        <TiltCard className="card project wedding tilt">
          <div className="project-top">
            <span className="project-index">{"02 / BACKEND"}</span>
            <span className="meta">{"JUN 2025"}</span>
          </div>
          <div className="code-window" aria-hidden="true">
            <span className="code-window-bar">
              {"● ● ● "}
              <em>{"invitation.service"}</em>
            </span>
            <code>
              <span>{"const"}</span>
              {" invitation = {"}
              <br />
              {"  templates: "}
              <b>{'"multiple"'}</b>
              {","}
              <br />
              {"  model: "}
              <b>{'"subscription"'}</b>
              {","}
              <br />
              {"  database: "}
              <b>{'"PostgreSQL"'}</b>
              <br />
              {"};"}
            </code>
          </div>
          <span className="project-kind">{"SUBSCRIPTION-BASED PLATFORM"}</span>
          <h3>
            {"Fondasi digital"}
            <br />
            {"untuk hari istimewa."}
          </h3>
          <p>
            {
              "Backend platform SaaS undangan pernikahan berbasis langganan, dengan dukungan berbagai template undangan."
            }
          </p>
          <div className="project-footer">
            <div className="tags">
              <span>{"Node.js"}</span>
              <span>{"PostgreSQL"}</span>
              <span>{"Prisma ORM"}</span>
            </div>
            <span className="project-symbol" aria-hidden="true">
              {"⌘"}
            </span>
          </div>
        </TiltCard>
        <TiltCard className="card project compact tilt">
          <div className="project-top">
            <span className="project-index">{"03 / COMPUTER VISION"}</span>
            <span className="meta">{"AGU 2023 — JAN 2024"}</span>
          </div>
          <div className="project-title-row">
            <span className="square-icon" aria-hidden="true">
              {"⛶"}
            </span>
            <h3>
              {"Deteksi perlengkapan"}
              <br />
              {"keselamatan pendakian"}
            </h3>
          </div>
          <p>
            {
              "Model CNN untuk mengidentifikasi perlengkapan mendaki dalam foto. Proyek Bangkit Academy untuk membantu kesiapan keselamatan pendaki."
            }
          </p>
          <div className="tags">
            <span>{"CNN"}</span>
            <span>{"FastAPI"}</span>
            <span>{"Docker"}</span>
            <span>{"GCP"}</span>
          </div>
        </TiltCard>
        <TiltCard className="card project compact script-project tilt">
          <div className="project-top">
            <span className="project-index">{"04 / COMPUTER VISION"}</span>
            <span className="meta">{"FEB — MAR 2024"}</span>
          </div>
          <div className="project-title-row">
            <span className="square-icon" aria-hidden="true">
              {"Aa"}
            </span>
            <h3>
              {"Teknologi yang mengenali"}
              <br />
              {"Aksara Sunda"}
            </h3>
          </div>
          <p>
            {
              "Model pengenalan aksara untuk membantu siswa memverifikasi tulisan dan bacaan Aksara Sunda. Diterapkan ke Google Cloud Platform."
            }
          </p>
          <div className="tags">
            <span>{"CNN"}</span>
            <span>{"FastAPI"}</span>
            <span>{"Docker"}</span>
            <span>{"GCP"}</span>
          </div>
        </TiltCard>
      </div>
      <a
        className="github-link"
        href="https://github.com/akbarksfrhmn24"
        target="_blank"
        rel="noopener noreferrer"
      >
        {"Kunjungi profil GitHub "}
        <span aria-hidden="true">{"↗"}</span>
      </a>
    </section>
  );
}
