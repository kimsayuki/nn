// Normal method
/*
class RailwayForm{
    submit(){
        alert("form submitted")
    }
    cancel(){
        alert("This form is cancelled")
    }
}

let harry = new RailwayForm()
let rohan = new RailwayForm()

harry.submit()
rohan.submit()
rohan.cancel()
*/

// Advanced method
class RailwayForm{
    submit(){
        alert(this.name + ": form submitted: " + this.trainno)
    }
    cancel(){
        alert(this.name + ": This form is cancelled: " + this.trainno)
    }
    fill(givenname, trainno){
        this.name = givenname
        this.trainno = trainno
    }
}

// Create a form for Harry
let harryForm = new RailwayForm()
// Fill the form with Harry's details
harryForm.fill("Harry", 145316)

// Create a forms for Rohan
let rohanForm1 = new RailwayForm()
let rohanForm2 = new RailwayForm()
// Fill the forms with Rohan's details
rohanForm1.fill("Rohan", 222420)
rohanForm2.fill("Rohan", 2229211)

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()