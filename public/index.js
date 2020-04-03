init();

async function init() {
  console.log("in init")
  if (location.search.split("=")[1] === undefined) {
    console.log("in if 1A")
    const workout = await API.getLastWorkout();
    if (workout) {
      console.log("in if 1B")
      location.search = "?id=" + workout._id;
    } else {
      console.log("in if 1C")
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

