import { TiltCard } from "./tilt-card";

export function Skills() {
  return (
    <section className="section" aria-labelledby="skills-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{"04 / KEAHLIAN"}</span>
          <h2 id="skills-title">
            {"Perangkat di balik pekerjaan"}
            <span>{"."}</span>
          </h2>
        </div>
      </div>
      <div className="skills-grid">
        <TiltCard className="card skill-card tilt">
          <span className="skill-icon" aria-hidden="true">
            {"</>"}
          </span>
          <h3>{"Development & data"}</h3>
          <p>{"Fondasi aplikasi dan layanan."}</p>
          <div className="tags">
            <span>{"Node.js"}</span>
            <span>{"Python"}</span>
            <span>{"PHP / Laravel"}</span>
            <span>{"React.js"}</span>
            <span>{"FastAPI"}</span>
            <span>{"REST API"}</span>
            <span>{"PostgreSQL"}</span>
            <span>{"SQL"}</span>
            <span>{"Prisma ORM"}</span>
          </div>
          <p className="small-copy">
            {"Pemeliharaan database & keamanan sistem dasar."}
          </p>
        </TiltCard>
        <TiltCard className="card skill-card tilt">
          <span className="skill-icon" aria-hidden="true">
            {"✳"}
          </span>
          <h3>{"AI & infrastructure"}</h3>
          <p>{"Dari model ke deployment."}</p>
          <div className="tags">
            <span>{"RAG"}</span>
            <span>{"CNN"}</span>
            <span>{"LLM Integration"}</span>
            <span>{"Docker"}</span>
            <span>{"Google Cloud"}</span>
            <span>{"Windows Server"}</span>
            <span>{"Cisco dasar"}</span>
            <span>{"LAN / WAN"}</span>
          </div>
          <p className="small-copy">
            {"Troubleshooting sistem operasi & perangkat keras."}
          </p>
        </TiltCard>
        <TiltCard className="card skill-card tilt">
          <span className="skill-icon" aria-hidden="true">
            {"↗"}
          </span>
          <h3>{"Collaboration"}</h3>
          <p>{"Teknologi bekerja bersama manusia."}</p>
          <div className="tags">
            <span>{"Trello"}</span>
            <span>{"Notion"}</span>
            <span>{"Microsoft Office"}</span>
            <span>{"Google Workspace"}</span>
            <span>{"Leadership"}</span>
            <span>{"Problem solving"}</span>
            <span>{"Komunikasi"}</span>
          </div>
          <div className="languages">
            <span>
              {"Bahasa Indonesia "}
              <b>{"Native"}</b>
            </span>
            <span>
              {"Bahasa Inggris "}
              <b>{"Aktif"}</b>
            </span>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
