import Container from '@mui/material/Container';

function App() {
  const random = Math.floor(Math.random() * 10) + 1;
  let chances = 3; // Initialize chances outside of the function but keep track of it within the state if needed for re-renders
  
  function checkGuess() {
    const guess = document.getElementById("guess"); // Get guess input element each time checkGuess is called
    const inst = document.getElementById("inst");   // Get instruction element each time
    const result = document.getElementById("result"); // Get result element each time
    const advice = document.getElementById("advice"); // Get advice element each time
    const dec = document.getElementById("dec"); // Get advice element each time

    if (!guess || !inst) {
      console.error("DOM elements not found");
      return;
    }

    const guessedNumber = Number(guess.value); // Get the guessed value

    if (guessedNumber === random) {
      inst.innerHTML = "You won the game! "
      dec.innerHTML =" The number was " + random
      result.classList.remove("hidden");
      result.textContent = "🎉 You guessed it right! with accuracy  "+(chances/3)*100
      advice.classList.remove("hidden");
      advice.textContent = "🤩 Congrats:)";
      
    } else {
      chances--; // Decrement chances on a wrong guess
      inst.innerHTML = `You guessed it wrong. `;
      dec.innerHTML =`${chances} chances left.`
      

      if (chances === 0) {
        inst.innerHTML = `You lost the game!`;
        dec.innerHTML =" The number was " + random
        result.classList.remove("hidden");
      result.textContent = "😔Oops! You lost the game!.the number you missed to guess is " + random;
        advice.classList.remove("hidden");
        advice.textContent = "🚀 Try again";
      }
    }
  }
  

  return (
    <div className="App">
      <div className="h-screen flex justify-center items-center guess bg-purple-200">
        <Container maxWidth="sm" className="relative flex flex-col items-center gap-6 border border-solid bg-black border-slate-400 rounded-md p-6 h-[70vh] w-[20vw]">
          <h1 id="result" class="font-normal font-serif text-sm p-1 border border-solid rounded-md  bg-white transform transition-all duration-3000 ease-in-out translate-y-1 hidden text-center absolute top-5"></h1>
          <h2 className=" font-bold mt-8 text-4xl text-purple-600 text-center">Guess the Random Number Between </h2>
          <h2 className="mb-4 font-bold text-3xl text-center text-white"><span>1 and 10</span></h2>
          <div className="flex gap-1">
          <p id="inst" className="font-medium text-2xl text-purple-600">You have 3 chances to guess the number!</p>
          <p id="dec" className="font-medium text-2xl text-white"></p>
          </div>
          <input 
            placeholder="What's your guess?" 
            id="guess" 
            className="p-2 border border-solid rounded-md w-1/3"
            type="number"
            min="1"
            max="10"
          />
          <p id="warn" class="text-sm text-red-600"></p>
          <button onClick={checkGuess} className="p-2 border border-solid rounded-md bg-purple-400 cursor-pointer hover:bg-black text-white">Check</button>
          <h1 id="advice" class="font-normal font-serif text-sm p-2 border border-solid rounded-md  bg-white transform transition-all  - ease-in-out hidden text-center">Try again</h1>
        </Container>
      </div>
    </div>
  );
}

export default App