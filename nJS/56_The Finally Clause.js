const f = ()=>{
    try {
        let a = 0
        console.log(pro);   // yeh bananya hua error hai
        console.log("Program ran successfully");
    } catch (error) {
        console.log("This is an error");
    }
    
    finally{
        console.log("I am a good boy aur main hamesha aaunga chahe koi error aaye ya na aaye");
        // kaha kaha iska use kare
        // Close the file
        // Exit the Loop
        // Write to the log file
    }

}
f()
console.log("End");