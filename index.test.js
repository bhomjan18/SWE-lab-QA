const divideNumber = require("./index");

describe('divideNumber', () => {
    it("should divide properly", () => {
        const response = divideNumber(10, 2);
        expect(response.success).toBe(true);
        expect(response.result).toBe(5);
    });

    it("should give division by zero error", () => {
        const response = divideNumber(10, 0);
        expect(response.success).toBe(false);
        expect(response.result).toBe("Division by zero error");
    });
});
