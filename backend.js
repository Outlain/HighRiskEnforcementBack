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
      random : false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
      random: false,
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
