export const affirmationHelper = (affirmations) => {
  let weatherObject = { bad: [], sun: [] };
  affirmations.forEach((affirmation) => {
    if (
      affirmation.phrase.includes("beyond") ||
      affirmation.phrase.includes("change") ||
      affirmation.phrase.includes("food") ||
      affirmation.phrase.includes("living") ||
      affirmation.phrase.includes("manifest") ||
      affirmation.phrase.includes("partner") ||
      affirmation.phrase.includes("relationships")
    ) {
      return;
    }
    if (
      affirmation.phrase.includes("allow") ||
      affirmation.phrase.includes("annoy") ||
      affirmation.phrase.includes("care") ||
      affirmation.phrase.includes("courage") ||
      affirmation.phrase.includes("health") ||
      affirmation.phrase.includes("joy") ||
      affirmation.phrase.includes("life") ||
      affirmation.phrase.includes("need") ||
      affirmation.phrase.includes("negative") ||
      affirmation.phrase.includes("past") ||
      affirmation.phrase.includes("peace") ||
      affirmation.phrase.includes("power") ||
      affirmation.phrase.includes("prosper") ||
      affirmation.phrase.includes("relax") ||
      affirmation.phrase.includes("release") ||
      affirmation.phrase.includes("safe") ||
      affirmation.phrase.includes("significant") ||
      affirmation.phrase.includes("soul") ||
      affirmation.phrase.includes("steps") ||
      affirmation.phrase.includes("success") ||
      affirmation.phrase.includes("thought") ||
      affirmation.phrase.includes("want") ||
      affirmation.phrase.includes("infinite") ||
      affirmation.phrase.includes("always") ||
      affirmation.phrase.includes("am") ||
      affirmation.phrase.includes("anything") ||
      affirmation.phrase.includes("beauty") ||
      affirmation.phrase.includes("best") ||
      affirmation.phrase.includes("calm") ||
      affirmation.phrase.includes("compassion") ||
      affirmation.phrase.includes("energy") ||
      affirmation.phrase.includes("every") ||
      affirmation.phrase.includes("family") ||
      affirmation.phrase.includes("goals") ||
      affirmation.phrase.includes("good") ||
      affirmation.phrase.includes("gratitude") ||
      affirmation.phrase.includes("happy") ||
      affirmation.phrase.includes("heal") ||
      affirmation.phrase.includes("i'm") ||
      affirmation.phrase.includes("income") ||
      affirmation.phrase.includes("learn") ||
      affirmation.phrase.includes("love") ||
      affirmation.phrase.includes("myself") ||
      affirmation.phrase.includes("paradise") ||
      affirmation.phrase.includes("people") ||
      affirmation.phrase.includes("perfect") ||
      affirmation.phrase.includes("positive") ||
      affirmation.phrase.includes("spirit") ||
      affirmation.phrase.includes("succeed") ||
      affirmation.phrase.includes("treat") ||
      affirmation.phrase.includes("trust") ||
      affirmation.phrase.includes("valuable") ||
      affirmation.phrase.includes("well")
    ) {
      weatherObject.bad.push(affirmation);
    }
    if (
      affirmation.phrase.includes("always") ||
      affirmation.phrase.includes("am") ||
      affirmation.phrase.includes("anything") ||
      affirmation.phrase.includes("beauty") ||
      affirmation.phrase.includes("best") ||
      affirmation.phrase.includes("calm") ||
      affirmation.phrase.includes("compassion") ||
      affirmation.phrase.includes("energy") ||
      affirmation.phrase.includes("every") ||
      affirmation.phrase.includes("family") ||
      affirmation.phrase.includes("goals") ||
      affirmation.phrase.includes("good") ||
      affirmation.phrase.includes("gratitude") ||
      affirmation.phrase.includes("happy") ||
      affirmation.phrase.includes("heal") ||
      affirmation.phrase.includes("i'm") ||
      affirmation.phrase.includes("income") ||
      affirmation.phrase.includes("learn") ||
      affirmation.phrase.includes("love") ||
      affirmation.phrase.includes("myself") ||
      affirmation.phrase.includes("paradise") ||
      affirmation.phrase.includes("people") ||
      affirmation.phrase.includes("perfect") ||
      affirmation.phrase.includes("positive") ||
      affirmation.phrase.includes("spirit") ||
      affirmation.phrase.includes("succeed") ||
      affirmation.phrase.includes("treat") ||
      affirmation.phrase.includes("trust") ||
      affirmation.phrase.includes("valuable") ||
      affirmation.phrase.includes("well")
    ) {
      weatherObject.sun.push(affirmation);
    }
  });

  return weatherObject;
};
