
import { useState } from "react";
import "./App.css";

function App() {
  const [phone, setPhone] = useState("");
  const [showSurprise, setShowSurprise] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Please enter a valid 10-digit mobile number ❤️");
      return;
    }

    setError("");
    setShowSurprise(true);
  };

  return (
    <div className="app">
      {!showSurprise ? (
        <div className="offer-page">
          <div className="offer-card">
            <div className="top-tag">🪔 DIWALI DHAMAKA 🪔</div>

            <div className="swiggy-logo">
              <span>swiggy</span>
              <span className="logo-dot">.</span>
            </div>

            <p className="offer-subtitle">
              A special festive treat just for you!
            </p>

            <div className="waffle-image">🧇</div>

            <h1>
              4 BELGIUM
              <br />
              WAFFLES
            </h1>

            <div className="price">
              <span className="old-price">₹399</span>
              <span className="new-price">₹99</span>
            </div>

            <div className="offer-label">
              THIS DIWALI ONLY!
            </div>

            <p className="offer-description">
              Get 4 delicious Belgium waffles at just ₹99
              this Diwali only on Swiggy!
            </p>

            <form onSubmit={handleSubmit}>
              <label>Enter your mobile number</label>

              <div className="phone-input">
                <span>+91</span>
                <input
                  type="tel"
                  placeholder="Enter 10-digit number"
                  value={phone}
                  maxLength={10}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, ""))
                  }
                />
              </div>

              {error && <p className="error">{error}</p>}

              <button type="submit">
                AVAIL OFFER NOW 🎁
              </button>
            </form>

            <p className="limited">
              Hurry! Offer ends soon. ⏳
            </p>

            <div className="footer-text">
              ✨ Spreading sweetness this Diwali ✨
            </div>
          </div>
        </div>
      ) : (
        <SurprisePage />
      )}
    </div>
  );
}

function SurprisePage() {
  const fireworks = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 75}%`,
    delay: `${Math.random() * 4}s`,
    duration: `${1.5 + Math.random() * 2}s`,
  }));

  return (
    <div className="surprise-page">
      <div className="stars">✨ 🪔 ✨</div>

      <div className="fireworks">
        {fireworks.map((firework) => (
          <div
            key={firework.id}
            className="firework"
            style={{
              left: firework.left,
              top: firework.top,
              animationDelay: firework.delay,
              animationDuration: firework.duration,
            }}
          />
        ))}
      </div>

      <div className="surprise-content">
        <div className="big-diya">🪔</div>

        <p className="surprise-top">
          A LITTLE DIWALI SURPRISE FOR YOU
        </p>

        <h1 className="surprise-title">
          HAPPY DIWALI
          <span>MY PATAKA ❤️</span>
        </h1>

        <div className="message-card">
          <h2>Waffle chahiye? 🧇</h2>

          <p>
            Arey tu hi toh hai hot sexy desi Indian
            waffle meri jaan. ❤️
          </p>

          <p className="pataka">
            Meri pataka! 🎇
          </p>

          <div className="message-divider">✦ ✦ ✦</div>

          <p>
            Happy Diwali to you, sweetheart! ❤️
          </p>

          <p>
            And I am sorry that you didn't feel special
            this Diwali.
          </p>

          <p>
            By the way, I was about to send you a
            Diwali hamper on Diwali, but you got upset
            beforehand. 🥺
          </p>

          <p>
            Anyways, Happy Diwali!
          </p>

          <h2 className="ending">
            Be the pataka you are, forever! ❤️
          </h2>

          <div className="hearts">❤️ 💛 ❤️</div>
        </div>

        <p className="bottom-wish">
          Made with lots of love, just for you. 💕
        </p>
      </div>
    </div>
  );
}

export default App;
