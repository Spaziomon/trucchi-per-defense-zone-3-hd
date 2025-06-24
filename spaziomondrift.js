/**
 * SpaziomonDrift - Simple Positional Drift Simulator
 * Author: Spaziomon
 * License: Custom
 */

class SpaziomonDrift {
    /**
     * Initializes drift simulation with starting position.
     * @param {number} x - Initial X position (km).
     * @param {number} y - Initial Y position (km).
     * @param {number} driftX - Drift per step on X axis (km).
     * @param {number} driftY - Drift per step on Y axis (km).
     */
    constructor(x = 0, y = 0, driftX = 0.5, driftY = -0.3) {
        this.position = { x, y };
        this.drift = { x: driftX, y: driftY };
    }

    /**
     * Updates the position by applying drift values.
     */
    applyDrift() {
        this.position.x += this.drift.x;
        this.position.y += this.drift.y;
    }

    /**
     * Returns the current position.
     * @returns {{x: number, y: number}} - Current position in kilometers.
     */
    getPosition() {
        return { ...this.position };
    }
}

// Example usage:
// const satellite = new SpaziomonDrift(100, 200, 0.2, -0.1);
// satellite.applyDrift();
// console.log(satellite.getPosition()); // Output: updated position after drift

module.exports = SpaziomonDrift;
