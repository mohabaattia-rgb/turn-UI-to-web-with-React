function Card({ title, description , image }) {
  return (
    <div className="card">
      <img src={image} alt={image} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default function Communication(){
    return (
      <div className="comms">
        <div className="top-comms" >
          <h1>
            Manage your entire community 
          </h1> <h1>in a single system</h1> 
          
          <p>Who is Nextcent suitable for?</p>
        </div>
        <div className="cards">
          <Card
            title={"Membership Organisations"}
            description={
              "Our membership management software provides full automation of membership renewals and payments"
            }
            image="/icon1.png"
          />
          <Card
            title={"National Associations"}
            description={
              "Our membership management software provides full automation of membership renewals and payments"
            }
            image="/icon2.png"
          />
          <Card
            title={"Clubs And Groups"}
            description={
              "Our membership management software provides full automation of membership renewals and payments"
            }
            image="/Icon3.png"
          />
        </div>
      </div>
    );
}
