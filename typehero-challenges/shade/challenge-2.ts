// We completed the first alias (`Name`) for you to see as an example
type Name = string;

// Now try replacing `unknown` with a primitive data type that might be appropriate for `Year`
type Year = number;

type IsOperational = boolean;

type Kilograms = number;

type Count = number;

type Payload = {
  name: Name;
  year?: Year;
  isOperational?: IsOperational;
  mass: Kilograms;
  // the tests show that you need a `mass` property here
  // but first you might need to create an alias for `Kilograms`
  // because that's the value of `mass`
};

interface Spacecraft {
  name: Name;
  yearBuilt: Year;
  crewCapacity: Count;
  launchDate: Date;
  isOperational: IsOperational;
  propulsionSystem: string[];
  payload: Payload[];
}

export const voyager1 = {
  name: "Voyager 1",
  yearBuilt: 1977,
  crewCapacity: 0,
  launchDate: new Date("1977 09 05"),
  isOperational: true,
  propulsionSystem: ["RTG (Radioisotope Thermoelectric Generator)"],
  payload: [
    { name: "Golden Record", mass: 0.3 },
    { name: "Instruments", mass: 721 },
  ],
} satisfies Spacecraft;
