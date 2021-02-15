let state = {
  fName: "Veronica",
  lName: "Lino",
  city: "Houston",
};

console.log(state);

let newState = {
    ...state,
    fName: "Celeste"
}

console.log(newState);