import "./legal.css";

export default function Privacy() {
  return (
    <main className="legal">
      <section className="legal">
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: 2025-11-16</p>

        <div>
          <h2>1. Responsible Party (Verantwortlicher)</h2>
          <p>
            Operator: <strong>Marcel Peda</strong>
            <br />
            Address: <strong>Lindenstr. 11, 27419 Sittensen, Germany</strong>
            <br />
            Contact:{" "}
            <a href="mailto:support@matchcraft.gg">
              <strong>support@matchcraft.gg</strong>
            </a>
          </p>
        </div>

        <div>
          <h2>2. Processed Data</h2>
          <ul>
            <li>Discord username</li>
            <li>Discord user ID</li>
            <li>Event participations & XP</li>
            <li>Message timestamps</li>
          </ul>
        </div>

        <div>
          <h2>3. Legal Basis (GDPR Articles 6 & 49)</h2>
          <ul>
            <li>
              <strong>Art. 6(1)(b)</strong> – Required for providing bot functionality
            </li>
            <li>
              <strong>Art. 6(1)(f)</strong> – Legitimate interest (security, preventing abuse)
            </li>
            <li>
              <strong>Art. 6(1)(a)</strong> – Consent (optional features)
            </li>
          </ul>
        </div>

        <div>
          <h2>4. Purposes</h2>
          <ul>
            <li>Hosting scrims and tournaments</li>
            <li>XP and performance tracking</li>
            <li>Generating leaderboards</li>
            <li>Preventing abuse and debugging</li>
          </ul>
        </div>

        <div>
          <h2>5. Storage Duration</h2>
          <ul>
            <li>
              User activity: up to <strong>24 months</strong> without interaction
            </li>
            <li>
              Error logs: up to <strong>90 days</strong>
            </li>
          </ul>
        </div>

        <div>
          <h2>6. Data Transfers</h2>
          <p>If servers are outside the EU, GDPR safeguards apply (Art. 46 GDPR).</p>
        </div>

        <div>
          <h2>7. Rights of Data Subjects</h2>
          <ul>
            <li>Access (Art. 15)</li>
            <li>Rectification (Art. 16)</li>
            <li>Erasure (Art. 17)</li>
            <li>Restriction (Art. 18)</li>
            <li>Portability (Art. 20)</li>
            <li>Objection (Art. 21)</li>
            <li>Complaint (Art. 77)</li>
          </ul>
        </div>

        <div>
          <h2>8. Children</h2>
          <p>Bot intended for 13+. If younger users' data is found, it will be deleted.</p>
        </div>

        <div>
          <h2>9. Requests / Deletion</h2>
          <p>
            You may request access or deletion via:{" "}
            <a href="mailto:support@matchcraft.gg">support@matchcraft.gg</a>
          </p>
        </div>

        <div>
          <h2>10. Updates</h2>
          <p>Policy may update; newest version always applies.</p>
        </div>
      </section>

      <footer>&copy; 2025 MatchCraft. All rights reserved.</footer>
    </main>
  );
}
