type Food = {
  name: string;
  rate: number;
};
export class FoodRatings {
  foods: string[];
  cuisines: string[];
  ratings: number[];
  foodlist: Map<string, Food[]>;
  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.foods = foods;
    this.cuisines = cuisines;
    this.ratings = ratings;
    this.foodlist = new Map();
    this.cuisines.forEach((c, i) => {
      this.pushToMapArray(this.foodlist, c, { name: this.foods[i], rate: this.ratings[i] });
    });
  }

  pushToMapArray<K, V>(map: Map<K, V[]>, key: K, value: V) {
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(value);
  }

  changeRating(food: string, newRating: number): void {
    this.cuisines.forEach((c, i) => {
      const cousinF = this.foodlist.get(c);
      if (cousinF) {
        const foodUp = cousinF.find((u) => u.name === food);
        if (foodUp) {
          foodUp.name = food; // actualizamos su nombre
          foodUp.rate = newRating;
        }
        this.foodlist.set(c, cousinF);
      }
    });
  }

  highestRated(cuisine: string): string {
    const food = this.foodlist.get(cuisine);
    let highscore = 0;
    let foodName = '';
    food?.forEach((f) => {
      if (highscore < f.rate) {
        highscore = f.rate;
        foodName = f.name;
      }
      if (highscore === f.rate) {
        const r = [];
        r.push(foodName);
        r.push(f.name);
        r.sort();
        foodName = r[0];
      }
    });
    return foodName;
  }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
