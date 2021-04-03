import { BoxWeight, generateBlock } from 'insider-helpers';

const state = {
  isPaused: true,
  leftBlocks: [],
  rightBlocks: [],
  readyBlocks: [],
  finished: false
};

const mutations = {
  togglePause (state) {
    state.isPaused = !state.isPaused
  },
  addRightBlock (state) {
    const randomBlock = generateBlock();
    state.rightBlocks.push(randomBlock);
  },
  addLeftBlock (state) {
    const block = state.readyBlocks.shift();
    state.leftBlocks.push(block);
  },
  initialReadyBlocks (state){
    state.readyBlocks = [];
    for(let i = 0; i < 2; i++){
      const randomBlock = generateBlock();
      state.readyBlocks.push(randomBlock)
    }
  },
  addFallingBlock (state){
    const randomBlock = generateBlock();
    state.readyBlocks.push(randomBlock)
  },
  ReGame (state) {
    state.isPaused = true;
    state.leftBlocks = [];
    state.rightBlocks = [];
    state.readyBlocks = [];
  },
  moveRight (state){
    if (state.isPaused || state.readyBlocks[0].offset - 1 <= 0) return;
    state.readyBlocks[0].offset -= 1;
  },
  moveLeft (state){
    if (state.isPaused || state.readyBlocks[0].offset + 1 > 5) return;
    state.readyBlocks[0].offset += 1;
  },
};

const actions = {
  FinishFalling ({commit, state, getters, dispatch}) {
    commit("addLeftBlock");
    commit("addFallingBlock");
    if (state.leftBlocks.length && state.leftBlocks.length !== state.readyBlocks.length){      
      commit('addRightBlock');
    }
    if (getters.gameStatus) {
      setTimeout(() => {
        state.finished = true;
        state.isPaused = true;
      }, 0);
    }
  },
  StartGame ({commit, state}){
    state.finished = false;
    commit("ReGame");
    commit("addRightBlock");
    commit("initialReadyBlocks");
  }
};

const getters = {
  isFinished (state) {
    return state.finished;
  },  
  isPaused (state) {
    return state.isPaused
  },
  stickBending(state, getters) {
    let leftSum = BoxWeight(state.leftBlocks),
        rightSum = BoxWeight(state.rightBlocks);

    if (!leftSum) return 0;
    if (leftSum === rightSum) return 0;
    return leftSum > rightSum ? (leftSum - rightSum) / leftSum * -100 : (rightSum - leftSum) / rightSum * 100
  },
  calcBalance (state) {
    return Math.abs(BoxWeight(state.leftBlocks) - BoxWeight(state.rightBlocks));
  },
  leftBlocks (state) {
    return state.leftBlocks;
  },
  rightBlocks (state) {
    return state.rightBlocks;
  },
  readyBlocks (state) {
    return state.readyBlocks;
  },
  gameStatus(state, getters) {
    let leftSum = BoxWeight(state.leftBlocks),
        rightSum = BoxWeight(state.rightBlocks),
        stickBending = getters.stickBending
    return stickBending > 80 || stickBending < -80 || Math.abs(leftSum - rightSum) > 45
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
