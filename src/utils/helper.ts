export function getVal(val: unknown, keys: Array<string>) {
  if (typeof val === "object" && val !== null) {
    const data: object = val;

    type objectKey = keyof typeof data;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i] as objectKey;
      if (data[key] !== null) return data[key];
    }
  }

  return "";
}
