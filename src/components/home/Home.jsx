import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/terms/"); // EXAMPLE, CHANGE LATER

  return (
    <main className="home">
      <section className="home">
        <h1>MatchCraft</h1>
        <p>Automate scrim hosting, run tournaments, track stats & XP — directly in Discord.</p>
        <button className="cta add-link" onClick={handleCTA}>
          Coming soon ..
        </button>
      </section>

      <footer>&copy; 2025 MatchCraft. All rights reserved.</footer>
    </main>
  );
}
