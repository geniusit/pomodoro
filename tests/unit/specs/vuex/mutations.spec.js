import mutations from '@/vuex/mutations'
import * as types from '@/vuex/mutation_types'
import { expect } from 'chai';

describe('mutations', () => {
  var state

  beforeEach(() => {
    state = {}
  })

  describe('START', () => {
    it('should set all the state properties correctly after start', () => {
      // ensure that all the properties are undefined
      // before calling the start method
      expect(state.started).to.be.undefined
      expect(state.stopped).to.be.undefined
      expect(state.paused).to.be.undefined
      expect(state.interval).to.be.undefined
      // call the start method
      mutations[types.START](state)
      // check that all the properties were correctly set
      expect(state.started).to.be.true
      expect(state.paused).to.be.false
      expect(state.stopped).to.be.false
      expect(state.interval).not.to.be.undefined
    })
  })
})
