const crypto = require("crypto");
const {deterministicPartitionKey} = require("./deterministicPartitionKey");

// Define the test suite for the deterministicPartitionKey function
describe("deterministicPartitionKey", () => {
// Define the test cases
    test("returns '0' for null event", () => {
        const event = null;
        const result = deterministicPartitionKey(event);
        expect(result).toBe("0");
    });

    test("returns partition key for event with partitionKey property", () => {
        const event = { partitionKey: "1234" };
        const result = deterministicPartitionKey(event);
        expect(result).toBe("1234");
    });

    test("returns hashed partition key for event without partitionKey property", () => {
        const event = { name: "Jefster", age: 28 };
        const result = deterministicPartitionKey(event);
        const hashedKey = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
        expect(result).toBe(hashedKey);
    });

    test("returns hashed partition key if partition key length exceeds maximum length", () => {
        const longPartitionKey = "x".repeat(300);
        const event = { partitionKey: longPartitionKey };
        const result = deterministicPartitionKey(event);
        const hashedKey = crypto.createHash("sha3-512").update(longPartitionKey).digest("hex");
        expect(result).toBe(hashedKey);
    });
});