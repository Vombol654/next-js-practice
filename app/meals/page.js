import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.highlight}>
          Delicious meals, created <span>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals ...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealPage;
