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
    
    getOptionsScore:(index)->
      result = 0
      notChilded = true
      if @hasChilds()
        (result += child.getOptionsScore(index) if (child.hasChilds() && notChilded = false)) for child in @childs
      
      if notChilded
        result = if @optionsScore[index] != undefined and not isNaN(@optionsScore[index]) then @optionsScore[$index].score else 0
      result
        
