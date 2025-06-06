import "./chunk-5WRI5ZAA.js";

// node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js
var defaultOptions = {
  active: true,
  breakpoints: {},
  delay: 4e3,
  jump: false,
  playOnInit: true,
  stopOnFocusIn: true,
  stopOnInteraction: true,
  stopOnMouseEnter: false,
  stopOnLastSnap: false,
  rootNode: null
};
function Autoplay(userOptions = {}) {
  let options;
  let emblaApi;
  let destroyed;
  let playing = false;
  let resume = true;
  let jump = false;
  let timer = 0;
  function init(emblaApiInstance, optionsHandler) {
    emblaApi = emblaApiInstance;
    const {
      mergeOptions,
      optionsAtMedia
    } = optionsHandler;
    const optionsBase = mergeOptions(defaultOptions, Autoplay.globalOptions);
    const allOptions = mergeOptions(optionsBase, userOptions);
    options = optionsAtMedia(allOptions);
    if (emblaApi.scrollSnapList().length <= 1) return;
    jump = options.jump;
    destroyed = false;
    const {
      eventStore,
      ownerDocument
    } = emblaApi.internalEngine();
    const emblaRoot = emblaApi.rootNode();
    const root = options.rootNode && options.rootNode(emblaRoot) || emblaRoot;
    const container = emblaApi.containerNode();
    emblaApi.on("pointerDown", stopTimer);
    if (!options.stopOnInteraction) {
      emblaApi.on("pointerUp", startTimer);
    }
    if (options.stopOnMouseEnter) {
      eventStore.add(root, "mouseenter", () => {
        resume = false;
        stopTimer();
      });
      if (!options.stopOnInteraction) {
        eventStore.add(root, "mouseleave", () => {
          resume = true;
          startTimer();
        });
      }
    }
    if (options.stopOnFocusIn) {
      emblaApi.on("slideFocusStart", stopTimer);
      if (!options.stopOnInteraction) {
        eventStore.add(container, "focusout", startTimer);
      }
    }
    eventStore.add(ownerDocument, "visibilitychange", visibilityChange);
    if (options.playOnInit && !documentIsHidden()) startTimer();
  }
  function destroy() {
    emblaApi.off("pointerDown", stopTimer).off("pointerUp", startTimer).off("slideFocusStart", stopTimer);
    stopTimer();
    destroyed = true;
    playing = false;
  }
  function startTimer() {
    if (destroyed) return;
    if (!resume) return;
    if (!playing) emblaApi.emit("autoplay:play");
    const {
      ownerWindow
    } = emblaApi.internalEngine();
    ownerWindow.clearInterval(timer);
    timer = ownerWindow.setInterval(next, options.delay);
    playing = true;
  }
  function stopTimer() {
    if (destroyed) return;
    if (playing) emblaApi.emit("autoplay:stop");
    const {
      ownerWindow
    } = emblaApi.internalEngine();
    ownerWindow.clearInterval(timer);
    timer = 0;
    playing = false;
  }
  function visibilityChange() {
    if (documentIsHidden()) {
      resume = playing;
      return stopTimer();
    }
    if (resume) startTimer();
  }
  function documentIsHidden() {
    const {
      ownerDocument
    } = emblaApi.internalEngine();
    return ownerDocument.visibilityState === "hidden";
  }
  function play(jumpOverride) {
    if (typeof jumpOverride !== "undefined") jump = jumpOverride;
    resume = true;
    startTimer();
  }
  function stop() {
    if (playing) stopTimer();
  }
  function reset() {
    if (playing) play();
  }
  function isPlaying() {
    return playing;
  }
  function next() {
    const {
      index
    } = emblaApi.internalEngine();
    const nextIndex = index.clone().add(1).get();
    const lastIndex = emblaApi.scrollSnapList().length - 1;
    const kill = options.stopOnLastSnap && nextIndex === lastIndex;
    if (kill) stopTimer();
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext(jump);
    } else {
      emblaApi.scrollTo(0, jump);
    }
  }
  const self = {
    name: "autoplay",
    options: userOptions,
    init,
    destroy,
    play,
    stop,
    reset,
    isPlaying
  };
  return self;
}
Autoplay.globalOptions = void 0;
export {
  Autoplay as default
};
//# sourceMappingURL=embla-carousel-autoplay.js.map
