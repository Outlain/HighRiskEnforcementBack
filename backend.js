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
    {
      name: "KFC- Broadway",
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
    {
      name: "KFC- Palm Beach",
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
    {
      name: "Homewood/Spring Hill Suites by Hilton",
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
    {
      name: "Holiday Inn",
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
    {
      name: "Grand Villa of Boynton Beach",
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
    {
      name: "Dillman Farms PARKING ENFORCEMENT",
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
    {
      name: "Cross Creek Condominiums",
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
    {
      name: "Cortland Portofino Place",
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
    {
      name: "City Side Condominiums ROVER",
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
    {
      name: "City Side Condominiums POOL",
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
    {
      name: "City Side Condominiums GATEHOUSE",
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
    {
      name: "Chabad Palm Beach Island",
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
    {
      name: "Chabad of West Palm Beach",
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
    {
      name: "Chabad of West Boca",
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
    {
      name: "Chabad of Lake Worth",
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
    {
      name: "Chabad of Palm Beach Island",
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
    {
      name: "Casa Del Monte",
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
    {
      name: "1236 PLAZA",
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
    {
      name: "300",
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
    {
      name: "Canopy By Hilton",
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
    {
      name: "LaFonta Apts of Palm Beach Inc",
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
    {
      name: "Lake Mangonia Apartments",
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
    {
      name: "Lakeside Mobile Home Park",
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
    {
      name: "MAIN OFFICE",
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
    {
      name: "Mar-a-Lago Club",
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
    {
      name: "Mayfair House",
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
    {
      name: "Mt. Zion Missionary Baptist Church",
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
    {
      name: "Palm Beach Mobile Home Park",
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
    {
      name: "Palm Beach Muslim Community",
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
    {
      name: "Pickwick Mobile Home Park ",
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
    {
      name: "Pine Ridge North lll PARKING ENFORCEMENT",
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
    {
      name: "Presidential Golf View",
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
    {
      name: "Sams Market",
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
    {
      name: "St Andrews Palm Beach",
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
    {
      name: "Taco Bell",
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
    {
      name: "The Groves of Westlake",
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
    {
      name: "The Hammocks of Westlake PARKING ENFORCEMENT",
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
    {
      name: "The Meadows of Westlake PARKING ENFORCEMENT",
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
    {
      name: "Tideline",
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
    {
      name: "U Gas",
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
  "pompano": [
    {
      name: "Beacon Recovery Center",
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
    {
      name: "City Vista",
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
    {
      name: "Grand Villa of Deerfield Beach",
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
    {
      name: "Parliament House Condominiums ",
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
    {
      name: "The Wittington Condo",
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
  ],
  "orlando": [
    {
      name: "Cortland Nona",
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
    {
      name: "Crossroads Apartments",
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
    {
      name: "Hyatt House Orlando",
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
  ],

  "riviera": [

    {
      name: "The Reaches Condominium Association",
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
  ],
  "daniaBeach": [
    {
      name: "Cortland Hollywood",
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
    {
      name: "Wyndham Gardens",
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
  ],
  "daytona": [
    {
      name: "Daytona Gardens Apartments",
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
    {
      name: "Ormond Beach",
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
  ],
  "fortLauderdale": [

    {
      name: "Los Olas by the River",
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
    {
      name: "The Waverly at Los Olos",
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
  ],
  "forPierce": [

    {
      name: "Pine Creek Village Apartments",
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
  ],
  "gainsville": [

    {
      name: "Majestic Oaks Apartments",
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
  ],
  "miami": [

    {
      name: "Lincoln Fields Apartments",
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
    {
      name: "Yard 8 Midtown Cortland ",
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
  ],
  "ocala": [

    {
      name: "Berkeley Pointe Apartments ",
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
    {
      name: "Hickory Knoll",
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
  ],
  "palmBay": [

    {
      name: "Hilton/Hyatt Place (Palm Bay)",
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
  ],
  "pinellas": [

    {
      name: "Cortland Satori",
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
  ],
  "plantation": [

    {
      name: "Cortland Satori",
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
  ],
  "sanford": [

    {
      name: "Seminole Gardens Apartments ",
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
  ],
  "tallahassee": [

    {
      name: "Sunrise Place Apartments ",
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
  ],
  "westBoca": [

    {
      name: "Chabad of Weston",
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
  ],
  // Add more areas and their location objects as needed
};
