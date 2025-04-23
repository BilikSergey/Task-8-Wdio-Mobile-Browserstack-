//@ts-check
/// <reference types="@wdio/globals/types" />
class DragPage {
  get dragPageButton() {
    return $("~Drag");
  }

  get leftHandFrom() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-l2"]/android.widget.ImageView'
    );
  }

  get leftHandTo() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-l2"]/android.view.ViewGroup'
    );
  }

  get rightHandFrom() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-r2"]/android.widget.ImageView'
    );
  }

  get rightHandTo() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-r2"]/android.view.ViewGroup'
    );
  }

  get rightLegFrom() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-r3"]/android.widget.ImageView'
    );
  }

  get rightLegTo() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-r3"]/android.view.ViewGroup'
    );
  }

  get leftLegFrom() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-l3"]/android.widget.ImageView'
    );
  }

  get leftLegTo() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-l3"]/android.view.ViewGroup'
    );
  }

  get leftEarFrom() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-l1"]/android.widget.ImageView'
    );
  }

  get leftEarTo() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-l1"]/android.view.ViewGroup'
    );
  }

  get rightEarFrom() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-r1"]/android.widget.ImageView'
    );
  }

  get rightEarTo() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-r1"]/android.view.ViewGroup'
    );
  }

  get headFrom() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-c1"]/android.widget.ImageView'
    );
  }

  get headTo() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-c1"]/android.view.ViewGroup'
    );
  }

  get bodyFrom() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-c2"]/android.widget.ImageView'
    );
  }

  get bodyTo() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-c2"]/android.view.ViewGroup'
    );
  }

  get internalPartOfLegsFrom() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-c3"]/android.widget.ImageView'
    );
  }

  get internalPartOfLegsTo() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-c3"]/android.view.ViewGroup'
    );
  }

  get congratsMessage() {
    return $(
      '//android.widget.TextView[@text="You made it, click retry if you want to try it again."]'
    );
  }

  get retryButton() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-Retry"]/android.view.ViewGroup'
    );
  }

  async visitDragPage() {
    await this.dragPageButton.click();
  }

  async dragElementsToDestination() {
    const drag = async (from, to, id) => {
      await from.waitForDisplayed({ timeout: 5000 });
      try {
        const { x: startX, y: startY } = await from.getLocation();
        const { x: endX, y: endY } = await to.getLocation();

        await driver.performActions([
          {
            type: "pointer",
            id,
            parameters: { pointerType: "touch" },
            actions: [
              { type: "pointerMove", duration: 0, x: startX, y: startY },
              { type: "pointerDown", button: 0 },
              { type: "pause", duration: 300 },
              {
                type: "pointerMove",
                duration: 300,
                x: endX + 40,
                y: endY + 40,
              },
              { type: "pointerUp", button: 0 },
            ],
          },
        ]);
      } catch (e) {
        console.error(`Error dragging ${id}:`, e);
        throw e;
      }
    };

    await drag(this.rightHandFrom, this.rightHandTo, "finger1");
    await drag(this.leftHandFrom, this.leftHandTo, "finger2");
    await drag(this.leftEarFrom, this.leftEarTo, "finger3");
    await drag(this.rightEarFrom, this.rightEarTo, "finger4");
    await drag(this.leftLegFrom, this.leftLegTo, "finger5");
    await drag(this.rightLegFrom, this.rightLegTo, "finger6");
    await drag(this.headFrom, this.headTo, "finger7");
    await drag(this.bodyFrom, this.bodyTo, "finger8");
    await drag(
      this.internalPartOfLegsFrom,
      this.internalPartOfLegsTo,
      "finger9"
    );
  }
}

export default new DragPage();
