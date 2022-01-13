

export default function Item(props) {
  return (
    <div className="ItemContainer">
      <img className="ItemImage" src={props.image} alt={props.imageDesc} />
      <div classname="ItemDescription">
        {props.description}
      </div>
    </div>
  );
}