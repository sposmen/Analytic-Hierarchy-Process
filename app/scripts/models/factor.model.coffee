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
      @pair_wise_options = [[[]]]
      @pair_wise_options_fractions = [[[]]]
      @columnSumOptions = [[]]
      @columnSumUnitOptions = [[]]
      @rowSumOptions = [[]]
      @optionsScore = []
      @childs = []
      
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