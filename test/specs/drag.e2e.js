//@ts-check
import dragPage from "../pageObjects/drag.page.js";

describe("Mobile Drag and Drop Test", () => {
  it("should drag element to another element", async function () {
    await dragPage.visitDragPage();
    await dragPage.dragElementsToDestination();
    await dragPage.congratsMessage.waitForDisplayed({ timeout: 5000 });
    expect(await dragPage.congratsMessage.isDisplayed()).toBe(true);
    expect(await dragPage.retryButton.isDisplayed()).toBe(true);
  });
});
