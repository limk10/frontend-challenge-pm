export const randomDateTime = (start, end) => {
  return new Date(
    new Date("2019-02-12T01:57:45.271Z").getTime() +
      Math.random() *
        (new Date("2020-02-12T01:57:45.271Z").getTime() -
          new Date("2019-02-12T01:57:45.271Z").getTime())
  ).toISOString();
};
