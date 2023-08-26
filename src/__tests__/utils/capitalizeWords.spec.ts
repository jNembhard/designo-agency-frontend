import {
  capitalizeWords,
  capitalizeWordsWithASpace,
} from "../../utils/capitalizeWords";

describe("capitalizeWords", () => {
  describe("capitalizeWords function", () => {
    it("should capitalize each word in a hyphen-separated string", () => {
      const sentence = capitalizeWords("test-string");
      expect(sentence).toBe("Test String");
    });

    it("should capitalize a single word", () => {
      const word = capitalizeWords("test");
      expect(word).toBe("Test");
    });

    it("should handle an empty string", () => {
      const empty = capitalizeWords("");
      expect(empty).toBe("");
    });
  });

  describe("capitalizeWordsWithASpace Function", () => {
    it("should capitalize the first letter of each word", () => {
      const sentence = capitalizeWordsWithASpace("this is a test");
      expect(sentence).toBe("This Is A Test");
    });

    it("should handle a single-world input", () => {
      const word = capitalizeWordsWithASpace("test");
      expect(word).toBe("Test");
    });

    it("should handle an empty string", () => {
      const empty = capitalizeWordsWithASpace("");
      expect(empty).toBe("");
    });
  });
});
