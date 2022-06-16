export const Card = (props) => {
  const {color} = props
  
  return (
    <>
      <div
        className="card text-bg-primary mb-1 p-3 mx-auto h-100"
        style={{maxWidth: "18rem", borderBottom:color}}  
      >
        <div className="card-body">
          <h4 className="card-title">{props.cardName}</h4>
          <p className="card-text">{props.totalData}</p>
        </div>
      </div>
    </>
  );
};
