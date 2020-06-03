import css from "./hero.module.css";

export default function HelloWorld() {
  const info = {
    name: "Oliver",
    city: "Berlin",
    occupation: "web-dev",
  };

  return (
    <div className={css.hero}>
      <div className="row">
        <h1>I'm {info.name}</h1>
        <div className={css.description}>
          I'm a {info.city} based {info.occupation}. Here will be your
          description. Use this to describe what you do or whatever you feel
          best describes yourself to a potential employer.
        </div>
      </div>
    </div>
  );
}
