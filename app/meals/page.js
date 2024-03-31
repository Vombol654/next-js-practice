import Link from "next/link";

const MealPage = () => {
  return (
    <h1>
      I am from meal page
      <Link href="/meals/id-1">meals-1</Link>
      <Link href="/meals/id-2">meals-2</Link>
    </h1>
  );
};

export default MealPage;
