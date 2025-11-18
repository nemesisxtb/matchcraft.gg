import "./legal.css";

export default function Terms() {
  return (
    <main className="legal">
      <section className="legal">
        <h1>Terms of Service</h1>
        <p className="muted">Last updated: 2025-11-16</p>

        <div>
          <h2>1. Introduction</h2>
          <p>
            These Terms govern your use of the MatchCraft Discord bot. By inviting or using the Bot,
            you agree to them.
          </p>
        </div>

        <div>
          <h2>2. Responsible Entity</h2>
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
          <h2>3. Eligibility</h2>
          <p>Users must meet Discord’s minimum age requirement (usually 13+).</p>
        </div>

        <div>
          <h2>4. Description of Service</h2>
          <p>
            MatchCraft provides automated scrim hosting, tournament hosting, XP tracking, and
            in-Discord statistics.
          </p>
        </div>

        <div>
          <h2>5. Data & Permissions</h2>
          <ul>
            <li>Discord username</li>
            <li>Discord user ID</li>
            <li>Scrims played & won</li>
            <li>Tournaments played & won</li>
            <li>XP</li>
            <li>Last message timestamp</li>
            <li>Last stream timestamp</li>
          </ul>
        </div>

        <div>
          <h2>6. User Responsibilities</h2>
          <ul>
            <li>No exploiting or abusing the Bot.</li>
            <li>No harassment or illegal activities.</li>
            <li>Follow Discord’s Terms & Guidelines.</li>
          </ul>
        </div>

        <div>
          <h2>7. Bot Availability</h2>
          <p>Service may change, be updated, or be unavailable at any time.</p>
        </div>

        <div>
          <h2>8. Liability</h2>
          <p>
            Liability for slight negligence is excluded under German law (except gross negligence or
            intent).
          </p>
        </div>

        <div>
          <h2>9. Governing Law</h2>
          <p>
            German law applies. Jurisdiction is <strong>CITY</strong> if permitted.
          </p>
        </div>

        <div>
          <h2>10. Changes</h2>
          <p>Using the Bot after updates means acceptance of the updated Terms.</p>
        </div>
      </section>

      <footer>&copy; 2025 MatchCraft. All rights reserved.</footer>
    </main>
  );
}
