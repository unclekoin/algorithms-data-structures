const functionThree = () => {
  console.log('Three');
};

const functionTwo = () => {
  functionThree();
  console.log('Two');
};

const functionOne = () => {
  functionTwo();
  console.log('One');
};

functionOne();
