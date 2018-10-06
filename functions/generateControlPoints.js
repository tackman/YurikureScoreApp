export default function(state) {
  let points = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0
  };

  points[state.selectedGirlInduces.pair1Left] += state.inputs.supportPointBase1;
  points[state.selectedGirlInduces.pair1Right] +=
    state.inputs.supportPointBase1;
  points[state.selectedGirlInduces.pair2Left] += state.inputs.supportPointBase2;
  points[state.selectedGirlInduces.pair2Right] +=
    state.inputs.supportPointBase2;
  points[state.selectedGirlInduces.pair3Left] += state.inputs.supportPointBase3;
  points[state.selectedGirlInduces.pair3Right] +=
    state.inputs.supportPointBase3;
  points[state.selectedGirlInduces.pair4Left] += state.inputs.supportPointBase4;
  points[state.selectedGirlInduces.pair4Right] +=
    state.inputs.supportPointBase4;
  points[state.selectedGirlInduces.pair5Left] += state.inputs.supportPointBase5;
  points[state.selectedGirlInduces.pair5Right] +=
    state.inputs.supportPointBase5;
  points[state.selectedGirlInduces.pair6Right] +=
    state.inputs.supportPointAdd1_1;
  points[state.selectedGirlInduces.pair6Left] +=
    state.inputs.supportPointAdd1_1;
  points[state.selectedGirlInduces.pair7Right] +=
    state.inputs.supportPointAdd1_2;
  points[state.selectedGirlInduces.pair7Left] +=
    state.inputs.supportPointAdd1_2;
  points[state.selectedGirlInduces.pair8Right] +=
    state.inputs.supportPointAdd1_3;
  points[state.selectedGirlInduces.pair8Left] +=
    state.inputs.supportPointAdd1_3;
  points[state.selectedGirlInduces.pair9Right] +=
    state.inputs.supportPointAdd2_1;
  points[state.selectedGirlInduces.pair9Left] +=
    state.inputs.supportPointAdd2_1;
  points[state.selectedGirlInduces.pair10Right] +=
    state.inputs.supportPointAdd2_2;
  points[state.selectedGirlInduces.pair10Left] +=
    state.inputs.supportPointAdd2_2;
  points[state.selectedGirlInduces.pair11Right] +=
    state.inputs.supportPointAdd2_3;
  points[state.selectedGirlInduces.pair11Left] +=
    state.inputs.supportPointAdd2_3;
  points[state.selectedGirlInduces.pair12Right] +=
    state.inputs.supportPointAdd2_4;
  points[state.selectedGirlInduces.pair12Left] +=
    state.inputs.supportPointAdd2_4;
  points[state.selectedGirlInduces.pair13Right] +=
    state.inputs.supportPointAdd2_5;
  points[state.selectedGirlInduces.pair13Left] +=
    state.inputs.supportPointAdd2_5;

  return points;
}
