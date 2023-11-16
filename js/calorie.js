let totalDistance = 0;
let totalTime = 0;

function calculateDistance(x1, y1, x2, y2) {
  // 這裡可以使用適當的算法計算兩點之間的距離，例如歐幾里得距離公式
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance;
}

function updateCaloriesAndTime(x, y) {
  if (currentIndex > 0) {
    const prevPoint = jsonData[currentIndex - 1];
    const distance = calculateDistance(prevPoint.X, prevPoint.Y, x, y);
    const speed = 5; // 假設平均步行速度為每秒5公尺
    const time = distance / speed;
    
    totalDistance += distance;
    totalTime += time;

    console.log("Total Distance:", totalDistance, "meters");
    console.log("Total Time:", totalTime, "seconds");
    console.log("Total Calories:", calculateCalories(totalDistance), "calories");
  }
}

function calculateCalories(distance) {
  // 這裡可以使用適當的算法計算卡路里，例如基於距離和體重的公式
  const weight = 70; // 假設體重為70公斤
  const calories = distance * 0.05 * weight; // 假設每公尺消耗0.05卡路里
  return calories;
}
