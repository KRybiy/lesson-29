const ageClassification = require("./ageClassification.js");

test("returns accurate age classification for various inputs", () => {
  expect(ageClassification(-2)).toBeNull();
  expect(ageClassification(1)).toBe("Дитинство");
  expect(ageClassification(23)).toBe("Дитинство");
  expect(ageClassification(25.5)).toBe("Молодість");
  expect(ageClassification(30)).toBe("Молодість");
  expect(ageClassification(43)).toBe("Молодість");
  expect(ageClassification(45.5)).toBe("Зрілість");
  expect(ageClassification(50)).toBe("Зрілість");
  expect(ageClassification(64)).toBe("Зрілість");
  expect(ageClassification(66.5)).toBe("Старість");
  expect(ageClassification(70)).toBe("Старість");
  expect(ageClassification(74)).toBe("Старість");
  expect(ageClassification(76.5)).toBe("Довголіття");
  expect(ageClassification(80)).toBe("Довголіття");
  expect(ageClassification(89)).toBe("Довголіття");
  expect(ageClassification(91.5)).toBe("Рекорд");
  expect(ageClassification(95)).toBe("Рекорд");
  expect(ageClassification(121)).toBe("Рекорд");
  expect(ageClassification(123.5)).toBeNull();
  expect(ageClassification(130)).toBeNull();
});

test('handles edge cases and special inputs', () => {
  expect(ageClassification(null)).toBeNull();
  expect(ageClassification(undefined)).toBeNull();
  expect(ageClassification('')).toBeNull();
  expect(ageClassification('25')).toBeNull(); // String input
  expect(ageClassification(NaN)).toBeNull(); // Not a Number
  expect(ageClassification([])).toBeNull(); // Array input
  expect(ageClassification({})).toBeNull(); // Object input
});

test('handles floating-point inputs correctly', () => {
  expect(ageClassification(0.5)).toBe("Дитинство");
  expect(ageClassification(23.9)).toBe("Дитинство");
  expect(ageClassification(25.1)).toBe("Молодість");
  expect(ageClassification(43.9)).toBe("Молодість");
  expect(ageClassification(45.1)).toBe("Зрілість");
  expect(ageClassification(63.9)).toBe("Зрілість");
  expect(ageClassification(73.9)).toBe("Старість");
  expect(ageClassification(89.9)).toBe("Довголіття");
  expect(ageClassification(121.9)).toBe("Рекорд");
});



