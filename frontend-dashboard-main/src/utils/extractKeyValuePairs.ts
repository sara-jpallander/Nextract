/* eslint-disable @typescript-eslint/no-explicit-any */
export interface KeyValuePair {
  key: string;
  value: any;
}

export const extractKeyValuePairs = (arr: object[]): KeyValuePair[] => {
  const keyValuePairs: KeyValuePair[] = [];

  const findPairs = (obj: any, prefix = ""): void => {
    if (Array.isArray(obj)) {
      if (obj.every((item) => typeof item !== "object" || item === null)) {
        keyValuePairs.push({ key: prefix, value: obj });
      } else {
        obj.forEach((item, i) => findPairs(item, `${prefix}[${i}]`));
      }
      return;
    }

    if (typeof obj !== "object" || obj === null) {
      console.log("ISSUE HERE");
      return;
    }

    for (const [key, value] of Object.entries(obj)) {
      if (Array.isArray(value)) {
        if (value.every((item) => typeof item !== "object" || item === null)) {
          keyValuePairs.push({ key, value });
        } else {
          value.forEach((item, i) => findPairs(item, `${key}[${i}]`));
        }
      } else if (typeof value === "object" && value !== null) {
        keyValuePairs.push({ key, value });
      } else {
        keyValuePairs.push({ key, value });
      }
    }
  };

  arr.forEach((obj) => findPairs(obj));

  return keyValuePairs;
};
