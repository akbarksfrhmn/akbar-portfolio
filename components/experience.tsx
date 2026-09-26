import { TiltCard } from "./tilt-card";

export function Experience() {
  return (
    <section id="pengalaman" className="section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{"03 / PERJALANAN"}</span>
          <h2>
            {"Pengalaman yang membentuk"}
            <span>{"."}</span>
          </h2>
        </div>
      </div>
      <div className="journey-grid">
        <article className="card experience">
          <div className="eyebrow">{"PENGALAMAN KERJA"}</div>
          <details open>
            <summary>
              <span className="company-icon" aria-hidden="true">
                {"N"}
              </span>
              <span>
                <strong>{"IT Support & Technician"}</strong>
                <span>{"Nakama Creative Lab · Freelance"}</span>
              </span>
              <span className="job-date">{"MEI 2026"}</span>
              <span className="expand" aria-hidden="true">
                {"+"}
              </span>
            </summary>
            <p>
              {
                "Memasang dan mengonfigurasi Network Attached Storage (NAS), termasuk RAID, kontrol akses pengguna, serta penjadwalan pencadangan otomatis."
              }
            </p>
          </details>
          <details>
            <summary>
              <span className="company-icon" aria-hidden="true">
                {"ST"}
              </span>
              <span>
                <strong>{"Web Developer"}</strong>
                <span>{"PT. Sejahtera Tri Mulya Indonesia · Freelance"}</span>
              </span>
              <span className="job-date">{"JUN 2025"}</span>
              <span className="expand" aria-hidden="true">
                {"+"}
              </span>
            </summary>
            <p>
              {
                "Mengembangkan website company profile untuk Internet Service Provider (ISP) menggunakan Laravel 12 dan Tailwind CSS, dengan penerapan praktik keamanan dasar."
              }
            </p>
          </details>
          <details>
            <summary>
              <span className="company-icon" aria-hidden="true">
                {"TB"}
              </span>
              <span>
                <strong>{"Web Developer"}</strong>
                <span>{"PT. Tajir Bersama Group · Freelance"}</span>
              </span>
              <span className="job-date">{"AGU 2024"}</span>
              <span className="expand" aria-hidden="true">
                {"+"}
              </span>
            </summary>
            <p>
              {
                "Mengembangkan, memelihara, dan mengelola konten website perusahaan menggunakan WordPress CMS."
              }
            </p>
          </details>
          <details>
            <summary>
              <span className="company-icon" aria-hidden="true">
                {"PG"}
              </span>
              <span>
                <strong>{"IT Support & Technician"}</strong>
                <span>{"PG Computer · Magang"}</span>
              </span>
              <span className="job-date">{"AGU — DES 2019"}</span>
              <span className="expand" aria-hidden="true">
                {"+"}
              </span>
            </summary>
            <p>
              {
                "Mendiagnosis, memperbaiki, dan merawat perangkat keras pelanggan, termasuk PC dan laptop."
              }
            </p>
          </details>
        </article>
        <div className="journey-side">
          <TiltCard className="card organization tilt">
            <div className="eyebrow">{"ORGANISASI · JAN — DES 2022"}</div>
            <h3>
              {"Kepala Departemen"}
              <br />
              {"Kemahasiswaan"}
            </h3>
            <p>
              {"UKM Robotika"}
              <br />
              {"Universitas Perjuangan Tasikmalaya"}
            </p>
            <p className="small-copy">
              {
                "Menyusun materi teknis dan mengoordinasikan forum pembelajaran robotika secara daring maupun luring."
              }
            </p>
          </TiltCard>
          <TiltCard className="card school tilt">
            <div className="eyebrow">{"PENDIDIKAN KEJURUAN"}</div>
            <h3>
              {"Teknik Komputer"}
              <br />
              {"& Jaringan"}
            </h3>
            <p>{"SMK Negeri 4 Tasikmalaya"}</p>
            <span className="meta">{"Jul 2017 — Mei 2020"}</span>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
