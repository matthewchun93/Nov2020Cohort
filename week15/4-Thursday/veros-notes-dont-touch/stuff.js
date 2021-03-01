

class Stack {
    constructor() {
        this.data = [];
    }

    pop() {
        
        return this.data.pop();
    }

    peek(){
        return this.data[this.data.length -1]
    }

    push(el) {
         return this.data.push(el)
    }

    length(){
        return this.data.length;
    }
}

function isValid(string){

    let opening = {
        "(": true,
        "[": true, 
        "{": true
    }

    let closing = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    const stack = new Stack();
    //{[[(())]]}
    //  |
    //  2 
    for(let i = 0; i<string.length; i++){
        let char = string[i]; //string[2] => ")"
            
        if(opening[char]){
            stack.push(char);
        }

        //stack ["{"

        if(char in closing){
            let result = stack.pop();  // "["
            
            if(result !== closing[char]){ // "[" !== "("

                return false;
           }

        }
    }

    return stack.length() === 0? true: false;

}

console.log(isValid('{[[(()]]}'));





