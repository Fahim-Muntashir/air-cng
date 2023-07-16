import Container from "../Shared/Container";
import { categories } from "./CategoriesData";

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <p>{item.label}</p>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
