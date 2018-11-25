const mark = {
  name: "Mark",
  mass: 72,
  height: 1.75,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};
const john = {
  name: "John",
  mass: 65,
  height: 1.72,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

if (john.BMI > mark.BMI) {
  return `${john.name} has a higher BMI`;
} else {
  return `${mark.name} has a higher BMI`;
}
