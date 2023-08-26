const person = {
    firstName:"John", 
    lastName:"Doe", 
    fullName :() => {
        return this.firstName + " " + this.lastName;
      }};
    // Accessing Object Properties
    objectName.propertyName
    objectName["propertyName"]
    // Accessing Object Method
    objectName.methodName() 
    //    Eg: const name = person.fullName();