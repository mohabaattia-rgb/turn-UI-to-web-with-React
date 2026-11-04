function Post({ image, title }) {
  return (
    <div className="post" style={{ backgroundImage: `url(${image})` }}>
      <div className="post-box">
        <h3>{title}</h3>
        <a href="#">Readmore →</a>
      </div>
    </div>
  );
}

export default function Updates() {
  return (
    <div className="updates">
      <div className="top-updates">
        <h1>Caring is the new marketing</h1>
        <p>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>

      <div className="posts">
        <Post
          image="/a.png"
          title="Creating Streamlined Safeguarding Processes with OneRen"
        />
        <Post
          image="/b.png"
          title="What are your safeguarding responsibilities and how can you manage them?"
        />
        <Post
          image="/c.png"
          title="Revamping the Membership Model with Triathlon Australia"
        />
      </div>
    </div>
  );
}
