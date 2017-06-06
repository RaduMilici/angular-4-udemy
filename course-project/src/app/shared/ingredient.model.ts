export class Ingredient {

  public name: string;
  public amount: number;

  constructor(settings) {
    this.name = settings.name;
    this.amount = settings.amount;
  }

}
