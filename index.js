// const z = require('zod');

// const userInfoSchema = z.object({
//     firstName: z.string().min(1, "First Name cannot be empty"),
//     lastName: z.string().min(1, "Last Name cannot be empty"),
//     email: z.string().email("Invalid email format"),
// });

// function concatt(firstName, lastName, email) {
//     const result = userInfoSchema.safeParse({ firstName, lastName, email });

//     if (!result.success) {
//         console.log(result);
//         let errors = result.error.issues.map((error) => error.message).join(", ");
//         throw new Error(`Invalid Input. Message: ${errors}`);
//     }

//     return `Email of ${firstName} ${lastName} is ${email}`;
// }

// try {
//     let sentence = concatt("", "", "sudipbhomjan18@gmail.com");
//     console.log(sentence);
// } catch (error) {
//     console.log(error.message);
// }


function divideNumber(a, b) {
    if (b === 0) {
        return {
            success: false,
            result: "Division by zero error",
        };
    }

    return {
        success: true,
        result: a / b,
    };
}

module.exports = divideNumber;

// Test logs
console.log(divideNumber(10, 2)); // { success: true, result: 5 }
console.log(divideNumber(10, 0)); // { success: false, result: "Division by zero error" }
