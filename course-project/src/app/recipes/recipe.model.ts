export class Recipe {

  public name: string;
  public description: string;
  public imagePath: string;

  constructor(settings) {
    this.name = settings.name;
    this.description = settings.description;
    this.imagePath = settings.imagePath;
  }

}
