export default function CoreConcepts({ image, title, description }) {
  console.log("CORE CONCEPTS COMPONENT");
  
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
