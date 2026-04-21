const course = {
  title: "ES2015 and 2016",
  description: "New features of ES2015 and 2016",
  editions: [
    {
      trainer: "Matt Smith",
      dates: {
        start: "01/01/2016",
        end: "05/01/2016",
      },
      location: {
        address1: "One Way Street",
        city: "New York",
      },
    },
    {
      dates: {
        start: "03/05/2016",
        end: "08/05/2016",
      },
      location: {
        address1: "Two Blocks Road",
        address2: "1234 AB",
        city: "Las Vegas",
      },
    },
    {
      trainer: "John Doe",
      dates: {
        start: "10/10/2016",
        end: "15/10/2016",
      },
      location: {
        address1: "One Way Street",
        city: "New York",
      },
    },
  ],
};

const firstEdition = () => {
  let {
    title,
    editions: [
      {
        trainer,
        dates: { start: startDate },
        location: { city },
      },
    ],
  } = course;

  return { title, trainer, startDate, city };
};
// console.log(firstEdition());

const addEdition = (
  title,
  {
    trainer = "TBD",
    startDate = new Date(),
    duration = 5,
    city = "TBD",
  } = (dinges = {}),
) => {
  console.log(dinges);
  //   console.log(title, trainer, startDate, duration, city);
};

// addEdition();
// addEdition("Playwright");
addEdition("Playwright", { city: "Mechelen", duration: 3 });
addEdition("qqq");

// let { x, y } = undefined;
