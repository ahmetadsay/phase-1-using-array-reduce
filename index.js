const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteries(batteryBatches) {
    return batteryBatches.reduce((acc, curr) => acc + curr, 0)
}

const totalBatteries = batteries(batteryBatches)