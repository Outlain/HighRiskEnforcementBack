// function generateSchedule(timeSlots) {
//   const schedule = new Array(24).fill(0);
//   for (const timeSlot of timeSlots) {
//     const { hour, guards } = timeSlot;
//     for (const guard of guards) {
//       const { type, count } = guard;
//       if (schedule[hour]) {
//         schedule[hour][type] += count;
//       } else {
//         schedule[hour] = { [type]: count };
//       }
//     }
//   }
//   return schedule;
// }

// function generateSchedule(timeSlots) {
//   const schedule = new Array(24).fill(0);
//   for (let i = 0; i < timeSlots.length; i++) {
//     const hourGuards = timeSlots[i];
//     const hour = i % 24;
//     for (const guard of hourGuards) {
//       const { type, count } = guard;
//       if (schedule[hour]) {
//         schedule[hour][type] += count;
//       } else {
//         schedule[hour] = { [type]: count };
//       }
//     }
//   }
//   return schedule;
// }

// Monday: { D: 0, G: 1 }, Tuesday: { D: 0, G: 1 }, Wednesday: }


function generateWeeklySchedule(currentHour) {
  const weeklyScheduleForCurrentHour = { set: true };
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let currentWeek = -1;
  for (let i = 0; i < currentHour.length; i++) {
    if (i % 2 === 0) {
      currentWeek++;
      weeklyScheduleForCurrentHour[week[currentWeek]] = { G: currentHour[i] };
    } else {
      weeklyScheduleForCurrentHour[week[currentWeek]].D = currentHour[i];
    }
  }
  return weeklyScheduleForCurrentHour;
}
// TESTING THE FUNCTION DEFINED
// console.log(generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0]))


export const locations = {
  "West Palm Beach": [
    {
      name: "KFC- Blue Heron",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "KFC- Broadway",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "KFC- Palm Beach",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Homewood/Spring Hill Suites by Hilton",
      random: false,
      schedule: [
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])], // 12:00am - 1:00am
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])], // 1:00am - 2:00am
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])], // 2:00am - 3:00am
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])], // 3:00am - 4:00am
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])], // 4:00am - 5:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Holiday Inn",
      random: false,
      schedule: [
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 1])], // 12:00am - 1:00am
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 1])], // 1:00am - 2:00am
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])], // 2:00am - 3:00am
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])], // 3:00am - 4:00am
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])], // 4:00am - 5:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 1])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 1])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Grand Villa of Boynton Beach",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Dillman Farms PARKING ENFORCEMENT",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Cross Creek Condominiums",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Cortland Portofino Place",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "City Side Condominiums ROVER",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "City Side Condominiums POOL",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "City Side Condominiums GATEHOUSE",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Chabad Palm Beach Island",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Chabad of West Palm Beach",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Chabad of West Boca",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Chabad of Lake Worth",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Chabad of Palm Beach Island",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Casa Del Monte",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "1236 PLAZA",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "300",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Canopy By Hilton",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "LaFonta Apts of Palm Beach Inc",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Lake Mangonia Apartments",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Lakeside Mobile Home Park",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "MAIN OFFICE",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Mar-a-Lago Club",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Mayfair House",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Mt. Zion Missionary Baptist Church",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Palm Beach Mobile Home Park",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Palm Beach Muslim Community",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Pickwick Mobile Home Park ",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Pine Ridge North lll PARKING ENFORCEMENT",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Presidential Golf View",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Sams Market",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "St Andrews Palm Beach",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Taco Bell",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "The Groves of Westlake",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "The Hammocks of Westlake PARKING ENFORCEMENT",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "The Meadows of Westlake PARKING ENFORCEMENT",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Tideline",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "U Gas",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    // Add more location objects for West Palm Beach as needed
  ],
  "Pompano": [
    {
      name: "Beacon Recovery Center",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "City Vista",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Grand Villa of Deerfield Beach",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Parliament House Condominiums ",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "The Wittington Condo",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "Orlando": [
    {
      name: "Cortland Nona",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Crossroads Apartments",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Hyatt House Orlando",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],

  "Riviera": [

    {
      name: "The Reaches Condominium Association",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "Dania Beach": [
    {
      name: "Cortland Hollywood",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Wyndham Gardens",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "Daytona": [
    {
      name: "Daytona Gardens Apartments",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Ormond Beach",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "Fort Lauderdale": [

    {
      name: "Los Olas by the River",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "The Waverly at Los Olos",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "Fort Pierce": [

    {
      name: "Pine Creek Village Apartments",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "Gainsville": [

    {
      name: "Majestic Oaks Apartments",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "Miami": [

    {
      name: "Lincoln Fields Apartments",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Yard 8 Midtown Cortland ",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "Ocala": [

    {
      name: "Berkeley Pointe Apartments ",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
    {
      name: "Hickory Knoll",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "PalmBay": [

    {
      name: "Hilton/Hyatt Place (Palm Bay)",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "Pinellas": [

    {
      name: "Cortland Satori",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "Plantation": [

    {
      name: "Cortland Satori",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "Sanford": [

    {
      name: "Seminole Gardens Apartments ",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "Tallahassee": [

    {
      name: "Sunrise Place Apartments ",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  "West Boca": [

    {
      name: "Chabad of Weston",
      random: false,
      schedule: [
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00am - 1:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00am - 2:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00am - 3:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00am - 4:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00am - 5:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00am - 6:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00am - 7:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00am - 8:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00am - 9:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00am - 10:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00am - 11:00am
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00am - 12:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 12:00pm - 1:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 1:00pm - 2:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 2:00pm - 3:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 3:00pm - 4:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 4:00pm - 5:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 5:00pm - 6:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 6:00pm - 7:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 7:00pm - 8:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 8:00pm - 9:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 9:00pm - 10:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 10:00pm - 11:00pm
        [generateWeeklySchedule([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0])], // 11:00pm - 12:00am
      ],
    },
  ],
  // Add more areas and their location objects as needed
};

export const locationsArray = Object.keys(locations)


