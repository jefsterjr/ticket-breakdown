const crypto = require("crypto");
/**
 * Changes made:
 *
 * Removed unnecessary nesting by using else if and else statements to simplify the logic flow.
 * Combined the if statement for converting candidate to string with the previous one
 * Rearranged the order of the if statements for better readability
 *
 * @param event
 * @returns {string|string|string|string}
 */
exports.deterministicPartitionKey = (event) => {
    const TRIVIAL_PARTITION_KEY = "0";
    const MAX_PARTITION_KEY_LENGTH = 256;

    if (!event) {
        return TRIVIAL_PARTITION_KEY;
    }

    const partitionKey = event.partitionKey || crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    const candidate = typeof partitionKey === "string" ? partitionKey : JSON.stringify(partitionKey);

    return candidate.length > MAX_PARTITION_KEY_LENGTH ? crypto.createHash("sha3-512").update(candidate).digest("hex") : candidate;
};
