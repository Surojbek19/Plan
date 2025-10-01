//Task 1: counting vowels in the string
function countVowels(string) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < string.length; i++) {
        if(vowels.includes(string[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Michal"))
/* =>EXPLANIATION<= */
// "let i = 0;" This initializes a counter variable "i" and starts it at "0". In JS, array and string indexes start at 0, so string[0] is th first character.
// "i < string.lngth". string.length gives th total number of characters in the string.
// "i < string.lngth" this condition ensures the loop keeps running i reaches the last charcter
// "i++" increments "i" by 1 after each iteration. This moves the loop to the nex character in the string

//Task 2: create a function that returns the revarse of a string without using reverse() on array
function reverse(word) {
    let reversed = "";
    for(let i = word.length -1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed
}

console.log(reverse("hello"))
/* =>EXPLANIATION<= */
//"word.length" = total characters.
// Last index = "word.length - 1"
// We set "i = word.length - 1" so our loop starts at thr last character

 let userInput = prompt(
            "O'zgartrish kiriting",
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
        );
        if(userInput) {
            console.log(userInput)
            axios
            .post("/edit-item", {
                id: e.target.getAttribute("data-id"),
                new_input: userInput,                                         
                })
                .then((response) => {
                    console.log(response.data);
                    e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
                })
                .catch((err) => {
                    console.log("Iltimos qaytadan harakat qiling");
                });
            }
//     }
  
// }); 