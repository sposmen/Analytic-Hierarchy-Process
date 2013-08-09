angular.module('app.models', [])

.factory 'Factor', () ->
  class Factor
    
    constructor: (parent)->
      @parent = parent || false
      @name = 'New Factor'
      @pairwise = [[]]
      @pairwisefractions = [[]]
      @columnSum = []
      @columnSumUnit = []
      @rowSum = []
      @pair_wise_options = if !!@parent then @cloneMatrix(@parent.pair_wise_options) else [[[]]]
      @pair_wise_options_fractions = if !!@parent then @cloneMatrix(@parent.pair_wise_options_fractions) else [[[]]]
      @columnSumOptions = if !!@parent then @cloneMatrix(@parent.columnSumOptions) else  [[]]
      @columnSumUnitOptions = if !!@parent then @cloneMatrix(@parent.columnSumUnitOptions) else [[]]
      @rowSumOptions = if !!@parent then @cloneMatrix(@parent.rowSumOptions) else [[]]
      @optionsScore = if !!@parent then @cloneMatrix(@parent.optionsScore) else []
      @childs = []
      
    cloneMatrix:(matrix)->
      if Object.prototype.toString.call( matrix ) == '[object Array]'
        result = []
        for node in matrix
          result.push @cloneMatrix(node)
      else
        result = ''
      result
        
    getChilds:->
      @childs
      
    getChild:(index)->
      @childs[index] || false
      
    addChild:()->
      @childs.push(new Factor(@))
      
    removeChild:(index)->
      @pairwise.splice(index, 1)
      @pairwisefractions.splice(index, 1)
      @pair_wise_options.splice(index, 1)
      @pair_wise_options_fractions.splice(index, 1)
      @childs.splice(index, 1)
      
    hasChilds:->
      !!@childs.length
      
    hasParent:->
      !!parent || false
    
    getOptionsScore:(index)->
      result = 0
      if @hasChilds()
        result += child.getOptionsScore(index) for child in @childs
      else
        result = if @optionsScore[index]? then @optionsScore[$index].score else 0
      result
        
