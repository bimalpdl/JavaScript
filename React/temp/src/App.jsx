import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const brands = [
  {
    id: 1,
    bname: "Facebook",
    image: facebook,
    category: "Social Media",
    description: "A largest social media company, falls under Meta Corp."
  },
  {
    id: 2,
    bname: "LinkedIn",
    image: linkedin,
    category: "Professional Social Media",
    description: "Social media platform for professionals"
  },
  {
    id: 3,
    bname: "GitHub",
    image: github,
    category: "Developer collaboration",
    description: "Collaboration platform for developers, initially developed by Linus."
  }
];

export default function Brands() {
  const itemsList = brands.map(brand => (
    <li key={brand.id}>
      <img
        src={brand.image}
        alt={brand.bname}
        style={{ border: "1px solid red", borderRadius: "20px" }}
      />
      <h1>{brand.bname}</h1>
      <p>{brand.category}: {brand.description}</p>
    </li>
  ));

  return (
    <main>
      <h1>Top Social Platforms:</h1>
      <ul>{itemsList}</ul>
    </main>
  );
}
