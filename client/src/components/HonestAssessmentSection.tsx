// "Why Royalty" section — id="why-royalty"
// Full-width H2, then two-column: proof blocks left, photo right

const ROOF_PHOTO =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663367059095/OMqfvJrRBGVxVfGd.webp";

const PROOF_BLOCKS = [
  {
    num: "01",
    title: "We're out fast",
    body: "We don't make you wait weeks for a quote. We get to your home quickly, assess the situation, and give you a clear answer — usually within 24–48 hours.",
  },
  {
    num: "02",
    title: "We do repairs, not just replacements",
    body: "A lot of companies push replacements when a repair is all you need. We'll tell you honestly what your roof requires and quote accordingly.",
  },
  {
    num: "03",
    title: "We handle your insurance claim",
    body: "If you have storm damage, we work directly with your adjuster, document everything, and make sure you get what you're entitled to.",
  },
  {
    num: "04",
    title: "Written warranty on every job",
    body: "Every job we do comes with a written workmanship warranty. You'll know exactly what's covered and for how long.",
  },
];

export default function HonestAssessmentSection() {
  const scrollToForm = () => {
    document.getElementById("bottom-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-royalty" style={{ background: "#ffffff", padding: "96px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px" }}>
        {/* Full-width H2 */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(44px, 6vw, 80px)",
            lineHeight: 0.93,
            color: "#0A1220",
            margin: "0 0 56px",
            letterSpacing: "0.01em",
          }}
        >
          WE COME TO YOUR HOME, GET ON YOUR ROOF, AND GIVE YOU A STRAIGHT ANSWER ABOUT WHAT IT{" "}
          <span style={{ color: "#3D6CC0" }}>ACTUALLY NEEDS.</span>
        </h2>

        {/* Two-column: proof left, photo right */}
        <div
          className="why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "17px",
                color: "#374151",
                lineHeight: 1.75,
                marginBottom: "40px",
                maxWidth: "520px",
              }}
            >
              We show up when we say we will, take on jobs of every size, and only recommend what
              your roof actually needs. No upsells. No pressure.
            </p>
            <div>
              {PROOF_BLOCKS.map(({ num, title, body }) => (
                <div
                  key={num}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: "16px",
                    marginBottom: "32px",
                    alignItems: "start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "28px",
                      color: "#3D6CC0",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                        fontSize: "17px",
                        color: "#0A1220",
                        marginBottom: "6px",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                        color: "#6B7280",
                        lineHeight: 1.7,
                      }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={scrollToForm}
              style={{
                marginTop: "8px",
                background: "#3D6CC0",
                color: "white",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 32px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.03em",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#2d5aad";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#3D6CC0";
              }}
            >
              Schedule a Free Estimate
            </button>
          </div>

          {/* RIGHT: Photo */}
          <div style={{ position: "relative" }}>
            <img
              src={ROOF_PHOTO}
              alt="Royalty Roofing completed job"
              className="why-photo"
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                borderRadius: "12px",
                display: "block",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .why-photo { height: 320px !important; }
        }
        @media (max-width: 640px) {
          #why-royalty { padding: 56px 0 !important; }
        }
      `}</style>
    </section>
  );
}
