function Stat({ icon, number, label }) {
  return (
    <div className="stat">
      <img src={icon} alt="" />
      <div className="stat-details">
        <h2>{number}</h2>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <div className="achievements">
      <div className="achievements-left">
        <h1>
          Helping a local <br />
          <span>business reinvent itself</span>
        </h1>
        <p>We reached here with our hard work and dedication</p>
      </div>

      <div className="counts">
        <Stat icon="/10.png" number="2,245,341" label="Members" />
        <Stat icon="/20.png" number="46,328" label="Clubs" />
        <Stat icon="/30.png" number="828,867" label="Event Bookings" />
        <Stat icon="/40.png" number="1,926,436" label="Payments" />
      </div>
    </div>
  );
}
