
class Color{
  constructor(){
    this.color=[
      this.randomRgb(),this.randomRgb(),this.randomRgb()
    ]
  }
  randomRgb(){
    return Math.floor(Math.random()*(255-0));
  }
}
const color=new Color();

console.log(color.color);
