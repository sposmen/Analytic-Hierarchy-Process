angular.module('app.models', [])

.factory 'Factor', () ->
  class Factor
    
    constructor: (parent)->
      @parent = parent || false
      @meta = ''
      @name = 'New Factor'
      @pairwise = [[]]
      @pairwise[0][0] = 1
      @pairwisefractions = [[]]
      @columnSum = []
      @columnSumUnit = []
      @rowSum = []
      @pair_wise_options = [[[]]]
      @pair_wise_options[0][0][0] = 1
      @pair_wise_options_fractions = [[[]]]
      @columnSumOptions = [[]]
      @columnSumUnitOptions = [[]]
      @rowSumOptions = [[]]
      @optionsScore = []
      @childs = []
      
    getTree:->
      childs = []
      childs.push(child.getTree()) for child in @childs
      
      name: @name
      meta: @meta
      pairwise:@pairwise
      pair_wise_options:@pair_wise_options
      childs:childs
      
    setTree:(data)->
      @name = data.name
      @meta= data.meta
      @pairwise= data.pairwise
      @pairwisefractions= angular.copy data.pairwise
      @pair_wise_options=data.pair_wise_options
      @pair_wise_options_fractions = angular.copy data.pair_wise_options
      for child in data.childs
        i = @addChild() - 1
        @childs[i].setTree(child)
      
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
        for child in @childs
          if child.hasChilds()
            notChilded = false
            result += child.getOptionsScore(index)
      
      if notChilded
        result = if @optionsScore[index] != undefined and not isNaN(@optionsScore[index].score) then @optionsScore[index].score else 0
        if !!@parent and
          @parent.rowSum[@parent.childs.indexOf(@)] != undefined and
          not isNaN(@parent.rowSum[@parent.childs.indexOf(@)]) and
          @parent.rowSum[@parent.childs.indexOf(@)] != 0
            result = result*@parent.rowSum[@parent.childs.indexOf(@)]
        
      result
        
