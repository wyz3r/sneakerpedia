export class FoodRatings {
  foods: string[];
  cuisines: string[];
  ratings: number[];

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.foods = foods;
    this.cuisines = cuisines;
    this.ratings = ratings;
  }

  changeRating(food: string, newRating: number): void {
    const index = this.foods.indexOf(food);
    this.ratings[index] = newRating;
  }

  highestRated(cuisine: string): string {
    console.log(this.ratings);
    const foodIndex = this.cuisines
      .map((n, ind) => {
        return cuisine === n ? ind : -1;
      })
      .filter((ind) => ind > -1);
    let highScore = 0;
    let highIndex = 0;

    foodIndex.forEach((i) => {
      if (highScore < this.ratings[i]) {
        highScore = this.ratings[i];
        highIndex = i;
      }
      if (highScore === this.ratings[i]) {
        highScore =
          this.foods[highIndex].length < this.foods[i].length
            ? this.ratings[highIndex]
            : this.ratings[i];
        highIndex = this.foods[highIndex].length < this.foods[i].length ? highIndex : i;
      }
    });

    console.log({ highIndex });
    console.log(this.foods[highIndex]);
    console.log(this.foods.sort());
    return this.foods[highIndex];
  }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
