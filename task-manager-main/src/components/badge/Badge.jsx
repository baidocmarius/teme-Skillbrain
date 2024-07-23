import "./Badge.css";

const Badge = (props) => {
  return (
    <div className="badge">
      <p> {props.status} </p>
    </div>
  );
};

export default Badge;
