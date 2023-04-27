function generateSchedule(timeSlots) {
  const schedule = new Array(24).fill(0);
  for (const timeSlot of timeSlots) {
    const { hour, guards } = timeSlot;
    for (const guard of guards) {
      const { type, count } = guard;
      if (schedule[hour]) {
        schedule[hour][type] += count;
      } else {
        schedule[hour] = { [type]: count };
      }
    }
  }
  return schedule;
}

const locations = {
  "West Palm Beach": [
    {
      name: "Hyatt Place West Palm Beach/Downtown",
      schedule: generateSchedule([
        [
          { type: "D", count: 1 },
          { type: "G", count: 2 },
        ], // 12:00am - 1:00am
        [], // 1:00am - 2:00am (no guards)
        [], // 2:00am - 3:00am (no guards)
        [], // 3:00am - 4:00am (no guards)
        [], // 4:00am - 5:00am (no guards)
        [], // 5:00am - 6:00am (no guards)
        [], // 6:00am - 7:00am (no guards)
        [], // 7:00am - 8:00am (no guards)
        [], // 8:00am - 9:00am (no guards)
        [], // 9:00am - 10:00am (no guards)
        [], // 10:00am - 11:00am (no guards)
        [], // 11:00am - 12:00pm (no guards)
        [{ type: "D", count: 3 }], // 12:00pm - 1:00pm
        [], // 1:00pm - 2:00pm (no guards)
        [], // 2:00pm - 3:00pm (no guards)
        [], // 3:00pm - 4:00pm (no guards)
        [], // 4:00pm - 5:00pm (no guards)
        [], // 5:00pm - 6:00pm (no guards)
        [], // 6:00pm - 7:00pm (no guards)
        [], // 7:00pm - 8:00pm (no guards)
        [], // 8:00pm - 9:00pm (no guards)
        [], // 9:00pm - 10:00pm (no guards)
        [], // 10:00pm - 11:00pm (no guards)
        [], // 11:00pm - 12:00am (no guards)
      ]),
    },
    {
      name: "KFC- Blue Heron",
      schedule: generateSchedule([
        [], // 12:00am - 1:00am (no guards)
        [], // 1:00am - 2:00am (no guards)
        [], // 2:00am - 3:00am (no guards)
        [], // 3:00am - 4:00am (no guards)
        [], // 4:00am - 5:00am (no guards)
        [], // 5:00am - 6:00am (no guards)
        [], // 6:00am - 7:00am (no guards)
        [], // 7:00am - 8:00am (no guards)
        [], // 8:00am - 9:00am (no guards)
        [], // 9:00am - 10:00am (no guards)
        [], // 10:00am - 11:00am (no guards)
        [], // 11:00am - 12:00pm (no guards)
        [], // 12:00pm - 1:00pm (no guards)
        [], // 1:00pm - 2:00pm (no guards)
        [], // 2:00pm - 3:00pm (no guards)
        [], // 3:00pm - 4:00pm (no guards)
        [], // 4:00pm - 5:00pm (no guards)
        [], // 5:00pm - 6:00pm (no guards)
        [], // 6:00pm - 7:00pm (no guards)
        [], // 7:00pm - 8:00pm (no guards)
        [], // 8:00pm - 9:00pm (no guards)
        [], // 9:00pm - 10:00pm (no guards)
        [], // 10:00pm - 11:00pm (no guards)
        [], // 11:00pm - 12:00am (no guards)
      ]),
    },
    // Add more location objects for West Palm Beach as needed
  ],
  // Add more areas and their location objects as needed
};
