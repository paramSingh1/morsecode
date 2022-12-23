import { translate } from "./translator";

describe("Test cases for a function that automatically detects a string and converts it to or from morse code and latin text", () => {
  it("should correctly convert English text to morse code", () => {
    expect(translate("SOS")).toBe("... --- ...");
    expect(translate("hi there")).toBe(".... .. / - .... . .-. .");
    expect(translate("123 testing 123")).toBe(
      ".---- ..--- ...-- / - . ... - .. -. --. / .---- ..--- ...--"
    );
  });

  it("should handle spaces in English to a / in morse", () => {
    expect(translate("a b c")).toBe(".- / -... / -.-.");
    expect(translate("double  space")).toBe(
      "-.. --- ..- -... .-.. . / / ... .--. .- -.-. ."
    );
  });
  it("should correctly convert the translation to english if there is a mix of morse and english.", () => {
    expect(translate("... --- ... sos")).toBe(
      ".-.-.- .-.-.- .-.-.- / -....- -....- -....- / .-.-.- .-.-.- .-.-.- / ... --- ..."
    );
    expect(translate("hello .... ..")).toBe(
      ".... . .-.. .-.. --- / .-.-.- .-.-.- .-.-.- .-.-.- / .-.-.- .-.-.-"
    );
  });
});
// it("should ")
